import { Router, Request, Response } from "express"
import { MovieController } from "../controllers/MovieController"

const router = Router()

// Rotas específicas de Filme

const movieController = new MovieController()
// rotas (Filme: id, nome, tema, ano, duracao)
router.get('/filmes', movieController.getAll)
router.post('/filmes', movieController.create)

router.get('/:id', async (req: Request, res: Response) => {

    const id = req.params.id

    const filme = await db.collection('filmes').doc(id).get()

    return res.json({id: filme.id, ...filme.data()})
})

router.put('/filmes/:id', (req, res) => {
    // 1. pegar no BD o objeto de id, e atualizar os seus dados
    // 2. retornar o objeto atualizado
    const {id} = req.params

    const filme = {id, nome: 'Lagoa Azul', ano: 1995}

    // TODO

    return res.json(filme)
})

router.delete('/filmes/:id', (req, res) => {
    const {id} = req.params
    // TODO

    return res.status(204).send()
})

export default router