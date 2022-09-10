const { Entries } = require('../models');

const newsList = async (req, res) => {
    try {
        const list = await Entries.findAll({
            where:{
                type: 'news'
            },
            attributes: ['name', 'image', 'createdAt']
        })
        if (!list) return res.status(404).json('No news found')
        
        return res.status(200).json(list)

    } catch (error) {
        return res.status(500).json({message: error.message})
}
}
const getNewsById = async (req, res) => {
    try {
        const entriesNews = await Entries.findOne({ where: { id: req.params.id, type: "news" } })
        if(!entriesNews) throw new Error("The entry is not a news")
        return res.status(200).json(entriesNews)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

const createNews =async(req, res)=> {
    try {
        const { name, content, image, categoryId } = req.body;
        if(!name || !content || !image ){
            throw new Error('The entry has null values');
        }
        const DTO = {
            name : name, 
            content : content, 
            image : image, 
            categoryId : categoryId,
            type : 'news'
        };
        const newNews = await Entries.create(DTO);
        return res.json(newNews);
    } catch (err) {
        return res.status(400).json(err);
    }
}

module.exports = {
    newsList,
    getNewsById,
    createNews
}