const { Item, Admin, Brand } = require('../models');

class itemController {
    static async getAllitem (req, res) {
        try {
            let items = await Item.findAll({
            include: [Admin, Brand]
            });
            
            res.status(200).json(items)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async add (req, res) {
        try {
            const { name, image, price, stock, AdminId, BrandId } = req.body
            let result = await Item.add({
                name, image, price, stock, AdminId, BrandId
            })

            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    } 

    static update (req, res) {

    }

    static delete (req, res) {

    }

    static getItemByName (req, res) {

    }
}







module.exports = itemController