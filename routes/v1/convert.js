import app from 'express'
const router = app.Router()

import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

import { convertExcel } from '#controllers/uploadController.js'

router.post('/', upload.single('file'), convertExcel)

export default router
