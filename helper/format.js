import { ReasonPhrases, StatusCodes as SC } from 'http-status-codes'
import { getBase64Signature } from '#helper/templating.js'

const errorFormat = (e) => {
  return {
    stCode: e.statusCode || SC.INTERNAL_SERVER_ERROR,
    message: e.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
  }
}

const excelFormat = (row) => {
  let lt = row['Logika Berpikir']
  let aa = row['Kemampuan Analisa']
  let na = row['Kemampuan Numerik']
  let am = row['Motivasi Prestasi']
  let ad = row['Penyesuaian Diri']
  let es = row['Stabilitas Emosi']
  let ld = row['Kepemimpinan']
  let cm = row['Komunikasi']
  let wa = row['Kesediaan Kerja']
  let ws = row['Kecepatan Kerja']
  let wac = row['Ketelitian Kerja']
  let wd = row['Ketahanan Kerja']
  let sc = row['Konsep Diri']
  let mo = row['Motivasi']
  let as = row['Aspirasi']
  let signature = getBase64Signature(row['TTD Psikolog'])

  let finalObj = {
    name: row['Nama Peserta'],
    id: row['Peserta ID'],
    email: row['Email'],
    university: row['Universitas'],
    region: row['Regional'],
    psikolog: row['Psikolog'],
    candidate_advantage: row['Kelebihan'],
    candidate_improvement: row['Kekurangan'],
    iq: row['IQ IST'],
    psicological_aspect: Number(row['Aspek Psikologis']).toFixed(2),
    essay: Number(row['Esai']).toFixed(2),
    psicological_aspect_score: Number(
      row['Skor Akhir Aspek Psikologis']
    ).toFixed(2),
    essay_score: Number(row['Skor Akhir Esai']).toFixed(2),
    total_score: Number(row['Total Skor Akhir']).toFixed(2),
    recommendation: row['Decision'],
    signature,
    date: 'Desember 2024',
  }

  if (lt !== 0) finalObj[`lt_${lt}`] = 'x'
  if (aa !== 0) finalObj[`aa_${aa}`] = 'x'
  if (na !== 0) finalObj[`na_${na}`] = 'x'
  if (am !== 0) finalObj[`am_${am}`] = 'x'
  if (ad !== 0) finalObj[`ad_${ad}`] = 'x'
  if (es !== 0) finalObj[`es_${es}`] = 'x'
  if (ld !== 0) finalObj[`ld_${ld}`] = 'x'
  if (cm !== 0) finalObj[`cm_${cm}`] = 'x'
  if (wa !== 0) finalObj[`wa_${wa}`] = 'x'
  if (ws !== 0) finalObj[`ws_${ws}`] = 'x'
  if (wac !== 0) finalObj[`wac_${wac}`] = 'x'
  if (wd !== 0) finalObj[`wd_${wd}`] = 'x'
  if (sc !== 0) finalObj[`sc_${sc}`] = 'x'
  if (mo !== 0) finalObj[`mo_${mo}`] = 'x'
  if (as !== 0) finalObj[`as_${as}`] = 'x'

  return finalObj
}

const excelFormatPrestasi = (row) => {
  let lt = row['Logika Berpikir']
  let aa = row['Kemampuan Analisa']
  let na = row['Kemampuan Numerik']
  let am = row['Motivasi Prestasi']
  let ad = row['Penyesuaian Diri']
  let es = row['Stabilitas Emosi']
  let ld = row['Kepemimpinan']
  let cm = row['Komunikasi']
  let wa = row['Kesediaan Kerja']
  let ws = row['Kecepatan Kerja']
  let wac = row['Ketelitian Kerja']
  let wd = row['Ketahanan Kerja']
  let sc = row['Konsep Diri']
  let mo = row['Motivasi']
  let as = row['Aspirasi']
  let signature = getBase64Signature(row['TTD Psikolog'])

  let finalObj = {
    name: row['Nama Peserta'],
    id: row['Peserta ID'],
    email: row['Email'],
    university: row['Universitas'],
    date_interview: row['Tanggal Wawancara'],
    psikolog: row['Psikolog'],
    candidate_advantage: row['Kelebihan'],
    candidate_improvement: row['Kekurangan'],
    iq: row['IQ IST'],
    thinking_ability: Number(row['Thinking Ability (40%)']).toFixed(2),
    managing_self: Number(row['Managing Self (20%)']).toFixed(2),
    managing_other: Number(row['Managing Other (20%)']).toFixed(2),
    managing_task: Number(row['Managing Task (20%)']).toFixed(2),
    total_score: Number(row['Total Skor Akhir']).toFixed(2),
    recommendation: row['Decision'],
    signature,
    date: 'November 2024',
  }

  if (lt !== 0) finalObj[`lt_${lt}`] = 'x'
  if (aa !== 0) finalObj[`aa_${aa}`] = 'x'
  if (na !== 0) finalObj[`na_${na}`] = 'x'
  if (am !== 0) finalObj[`am_${am}`] = 'x'
  if (ad !== 0) finalObj[`ad_${ad}`] = 'x'
  if (es !== 0) finalObj[`es_${es}`] = 'x'
  if (ld !== 0) finalObj[`ld_${ld}`] = 'x'
  if (cm !== 0) finalObj[`cm_${cm}`] = 'x'
  if (wa !== 0) finalObj[`wa_${wa}`] = 'x'
  if (ws !== 0) finalObj[`ws_${ws}`] = 'x'
  if (wac !== 0) finalObj[`wac_${wac}`] = 'x'
  if (wd !== 0) finalObj[`wd_${wd}`] = 'x'
  if (sc !== 0) finalObj[`sc_${sc}`] = 'x'
  if (mo !== 0) finalObj[`mo_${mo}`] = 'x'
  if (as !== 0) finalObj[`as_${as}`] = 'x'

  return finalObj
}

export { errorFormat, excelFormat, excelFormatPrestasi }
