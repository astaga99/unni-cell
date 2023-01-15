const { Item, Admin, Brand } = require('../models');
const { tokenVerifier } = require('../helpers/jsonwebtoken');

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
            const { name, image, price, stock, BrandId} = req.body
            const acces_token = req.headers.access_token

            let AdminId = tokenVerifier(acces_token).id
            let result = await Item.create({
                name, image, price, stock, AdminId, BrandId 
            })
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    } 

    static update (req, res) {
        try {
            
        } catch (err) {

        }

    }

    static delete (req, res) {

    }

    static getItemByName (req, res) {

    }
}







module.exports = itemController