import Articles from './model'

const ArticlesController = {
    getAll(req, res){
        res.json({ articles: Articles.findAll() })
    },

    get(req, res){
        res.json({ articles: Articles.find(req.params.id) })
    },

    create(req, res){
        const article = Articles.create(req.body)

        res
            .status(201)
            .json(article)
    },

    update(req, res){
        const id = req.params.id
        const article = Articles.update(id, req.body)

        res
            .status(200)
            .json({ article })
    },

    destroy(req, res){
        const id =req.params.id

        Articles.destroy(id)
        res.status(204)
    }
}

export default ArticlesController