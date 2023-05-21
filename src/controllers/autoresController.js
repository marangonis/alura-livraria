import autores from "../models/Autor.js";

class autorController{
  //
  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado)
      } 
      catch (err) {
        res.status(500).json(err);
      }
  }
  //
  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id
      const autor = await autores.findById(id).exec()
      res.status(200).json(autor)
      } 
      catch (err) {
        res.status(400).send({message: `${err.message} - Id do autor não localizado.`})
      }
  }
  //
  static excluirAutor = async (req, res) => {
    try{
      const id =  req.params.id;
      await autores.findByIdAndDelete(id)
      res.status(200).send({message: 'autor removido com sucesso'})
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao EXCLUIR autor.`})
    }
  }  
//
  static atualizarAutor = async (req, res) => {
    try{
      const id =  req.params.id;
      await autores.findByIdAndUpdate(id, {$set: req.body})
      res.status(200).send({message: 'autor atualizado com sucesso'})
    } catch (err){
      res.status(500).send({message: `${err.message} - falha ao ATUALIZAR autor.`})
    }
  }  

  //
  static cadastrarAutor = async (req, res) => {
    try {
      let autor = new  autores(req.body)
      await autor.save()
      res.status(200).json(autor)
      } catch (err) {
        res.status(500).send({message: `${err.message} - falha ao CADASTRAR autor.`})
      }
  }
  
}


export default autorController
