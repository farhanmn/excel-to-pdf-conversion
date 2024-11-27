import { ReasonPhrases, StatusCodes as SC } from 'http-status-codes'

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
    psicological_aspect: row['Aspek Psikologis'],
    essay: row['Esai'],
    psikological_aspect_score: row['Skor Akhir \r\nAspek Psikologis'],
    essay_score: row['Skor Akhir \r\nEsai'],
    total_score: row['Total Skor Akhir'],
    recommendation: row['Decision'],
  }

  finalObj[`lt_${lt}`] = 'x'
  finalObj[`aa_${aa}`] = 'x'
  finalObj[`na_${na}`] = 'x'
  finalObj[`am_${am}`] = 'x'
  finalObj[`ad_${ad}`] = 'x'
  finalObj[`es_${es}`] = 'x'
  finalObj[`ld_${ld}`] = 'x'
  finalObj[`cm_${cm}`] = 'x'
  finalObj[`wa_${wa}`] = 'x'
  finalObj[`ws_${ws}`] = 'x'
  finalObj[`wac_${wac}`] = 'x'
  finalObj[`wd_${wd}`] = 'x'
  finalObj[`sc_${sc}`] = 'x'
  finalObj[`mo_${mo}`] = 'x'
  finalObj[`as_${as}`] = 'x'

  return finalObj
}

export { errorFormat, excelFormat }
