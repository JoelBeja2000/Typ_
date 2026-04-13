import img2pdf
import os
from PIL import Image

def generate_pdf():
    capturas_dir = "CAPTURAS"
    output_pdf = "OveTyp_Carousel.pdf"
    
    # Order: Level Select -> Gameplay -> Practice
    images = [
        "Captura selecionador niveles.png",
        "Jugando.png",
        "Practica.png"
    ]
    
    image_paths = [os.path.join(capturas_dir, img) for img in images if os.path.exists(os.path.join(capturas_dir, img))]
    
    if not image_paths:
        print("No images found in CAPTURAS directory.")
        return

    print(f"Generating PDF from: {image_paths}")
    
    with open(output_pdf, "wb") as f:
        f.write(img2pdf.convert(image_paths))
    
    print(f"Successfully generated {output_pdf}")

if __name__ == "__main__":
    generate_pdf()
