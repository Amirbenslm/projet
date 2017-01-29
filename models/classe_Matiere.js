'use strict';
module.exports=function(sequelize,DataType)
{
var Classe_Matiere = sequelize.define('classe_Matiere', {

},
{
  ClassMethodes:
     {
       Associate: function(models)
           {
             Etudier.belongsTo(models.Classe);
             Etudier.belongsTo(models.Matiere);
                                 
          }
    }
})
return Classe_Matiere;
}
                                 ;
                                 
                                 