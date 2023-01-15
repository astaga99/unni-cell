const { Brand } = require('../models');

class brandController {
    static async getAllBrand (req, res) {
        try {
            let brands = await Brand.findAll() 
            
            res.status(200).json(brands)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async add (req, res) {
        try {
            const { name, address, website } = req.body
            let result = await Brand.create({
                name, address, website
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

    static getBrandByName (req, res) {

    }
}







module.exports = brandController