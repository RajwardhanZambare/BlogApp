import mysql from 'mysql2'

const host = process.env.DB_HOST

const db = mysql.createConnection({
    host:`${host}`,
    user:"root",
    password:"rajmysql2006",
    database:"BlogApp"
})