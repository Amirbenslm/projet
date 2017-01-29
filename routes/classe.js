var express = require('express')
var router = express.Router()
module.exports = function(db) {
  router.post('/Classe',function (req,res) {
  	      db.Classe.create({
                classenom: req.body.classenom,
                filiere: req.body.filiere,
                niveau: req.body.niveau,
                cycle: req.body.cycle,
            }).then(function(Classe) {
                return res.json({ success: true, result: Classe });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    })
    router.get('/Classe/:id', function(req, res) {
        db.Classe.findOne({ where: { id: req.params.id } })
            .then(function(Classe) {
                return res.json({ success: true, result: Classe });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    })
    router.get('/Classe', function(req, res) {
        db.Classe.findAll({})
            .then(function(Classe) {
                return res.json({ success: true, result: Classe });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            })
    })
    router.put('/Classe/:id', function(req, res) {
        db.Classe.update({
                classenom: req.body.classenom,
                filiere: req.body.filiere,
                niveau: req.body.niveau,
                cycle: req.body.cycle,
            }, { where: { id: req.params.id } })
            .then(function(Classe) {
                return res.json({ success: true, result: Classe });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            })
   
  
  return router;

};
