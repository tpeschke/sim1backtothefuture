module.exports = {
    getList: (req, res) => {
        const db = req.app.get('db')

        db.getList().then( result => res.send(result) )
    },
    postList: (req,res) => {
        const db = req.app.get('db')

        var {cashmoney, stardate, labor} = req.body

        db.postList(cashmoney, stardate, labor).then( result => res.send(result) )
    },
    deleteThing: (req, res) => {
        const db = req.app.get('db')
        
        db.deleteThing(req.params.id).then(result => res.send(result))
    },
    editThing: (req, res) => {
        const db = req.app.get('db')

        var {cashmoney, stardate, labor} = req.body
        
        db.editThing(cashmoney, stardate, labor, req.params.id).then(result => res.send(result))
    }
}