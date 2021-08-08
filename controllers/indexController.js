const express = require("express")
const path = require("path")
const fs = require("fs")

const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", "productos.JSON")))


module.exports={
    index : function(req, res) {
        res.render('index', {
            productos
        });
      }
}