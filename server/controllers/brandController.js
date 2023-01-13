const { brandModel } = require('../models');

class brandController {
    static async getAllBrand (req, res) {
        try {
            let brand = await brandModel.findAll() 

            res.status(200).json(brand)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static add (req, res) {

    } 

    static update (req, res) {

    }

    static delete (req, res) {

    }

    static getBrandByName (req, res) {

    }
}







module.exports = brandController