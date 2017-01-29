var express = require('express')
var router = express.Router()
module.exports = function(db) {
  router.post('/Chapitre',function (req,res) {
  	      db.Chapitre.create({
                titre: req.body.titre,
                type: req.body.type,
                contenue: req.body.contenue,
                
            }).then(function(Chapitre) {
                return res.json({ success: true, result: Chapitre });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    })
    router.get('/Chapitre/:id', function(req, res) {
        db.Chapitre.findOne({ where: { id: req.params.id } })
            .then(function(Chapitre) {
                return res.json({ success: true, result: Chapitre });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    })
    router.get('/Chapitre', function(req, res) {
        db.Classe.findAll({})
            .then(function(Chapitre) {
                return res.json({ success: true, result: Chapitre });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            })
    })
    router.put('/Chapitre/:id', function(req, res) {
        db.Chapitre.update({
                titre: req.body.titre,
                type: req.body.type,
                contenue: req.body.contenue,
            }, { where: { id: req.params.id } })
            .then(function(Chapitre) {
                return res.json({ success: true, result: Chapitre });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            })
   
  
  return router;

};
