Correcciones:
- Excelente calidad de codigo, se nota muy profesional. Se autodocumenta con el buen nombrado y buena responsabilidad de componentes. 
- Estructura del proyecto clara y prolija. Archivos pequenos con buena division de responsabilidades. Componentes muy bien encapsulados.
- Buen uso de filtros y funciones para filtrar.
- persistencia efectiva con localStorage.
- los forms validados suman un monton y no se pedia.


Observaciones / cosas a mejorar:
- Las carpetas pages y components deben ir si o si dentro de src
- Borren codigo comentado antes de entregar

Nota: 10.



# [Probar en Vercel](https://tp-react-mu.vercel.app/)

# Integrantes

- Celayes Brisa [FAI-4923]
- Fernandez Rocio [FAI-4123]
- Russo Florencia [FAI-4911] 

# Archivos iniciales

### Home.jsx
  Es el archivo princiapal en nuestra aplicacion.

### App.jsx
  Actua como el componente raiz de la aplicacion, sirve para agregar otras paginas. En  nuestro caso renderiza el Home.

### index.css
  Contine estilos por defecto, y globales,  de la aplicacion.

### package-json.js
  Contiene la informacion de las dependencias utilizadas en el proyecto. En este caso, react y react-dom

# Instalacion
Sigue estos pasos para instalar y ejecutar el proyecto de manerea local:

### 1. Clonar el repositorio
En una terminal, clona el repositorio desde GitHub usando el siguiente comando:
```bash
git clone https://github.com/Rocio-Ayelen-Fernandez/Tp-React.git  
```

### 2. Acceder al directorio del proyecto
Navega al directorio principal del proyecto
```bash
cd Tp-React/tp-react-pwa
```

### 3. Instalar dependencias
Ejecuta el siguiente comando para instalar las dependencias necesarias
```bash
npm install
```

### 4. Ejecuta el proyecto
Para iniciar el servidor de desarrollo usa el siguiente comando
```bash
npm run dev
```

# Modo de uso

La aplicación incluye varias funcionalidades para gestionar películas y series. Al iniciar, se muestran 3 películas por defecto para que puedas probar la aplicación. 

<img src="https://github.com/user-attachments/assets/20765394-fe6a-4fa3-b4fa-7478c9e295a1" width="400" />

Puedes agregar nuevas películas o series proporcionando detalles como título, director, año, género, calificación, e imagen.

![8mb video-hpG-ZXsoUCRp](https://github.com/user-attachments/assets/d3c8c1ad-2257-4f48-8968-c04ea72c50b6)

Es posible ver los detalles de cada película o serie haciendo clic en ellas.

![Grabación de pantalla 2025-04-23 215733](https://github.com/user-attachments/assets/c0c17784-50bd-43e0-88fd-cca3c33dfbcb)

La aplicación permite aplicar filtros para buscar películas o series según género, tipo o calificación. 

![8mb video-qdE-LAX8Qu6J](https://github.com/user-attachments/assets/2005ae1f-813a-4f44-b2f8-278cdeffe8f9)

Si necesitas realizar cambios, puedes modificar los detalles de una película o serie existente. 

![Grabación de pantalla 2025-04-23 215911](https://github.com/user-attachments/assets/e498ce77-aa67-47e1-96fd-067de4782035)

Se puede mover elementos entre las listas "Por ver" y "Vistas" según su estado.

![Grabación 2025-04-23 221041](https://github.com/user-attachments/assets/6aa15a8d-e880-4628-a95e-38f7b453247e)

Si ya no necesitas una película o serie, puedes eliminarla fácilmente. 

![Grabación 2025-04-23 235420](https://github.com/user-attachments/assets/9ced5f27-033d-422c-97d0-7444590e4ed8)
