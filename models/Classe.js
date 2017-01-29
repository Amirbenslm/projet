'use strict';
module.exports=function(sequelize,DataType)
{
var Classe = sequelize.define('classe', {
    classenom: {
    type: DataType.STRING,
   
    unique: true,
    allowNULL:false
  },
    filiere: {
    type: DataType.STRING,

    unique: true,
    allowNULL:false
  },
     niveau: {
    type: DataType.STRING,
  
    unique: true,
    allowNULL:false
  },
     cycle: {
    type: DataType.STRING,

    unique: true,
    allowNULL:false
  },
     groupe: {
    type: DataType.STRING,

    unique: true,
    allowNULL:false
  }
 
},
{  ClassMethodes:
     {
       Associate: function(models)
           {
             Classe.hasMany(models.Etudiant);
             Classe.hasMany(models.Enseigner);
             Classe.hasMany(models.Etudier);
               
           }
     }
   }
                               )
return  Classe;
};