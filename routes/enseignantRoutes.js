var express = require('express')
var router = express.Router()
module.exports = function(db) {
    router.post('/Enseignant', function(req, res) {
        db.Enseignant.create({
                nom: req.body.nom,
                prenom: req.body.prenom,
                NCIN: req.body.NCIN,
                email: req.body.email,
            }).then(function(enseignant) {
                return res.json({ success: true, result: enseignant });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    })
    router.get('/Enseignant/:id', function(req, res) {
        db.Enseignant.findOne({ where: { id: req.params.id } })
            .then(function(enseignant) {
                return res.json({ success: true, result: enseignant });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    })
    router.get('/Enseignant', function(req, res) {
        db.Enseignant.findAll({})
            .then(function(enseignants) {
                return res.json({ success: true, result: enseignants });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            })
    })
    router.put('/Enseignant/:id', function(req, res) {
        db.Enseignant.update({
                nom: req.body.nom,
                prenom: req.body.prenom,
                NCIN: req.body.NCIN,
                email: req.body.email
            }, { where: { id: req.params.id } })
            .then(function(enseignant) {
                return res.json({ success: true, result: enseignant });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    });
    return router;
};