const mysql=require("mysql");
const Promise=require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo={
  host:"localhost",
  user:"root",
  password:"cdac",
  database:"practical1",

};
const addmessage=async (messege)=>{
  const connection=mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql=`Insert into MESSAGE values (?)`;

  await connection.queryAsync(sql,[messege.messegebody]);
  await connection.endAsync();
};

const messege={
  messegebody:"Hello Everyone! I am Aishwarya "
};

const showMessege = async () =>{
  const connection =mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from MESSAGE`;

  let list=await connection.queryAsync(sql);
  console.log(list);
  await connection.endAsync();
  return list;
};

showMessege();
