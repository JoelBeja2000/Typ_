import sys
import time

def main():
    print("Typ_ Audio Engine Started", flush=True)
    
    # Bucle principal para mantener el proceso vivo (Keep-Alive)
    while True:
        try:
            # Leer comandos desde stdin (Protocolo IPC simple)
            line = sys.stdin.readline()
            if not line:
                break
            
            line = line.strip()
            if line == "ping":
                print("pong", flush=True)
            elif line.startswith("note_on"):
                # TODO: Implementar disparador de audio real con Pyo/FoxDot
                print(f"DEBUG: Playing note {line}", flush=True)
                
        except KeyboardInterrupt:
            break
        except Exception as e:
            print(f"ERROR: {e}", file=sys.stderr, flush=True)

if __name__ == "__main__":
    main()
