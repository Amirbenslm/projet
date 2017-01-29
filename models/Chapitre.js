'use strict';
module.exports=function(sequelize,DataType)
{
var Chapitre = sequelize.define('chapitre', {
    titre: {
    type: DataType.STRING,
   
    unique: true,
    allowNULL:false
  },
    
    type: {
    type: DataType.STRING,
   
    unique: false,
    allowNULL:false
  },
    contenue: {
    type: DataType.STRING,

    unique: false,
    allowNULL:false
  }
},
{
    ClassMethodes:
     {
       Associate: function(models)
           {
             
             Professeur.belongsTo(models.Matiere);
                 
           }
     }
 })
return Chapitre;
};
                                
                        