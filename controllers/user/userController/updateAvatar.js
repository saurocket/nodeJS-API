const {User} = require("../../../model/user")
const createError = require('http-errors')
const path = require("path")
const fs = require("fs/promises")

const updateAvatar = async (req, res) => {
    const {_id} = req.user
    const {path: tempDir, originalname} = req.file
    const [extension] = originalname.split(".").reverse()
    const filename = `${_id}_avatar.${extension}`
    const uploadDir = path.join(__dirname, "../../../", "public//avatars", filename)
    try {
        await fs.rename(tempDir, uploadDir)
        const avatar = path.join("avatars", filename)
        const user = await User.findByIdAndUpdate(_id, {avatar}, {new:true})

        if (!user){
            throw new createError(404, `user with id - ${_id} is not update`)
        }
        console.log(user)
        res.json({
            status: "success",
            code: 200,
            data: {
             avatarUrl: user.avatar
            }
        })
    }catch (e) {
        await  fs.unlink(tempDir)
        throw new createError(404, `message: ${e.message}`)
    }
}
module.exports = updateAvatar
