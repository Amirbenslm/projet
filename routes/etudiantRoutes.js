var express = require('express')
var router = express.Router()
module.exports = function(db) {
  router.post('/Etudiant',function (req,res) {
  	      db.Etudiant.create({
                nom: req.body.nom,
                prenom: req.body.prenom,
                motdepass: req.body.motdepass,
                email: req.body.email,
            }).then(function(Etudiant) {
                return res.json({ success: true, result: Etudiant });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    })
    router.get('/Etudiant/:id', function(req, res) {
        db.Etudiant.findOne({ where: { id: req.params.id } })
            .then(function(Etudiant) {
                return res.json({ success: true, result: Etudiant });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    })
    router.get('/Etudiant', function(req, res) {
        db.Etudiant.findAll({})
            .then(function(Etudiant) {
                return res.json({ success: true, result: Etudiant });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            })
    })
    router.put('/Etudiant/:id', function(req, res) {
        db.Etudiant.update({
                nom: req.body.nom,
                prenom: req.body.prenom,
                motdepass: req.body.motdepass,
                email: req.body.email
            }, { where: { id: req.params.id } })
            .then(function(Etudiant) {
                return res.json({ success: true, result: Etudiant });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            })
   
  router.get('/Etudiant',function(req,res){

  })
  return router;

};
