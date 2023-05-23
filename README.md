# dinamic-form
run npm install
# para correrer el proyecto en desarrollo
usar npm run dev
# para correr pruebas correr
npm run test

el proyecto recibe un json del cual se renderizan todos los pasos e inputs, se tiene precargado el data.json con este schema
este recibe un array de pasos conla sifueinte info
component: Nombre del componente asociado al paso del formulario.
path: Ruta asociada al paso del formulario.
order: Orden del paso en el formulario.
description: Descripción del paso del formulario.
type: Tipo de entrada del paso del formulario (como "text", "email", "number", "checkbox", "summary", etc.).
id: Identificador único del paso del formulario.
name: Nombre del campo del formulario.
