'use strict';
module.exports=function(sequelize,DataType)
{
var Matiere = sequelize.define('matiere', {
    nomMatiere: {
    type: DataType.STRING,
 
    unique: true,
    allowNULL:false
  },
    description: {
    type: DataType.STRING,

    unique: true,
    allowNULL:false
  }},
    {
    ClassMethodes:
     {
       Associate: function(models)
           {
             Matiere.belongsTo(models.Classe);
               Matiere.hasMany(models.Etudier);
           }
     }
    
})
return Matiere;
}