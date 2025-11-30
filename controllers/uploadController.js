import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';
import puppeteer from 'puppeteer';
import { StatusCodes as SC } from 'http-status-codes';

import {
  errorFormat,
  // excelFormat,
  excelNewFormat
  // excelFormatPrestasi,
} from '#helper/format.js';

import defaultResponse from '#helper/response.js';
import { getTemplate, setFolderPlace } from '#helper/templating.js';

const convertExcel = async (req, res) => {
  const { file } = req;
  if (!file) {
    return res.status(400).json({ message: 'No uploaded file' });
  }

  try {
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const batchSize = 100; // Jumlah baris per batch
    let total = 0;

    for (let i = 0; i < sheetData.length; i += batchSize) {
      const batch = sheetData.slice(i, i + batchSize);

      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      for (let [, row] of batch.entries()) {
        // console.log(excelFormat(row))
        const outputDir = setFolderPlace(row);
        let format = excelNewFormat(row);
        const { html } = getTemplate('excel_template_2025', format);
        await page.setContent(html, { waitUntil: 'load' });
        const pdfPath = path.join(
          outputDir,
          `UNDEFINED_${format.name.toUpperCase()}.pdf`
        );
        await page.pdf({
          path: pdfPath,
          printBackground: true, // Menyertakan background warna & gambar dari CSS
          width: '37.8cm',
          height: '53.46cm',
          preferCSSPageSize: true // Menggunakan ukuran dari CSS @page jika ada
        });

        total++;
      }

      await browser.close();
    }

    fs.unlinkSync(file.path); // Hapus file upload setelah diproses

    return res.status(SC.OK).json(
      defaultResponse.renderData({
        message: 'File uploaded successfully by total ' + total
      })
    );
  } catch (e) {
    console.log(e);
    const { stCode, message } = errorFormat(e);
    return res.status(stCode).json(
      defaultResponse.renderError({
        message
      })
    );
  }
};

export { convertExcel };
