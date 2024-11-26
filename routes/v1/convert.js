import app from 'express'
const router = app.Router()

import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

import uploadController from '#controllers/uploadController.js'

router.post('/', upload.single('file'), uploadController.convertExcel)

export default router
