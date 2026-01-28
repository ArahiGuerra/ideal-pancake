
import os
import re



# Carpeta raíz donde están tus HTML
CARPETA_RAIZ = "D:\Documentos\GitHub\ideal-pancake"

TEXTO_VIEJO = "P26 /"
TEXTO_NUEVO = "El Colegio de México © 2026 /"

for root, dirs, files in os.walk(CARPETA_RAIZ):
    for file in files:
        if file.endswith(".html"):
            ruta_archivo = os.path.join(root, file)

            with open(ruta_archivo, "r", encoding="utf-8") as f:
                contenido = f.read()

            if TEXTO_VIEJO in contenido:
                contenido = contenido.replace(TEXTO_VIEJO, TEXTO_NUEVO)

                with open(ruta_archivo, "w", encoding="utf-8") as f:
                    f.write(contenido)

                print(f"✔ Modificado: {ruta_archivo}")
