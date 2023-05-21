import app from './src/app.js';
// teste funcionou beleza

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
