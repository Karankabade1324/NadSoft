const { Sequelize} = require('sequelize');//1//1

const sequelize=new Sequelize('StudentDb','root','',{
    host: 'localhost',//2
    dialect:'mysql'
});

sequelize.authenticate().then(()=>{//3
    console.log('connected with Database');
}).catch(err=>{
    console.log(err.message);
})

const db={};//6

db.student=require('./student.models')(sequelize,Sequelize);//last

db.marks=require('./marks.models')(sequelize,Sequelize);

db.student.hasMany(db.marks); //Association
db.marks.belongsTo(db.student);


db.Sequelize=Sequelize;//7
db.sequelize=sequelize;

module.exports=db;//5



