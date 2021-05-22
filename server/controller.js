
module.exports = {
    getBreakfast: async (req, res) => {
        const db = req.app.get('db')
        const breakfast = await db.breakfast.get_breakfast()
        res.status(200).send(breakfast)
    },

    addToBreakfast: async (req, res) => {
        const db = req.app.get('db')
        let {name, calories, protein, carbs, fat, weight} = req.body
        let addBreakfast = await db.breakfast.add_breakfast([name, calories, protein, carbs, fat, weight])
        return res.status(200).send(addBreakfast)
    },

    getLunch: async (req, res) => {
        const db = req.app.get('db')
        const lunch = await db.lunch.get_lunch()
        res.status(200).send(lunch)
    }

}