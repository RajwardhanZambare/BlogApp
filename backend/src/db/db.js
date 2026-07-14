import mysql from 'mysql2'

const host = process.env.DB_HOST
const pass = process.env.DB_PASSWORD

const db = mysql.createConnection({
    host:`${host}`,
    user:"root",
    password: `${pass}`,
    database:"BlogApp"
})

export default db