
module.exports=(sequelize,Sequelize)=>{//2.//1
   const model=sequelize.define('student',{
    rollNo:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Name:{
        type:Sequelize.STRING(150),
        allowNull:false
    },
    Mobile:{
        type:Sequelize.STRING(12),
        allowNull:false
    },
    Email:{
        type:Sequelize.STRING(150),
        allowNull:false,
        unique:true
    },
    Password:{
        type:Sequelize.STRING(150),
        allowNull:false
         }
   },{
    freezeTableName:true,
    timestamp:false//2
   })

   return model;

}