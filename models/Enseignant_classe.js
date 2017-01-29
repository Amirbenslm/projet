'use strict';
module.exports=function(sequelize,DataType)
{
var Enseignant_classe = sequelize.define('enseignant_classe', {

},
{
  ClassMethodes:
     {
       Associate: function(models)
           {
             Enseigner.belongsTo(models.Classe);
             Enseigner.belongsTo(models.Professeur);
                                 
          }
    }
})
return Enseignant_classe;
}
                                 ;
                                 
                                 