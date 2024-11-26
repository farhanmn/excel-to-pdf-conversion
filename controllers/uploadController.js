import { StatusCodes as SC } from 'http-status-codes'
import { errorFormat } from '#helper/format.js'

import defaultResponse from '#helper/response.js'

const convertExcel = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No uploaded file' })
  }
  console.log(req.file)
  // const { path } = req.file
  try {
    // const result = await uploadServices.readData({ dataBuffer: buffer })

    return res.status(SC.OK).json(
      defaultResponse.renderData({
        message: 'File uploaded successfully',
      })
    )
  } catch (e) {
    console.log(e)
    const { stCode, message } = errorFormat(e)
    return res.status(stCode).json(
      defaultResponse.renderError({
        message,
      })
    )
  }
}

export default { convertExcel }
