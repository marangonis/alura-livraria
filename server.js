import app from './src/app.js';
// ultimo teste

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
