const { Entries } = require("../models")

const getNewsById = async (req, res) => {
    try {
        const entriesNews = await Entries.findOne({ where: { id: req.params.id, type: "news" } })
        if(!entriesNews) throw new Error("The entry is not a news")
        return res.status(200).json(entriesNews)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

module.exports = {
    getNewsById
}