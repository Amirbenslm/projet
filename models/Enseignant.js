'use strict';
module.exports=function(sequelize,DataType)
{
var Enseignant = sequelize.define('enseignant', {
 email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true
            }
      
  },
    nom: {
    type: DataType.STRING,

    unique: true,
    allowNULL:false
  },
    prenom: {
    type: DataType.STRING,

    unique: true,
    allowNULL:false
  },
 password: {
            type: DataType.STRING,
            validate: {
                // len: [6, 30],
                notEmpty: true
            }
        }
}

                            ,
   {  ClassMethodes:
     {
       Associate: function(models)
           {
             
             Professeur.hasMany(models.classe_Matiere);
                 
           }
     }
   }
                               )
return  Enseignant;
};