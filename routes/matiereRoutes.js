var express = require('express')
var router = express.Router()
module.exports = function(db) {
    router.post('/matiere', function(req, res) {
        db.Matiere.create({
                titreMatiere: req.body.titreMatiere
            }).then(function(matiere) {
                return res.json({ success: true, result: matiere });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    })
    router.get('/matiere/:id', function(req, res) {
        db.Matiere.findOne({ where: { id: req.params.id } })
            .then(function(matiere) {
                return res.json({ success: true, result: matiere });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    })
    router.put('/matiere/:id', function(req, res) {
        db.Matiere.update({
                titreMatiere: req.body.titreMatiere
            }, { where: { id: req.params.id } })
            .then(function(matiere) {
                return res.json({ success: true });
            })
            .catch(function(err) {
                return res.json({ success: false, err: err });
            });
    });
    return router;
};