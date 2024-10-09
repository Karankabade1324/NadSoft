
module.exports=(sequelize,Sequelize)=>{//2.//1
   const model=sequelize.define('marks',{
    ID:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Sub_Name:{
        type:Sequelize.STRING(150),
        allowNull:false
    },
    Marks:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
   },{
    freezeTableName:true,
    timestamp:false//2
   })

   return model;

}