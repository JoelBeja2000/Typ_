import sys
import time
import socket
import threading
import json
from pyo import *

class AudioEngine:
    def __init__(self):
        self.server = Server().boot()
        self.server.start()
        self.osc_server = None
        self.running = True
        
    def start_osc_server(self):
        self.osc_server = OscServer("127.0.0.1", 9000)
        self.osc_server.addMsgHandler("/note_on", self.handle_note_on)
        self.osc_server.addMsgHandler("/note_off", self.handle_note_off)
        self.osc_server.addMsgHandler("/ping", self.handle_ping)
        self.osc_server.start()
        
    def handle_ping(self, addr, tags, data, source):
        self.osc_server.send("/pong", [time.time()])
        
    def handle_note_on(self, addr, tags, data, source):
        note = data[0]
        velocity = data[1] if len(data) > 1 else 64
        
        # Crear sonido según el tipo de nota
        if note == 36:  # Kick
            self.play_kick()
        elif note == 38:  # Snare
            self.play_snare()
        elif note == 42:  # HiHat
            self.play_hihat()
        elif note == 46:  # Ghost HiHat
            self.play_ghost_hihat()
        else:  # Lead o Bass
            self.play_synth(note, velocity)
            
    def handle_note_off(self, addr, tags, data, source):
        pass  # No es necesario para este ejemplo
        
    def play_kick(self):
        kick = Sine(freq=60, mul=0.3).out()
        kick_env = Adsr(attack=0.01, decay=0.2, sustain=0, release=0.1, dur=0.3).play()
        kick.mul = kick_env
        
    def play_snare(self):
        noise = Noise(mul=0.1).out()
        noise_filt = ButBP(noise, freq=1500, q=1).out()
        snare_env = Adsr(attack=0.01, decay=0.1, sustain=0, release=0.1, dur=0.1).play()
        noise_filt.mul = snare_env
        
    def play_hihat(self):
        noise = Noise(mul=0.05).out()
        noise_filt = ButHP(noise, freq=8000).out()
        hihat_env = Adsr(attack=0.01, decay=0.05, sustain=0, release=0.05, dur=0.05).play()
        noise_filt.mul = hihat_env
        
    def play_ghost_hihat(self):
        noise = Noise(mul=0.02).out()
        noise_filt = ButHP(noise, freq=12000).out()
        ghost_env = Adsr(attack=0.01, decay=0.05, sustain=0, release=0.05, dur=0.05).play()
        noise_filt.mul = ghost_env
        
    def play_synth(self, note, velocity):
        freq = midiToHz(note)
        
        # SuperSaw-ish: 3 osciladores ligeramente desafinados
        osc1 = Saw(freq=freq, mul=0.2).out()
        osc2 = Saw(freq=freq * 1.005, mul=0.2).out()
        osc3 = Saw(freq=freq * 0.995, mul=0.2).out()
        
        # Filtro lowpass con resonancia
        filter_freq = freq * 3 + (velocity * 2)
        filt = ButLP([osc1, osc2, osc3], freq=filter_freq, q=4).out()
        
        # Envolvente
        env = Adsr(attack=0.01, decay=0.3, sustain=0.1, release=0.1, dur=0.4).play()
        filt.mul = env
        
    def stop(self):
        self.running = False
        if self.osc_server:
            self.osc_server.stop()
        self.server.stop()

def main():
    print("Typ_ Audio Engine Started", flush=True)
    
    engine = AudioEngine()
    engine.start_osc_server()
    
    # Bucle principal para mantener el proceso vivo (Keep-Alive)
    try:
        while engine.running:
            time.sleep(0.1)
            
    except KeyboardInterrupt:
        pass
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr, flush=True)
    finally:
        engine.stop()

if __name__ == "__main__":
    main()
