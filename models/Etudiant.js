'use strict';
module.exports=function(sequelize,DataTypes)
{
var Etudiant = sequelize.define('etudiant', {
  email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true
            }
  },
    nom: {
    type: DataTypes.STRING,
   
    unique: false,
    allowNULL:false
  },
    prenom: {
    type: DataTypes.STRING,
  
    unique: false,
    allowNULL:false
  },
  password: {
            type: DataTypes.STRING,
            validate: {
                // len: [6, 30],
                notEmpty: true
            }
        }
},
   {  ClassMethodes:
     {
       Associate: function(models)
           {
             Etudiant.belongsTo(models.Class);
           }
     }
   }
)
return  Etudiant;
};