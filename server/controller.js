
module.exports = {

    //totalCals functions
    getDailyBudget: async (req, res) => {
        const db = req.app.get('db')
        const dailyBudget = await db.dailybudget.daily_budget()
        res.status(200).send(dailyBudget)
    },

    updateBudget: async (req, res) => {
        const db = req.app.get('db')
        let {calories} = req.body
        const update = await db.dailybudget.update_budget([calories])
        return res.status(200).send(update)
    },

    //breakfast functions
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
    deleteFromBreakfast: async (req, res) => {
        const {breakfast_id} = req.params
        const db = req.app.get('db')
        const deleteFromBreakfast = await db.breakfast.delete_from_breakfast([breakfast_id])
        return res.status(200).send(deleteFromBreakfast)
    },

    //lunch functions
    getLunch: async (req, res) => {
        const db = req.app.get('db')
        const lunch = await db.lunch.get_lunch()
        res.status(200).send(lunch)
    },

    //dinner functions
    getDinner: async (req, res) => {
        const db = req.app.get('db')
        const dinner = await db.dinner.get_dinner()
        res.status(200).send(dinner)
    },

    //snacks functions
    getSnacks: async (req, res) => {
        const db = req.app.get('db')
        const snacks = await db.snacks.get_snacks()
        res.status(200).send(snacks)
    }

}