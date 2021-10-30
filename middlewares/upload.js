const multer = require('multer')
const path = require("path")

const tempDir = path.join(__dirname, "../", "tmp")


const uploadConfig = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, tempDir)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
    limit: {
        fileSize: 2048
    }
})
const upload = multer({
    storage: uploadConfig
})

module.exports = upload
