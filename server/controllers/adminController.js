const { adminModel } = require('../models');

class adminController {
    static async getAllAdmin (req, res) {
        try {
            let admins = await adminModel.findAll()

            res.status(200).json(admins)
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

    static getAdminByName (req, res) {

    }
}







module.exports = adminController