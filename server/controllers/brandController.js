const { tokenGeneratorAdmin, tokenGeneratorBrand } = require('../helpers/jsonwebtoken');
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

            let access_token_brand =  tokenGeneratorAdmin(result);
            
            res.status(201).json({access_token_brand})
        } catch (err) {
            res.status(500).json(err)
        }

    } 

    static async update (req, res) {
        try {
            const id = +req.params.id
            const { name, address, website } = req.body;

            let result = await Brand.update({
                name, address, website
            }, {
                where:{id}
            });
            res.status(201).json({
                message:`Brand dengan id ${id} berhasil diupdate`
            });

        } catch (err) {
            res.status(500).json(err);
        }

    }

    static async delete (req, res) {
        try { 
            const id = req.params.id;
            let result = await Brand.destroy({
                where:{id}
            });
        
            result === 1 ? 
            res.status(201).json({
                message:`Brand dengan id ${id} berhasil dihapus`
            }) : 
            res.status(404).json({
                message:`Brand dengan id ${id} tidak ditemukan`
            })

        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async getBrandById (req, res) {
        try {
            const id = +req.params.id
            let result = await Brand.findByPk(id)

            result !== null ?
            res.status(200).json(result) :
            res.status(404).json({
                message:`Brand dengan id ${id} tidak ditemukan!`
            });

            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}







module.exports = brandController