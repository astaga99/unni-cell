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
            const { name, image, price, stock} = req.body
            const access_token_admin = req.headers.access_token_admin
            const access_token_brand = req.headers.access_token_brand

            let AdminId = tokenVerifier(access_token_admin).id
            let BrandId = tokenVerifier(access_token_brand).id
            
            let result = await Item.create({
                name, image, price, stock, AdminId, BrandId 
            })
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    } 

    static async update (req, res) {
        try {
            const {name, image, price, stock} = req.body
            const id = +req.params.id;
            
            let result = await Item.update({
                name, image, price, stock
            }, {
                where : {id}
            })
            res.status(201).json({
                message:`Item dengan id ${id} berhasil diupdate!`
            })
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async delete (req, res) {
        try {
            const id = +req.params.id;
            let result = await Item.destroy({
                where:{id}
            })

            result === 1 ? 
            res.status(200).json({
                message:`Item dengan id ${id} berhasil dihapus!`    
            }) : 
            res.status(404).json({
                messaga:`Item dengan id ${id} tidak ditemukan!`
            })
        } catch (err) {
            res.status(500).json(err)
        }

    }

    static async getItemById (req, res) {
        try {
            const id = +req.params.id;
            let result = await Item.findByPk(id)

            result !== null ?
            res.status(200).json(result) :
            res.status(404).json({
                message:`Admin dengan id ${id} tidak ditemukan!`
            });

        } catch (err) {
            res.status(500).json(err)
        }
    }
}







module.exports = itemController