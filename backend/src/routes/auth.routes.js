import express from "express"

const router = express.Router()

router.post('/register', (req, res) => {
    return res.json({
        message: "this is '/register' api"
    })
})

export default router