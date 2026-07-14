import db from '../db/db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {

    //check for existing user by checking email or username
    //define the query
    const existingUserQuery = "SELECT * FROM users WHERE email = ? OR username = ?"

    //execute the query
    db.query(existingUserQuery, [req.body.email, req.body.username], async (err, data) => {
        if(err){ //if error occurs then return the error
            return res.json(err)
        }

        if(data.length){ //if data exists then the user is already present 
            return res.status(409).json({
                message: "user already exists"
            })
        }

        //hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        //add the user into the users table
        //define the query
        const addUserQuery = "INSERT INTO users(`fullname`,`username`, `email`, `password`, `pfp`) VALUES (?)"

        //define the values to be entered into the table
        const values = [
            req.body.fullname,
            req.body.username,
            req.body.email,
            hashedPassword,
            "https://ik.imagekit.io/rajwardhan/defaultPFP.png?updatedAt=1783948758555"
        ]

        //execute the query
        db.query(addUserQuery, [values], (err, data) => {
            if(err){
                return res.json(err)
            }

            return res.status(200).json("user added into the table sucessfull")
        })
    })
}