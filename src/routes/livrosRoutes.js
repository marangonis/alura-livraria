import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router()

router
  .get("/livros",LivroController.listarLivros)
  //http://localhost:3000/livros/busca?editora=Alura
  // A rota deve ser da mais especifica pra menos especifica
  .get("/livros/busca", LivroController.listarLivroPorEditora)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros",LivroController.cadastrarLivro)
  .put("/livros/:id",LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)

export default router




