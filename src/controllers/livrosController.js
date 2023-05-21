import livros from "../models/Livro.js";

class LivroController{
  //
  static listarLivros = async (req, res) => {
    try {
      const livrosResultado = await livros.find()
      .populate('autor')
      .exec()
      res.status(200).json(livrosResultado)
      } 
      catch (err) {
        res.status(500).json(err);
      }
  }
  //
  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id
      const livro = await livros.findById(id)
      .populate('autor','nome')
      .exec()
      res.status(200).json(livro)
      } 
      catch (err) {
        res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
      }
  }
  //
  static listarLivroPorEditora = async (req, res) => {
    try {
      const editora = req.query.editora
      const livrosResult = await livros.find({'editora':editora})
      //.populate('autor','nome')
      //.exec()
      res.status(200).json(livrosResult)
      } 
      catch (err) {
        res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
      }
  }
  //
  static excluirLivro = async (req, res) => {
    try{
      const id =  req.params.id;
      await livros.findByIdAndDelete(id)
      res.status(200).send({message: 'Livro removido com sucesso'})
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao EXCLUIR livro.`})
    }
  }  
//
  static atualizarLivro = async (req, res) => {
    try{
      const id =  req.params.id;
      await livros.findByIdAndUpdate(id, {$set: req.body})
      res.status(200).send({message: 'Livro atualizado com sucesso'})
    } catch (err){
      res.status(500).send({message: `${err.message} - falha ao ATUALIZAR livro.`})
    }
  }  

  //
  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new  livros(req.body)
      await livro.save()
      res.status(200).json(livro)
      } catch (err) {
        res.status(500).send({message: `${err.message} - falha ao CADASTRAR livro.`})
      }
  }
  
}


export default LivroController

