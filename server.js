const express = require('express');
const path = require('path');
const app = express();

// Sirve la carpeta public/ directamente
app.use(express.static('public'));

// Ruta de prueba
app.get('/ping', (req, res) => {
  res.send('¡Conexión exitosa!');
});

app.listen(3000, () => console.log('Servidor listo en http://localhost:3000'));

// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor activo en http://localhost:${PORT}`);
});