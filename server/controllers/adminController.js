const { Admin } = require('../models');
const { decryptPwd } = require('../helpers/decrypt');

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

    static async login (req, res) {
        try {
            const {email, password} = req.body
            let emailFound = await Admin.findOne({
                where: {email}
            }) 

            if (emailFound) {
                if (decryptPwd(password, emailFound.password)) {
                    res.status(200).json(emailFound)
                } else {
                    res.status(403).json({
                        message:"Password salah!"
                    })
                }
            } else {
                res.status(404).json({
                    message:"Admin tidak ditemukan!"
                })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async update (req, res) {
        try {
            const {name, username, email, password} = req.body
            const id = +req.params.id
            let result = await Admin.update({
                name, username, email, password
            },{
                where : {id}
            })
            res.status(201).json({
                message:`Admin dengan id ${id} berhasil diupdate!`
            })
        } catch (err) {
            res.status(500).json(err)
        }

    }

    static async delete (req, res) {
        try { 
            const id = +req.params.id 
            let result = await Admin.destroy({
                where:{id}
            })

            result === 1 ? 
            res.status(200).json({
                message:`Admin dengan id ${id} berhasil dihapus!`    
            }) : 
            res.status(404).json({
                messaga:`Admin dengan id ${id} tidak ditemukan!`
            })
        } catch (err) {
            res.status(500).json(err)
        }

    }

    static async getAdminById (req, res) {
        try {
            const id = +req.params.id
            let result = await Admin.findByPk(id)
  
            result !== null ?
            res.status(200).json(result) :
            res.status(404).json({
                message:`Admin dengan id ${id} tidak ditemukan!`
            })   
        } catch (err) {
            res.status(500).json(err)
        }

    }
};







module.exports = adminController