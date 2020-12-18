const mysql = require('mysql')
const pool = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'Mosonik97',
    connectionLimit:10,
    database:'expresstest',
})

let users = {

};
users.all=()=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM users',(error,results)=>{
            if(error){
                return reject(error)
            }
            return resolve(results)
        })
    })
}

users.one=(id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM users WHERE id = ?',[id],(error,results)=>{
            if(error){
                return reject(error)
            }
            return resolve(results)
        })
    })
}

users.delete=(id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('DELETE FROM users WHERE id = ?',[id],(error,results)=>{
            if(error){
                return reject(error)
            }
            return resolve(results)
        })
    })
}
users.post=(fname,lname,password)=>{
    return new Promise((resolve,reject)=>{
        var now = new Date()
        pool.query('INSERT INTO users(`fname`, `lname`, `password`, `created_on`) VALUES(?,?,?,?)',[fname,lname,password,now]
        ,(error,results)=>{
            if(error){
                return reject(error)
            }
            return resolve(results)
        })
    }) 
}

users.put=(fname,lname,password,id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('UPDATE `users` SET `fname`=?,`lname`=?,`password`=? WHERE id=?',[fname,lname,password,id]
        ,(error,results)=>{
            if(error){
                return reject(error)
            }
            return resolve(results)
        })
    }) 
}


module.exports = users
