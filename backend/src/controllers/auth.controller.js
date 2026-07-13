import express from "express"

export const registerUser = async (req, res) => {
    const name = req.body.name

    return res.status(200).json({
        name: name,
        message:"this is '/api/auth/register' api"
    })
}