const fs = require("fs")
const path = require("path")

let productos = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", "productos.JSON"),"utf-8"))

module.exports = {
    detail : function(req, res) {
        product = productos.find(producto => producto.id === +req.params.id)
        res.render('detalleMenu',{
            product
        });
      }
}