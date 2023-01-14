const { Admin } = require('../models');

class adminController {
    static async getAllAdmin (req, res) {
        try {
            let admins = await Admin.findAll()

            res.status(200).json(admins)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async add (req, res) { 
        try {
            const {name, username, email, password} = req.body

            let result = await Admin.create({
                name, username, email, password
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

    static getAdminByName (req, res) {

    }
}







module.exports = adminController