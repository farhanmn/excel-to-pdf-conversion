import { ReasonPhrases, StatusCodes as SC } from 'http-status-codes';
import { getBase64Signature } from '#helper/templating.js';

const errorFormat = (e) => {
  return {
    stCode: e.statusCode || SC.INTERNAL_SERVER_ERROR,
    message: e.message || ReasonPhrases.INTERNAL_SERVER_ERROR
  };
};

const excelFormat = (row) => {
  let lt = row['Logika Berpikir'];
  let aa = row['Kemampuan Analisa'];
  let na = row['Kemampuan Numerik'];
  let am = row['Motivasi Prestasi'];
  let ad = row['Penyesuaian Diri'];
  let es = row['Stabilitas Emosi'];
  let ld = row['Kepemimpinan'];
  let cm = row['Komunikasi'];
  let wa = row['Kesediaan Kerja'];
  let ws = row['Kecepatan Kerja'];
  let wac = row['Ketelitian Kerja'];
  let wd = row['Ketahanan Kerja'];
  let sc = row['Konsep Diri'];
  let mo = row['Motivasi'];
  let as = row['Aspirasi'];
  let signature = getBase64Signature(row['TTD Psikolog']);

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
    date: 'Desember 2024'
  };

  if (lt !== 0) finalObj[`lt_${lt}`] = 'x';
  if (aa !== 0) finalObj[`aa_${aa}`] = 'x';
  if (na !== 0) finalObj[`na_${na}`] = 'x';
  if (am !== 0) finalObj[`am_${am}`] = 'x';
  if (ad !== 0) finalObj[`ad_${ad}`] = 'x';
  if (es !== 0) finalObj[`es_${es}`] = 'x';
  if (ld !== 0) finalObj[`ld_${ld}`] = 'x';
  if (cm !== 0) finalObj[`cm_${cm}`] = 'x';
  if (wa !== 0) finalObj[`wa_${wa}`] = 'x';
  if (ws !== 0) finalObj[`ws_${ws}`] = 'x';
  if (wac !== 0) finalObj[`wac_${wac}`] = 'x';
  if (wd !== 0) finalObj[`wd_${wd}`] = 'x';
  if (sc !== 0) finalObj[`sc_${sc}`] = 'x';
  if (mo !== 0) finalObj[`mo_${mo}`] = 'x';
  if (as !== 0) finalObj[`as_${as}`] = 'x';

  return finalObj;
};

const excelFormatPrestasi = (row) => {
  let lt = row['Logika Berpikir'];
  let aa = row['Kemampuan Analisa'];
  let na = row['Kemampuan Numerik'];
  let am = row['Motivasi Prestasi'];
  let ad = row['Penyesuaian Diri'];
  let es = row['Stabilitas Emosi'];
  let ld = row['Kepemimpinan'];
  let cm = row['Komunikasi'];
  let wa = row['Kesediaan Kerja'];
  let ws = row['Kecepatan Kerja'];
  let wac = row['Ketelitian Kerja'];
  let wd = row['Ketahanan Kerja'];
  let sc = row['Konsep Diri'];
  let mo = row['Motivasi'];
  let as = row['Aspirasi'];
  let signature = getBase64Signature(row['TTD Psikolog']);

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
    date: 'November 2024'
  };

  if (lt !== 0) finalObj[`lt_${lt}`] = 'x';
  if (aa !== 0) finalObj[`aa_${aa}`] = 'x';
  if (na !== 0) finalObj[`na_${na}`] = 'x';
  if (am !== 0) finalObj[`am_${am}`] = 'x';
  if (ad !== 0) finalObj[`ad_${ad}`] = 'x';
  if (es !== 0) finalObj[`es_${es}`] = 'x';
  if (ld !== 0) finalObj[`ld_${ld}`] = 'x';
  if (cm !== 0) finalObj[`cm_${cm}`] = 'x';
  if (wa !== 0) finalObj[`wa_${wa}`] = 'x';
  if (ws !== 0) finalObj[`ws_${ws}`] = 'x';
  if (wac !== 0) finalObj[`wac_${wac}`] = 'x';
  if (wd !== 0) finalObj[`wd_${wd}`] = 'x';
  if (sc !== 0) finalObj[`sc_${sc}`] = 'x';
  if (mo !== 0) finalObj[`mo_${mo}`] = 'x';
  if (as !== 0) finalObj[`as_${as}`] = 'x';

  return finalObj;
};

const excelNewFormat = (row) => {
  // Implementasi format baru jika diperlukan
  let id = row['No'];
  let name = row['Nama Peserta'];
  let university = row['Universitas'];
  let ro = row['RO'];
  let iq_scale = row['IQ IST'];
  let smart_grade = row['Kategori IQ'];
  let v_logic =
    row['Logika Berpikir'] == '#N/A'
      ? 0
      : Number(row['Logika Berpikir']).toFixed(2);
  let v_logic_text =
    row['Logika Berpikir'] == '#N/A'
      ? '#N/A'
      : Number(row['Logika Berpikir']).toFixed(2);
  let v_verbal =
    row['Penalaran Verbal'] == '#N/A'
      ? 0
      : Number(row['Penalaran Verbal']).toFixed(2);
  let v_verbal_text =
    row['Penalaran Verbal'] == '#N/A'
      ? '#N/A'
      : Number(row['Penalaran Verbal']).toFixed(2);
  let v_nonverbal =
    row['Penalaran Non Verbal'] == '#N/A'
      ? 0
      : Number(row['Penalaran Non Verbal']).toFixed(2);
  let v_nonverbal_text =
    row['Penalaran Non Verbal'] == '#N/A'
      ? '#N/A'
      : Number(row['Penalaran Non Verbal']).toFixed(2);
  let v_numeric =
    row['Penalaran Numerik'] == '#N/A'
      ? 0
      : Number(row['Penalaran Numerik']).toFixed(2);
  let v_numeric_text =
    row['Penalaran Numerik'] == '#N/A'
      ? '#N/A'
      : Number(row['Penalaran Numerik']).toFixed(2);
  let v_analytic =
    row['Kemampuan Analisa'] == '#N/A'
      ? 0
      : Number(row['Kemampuan Analisa']).toFixed(2);
  let v_analytic_text =
    row['Kemampuan Analisa'] == '#N/A'
      ? '#N/A'
      : Number(row['Kemampuan Analisa']).toFixed(2);
  let v_consistency =
    row['Keajegan Kerja'] == '#N/A'
      ? 0
      : Number(row['Keajegan Kerja']).toFixed(2);
  let v_consistency_text =
    row['Keajegan Kerja'] == '#N/A'
      ? '#N/A'
      : Number(row['Keajegan Kerja']).toFixed(2);
  let v_speed =
    row['Kecepatan Kerja'] == '#N/A'
      ? 0
      : Number(row['Kecepatan Kerja']).toFixed(2);
  let v_speed_text =
    row['Kecepatan Kerja'] == '#N/A'
      ? '#N/A'
      : Number(row['Kecepatan Kerja']).toFixed(2);
  let v_accuracy =
    row['Ketelitian Kerja'] == '#N/A'
      ? 0
      : Number(row['Ketelitian Kerja']).toFixed(2);
  let v_accuracy_text =
    row['Ketelitian Kerja'] == '#N/A'
      ? '#N/A'
      : Number(row['Ketelitian Kerja']).toFixed(2);
  let v_endurance =
    row['Ketahanan Kerja'] == '#N/A'
      ? 0
      : Number(row['Ketahanan Kerja']).toFixed(2);
  let v_endurance_text =
    row['Ketahanan Kerja'] == '#N/A'
      ? '#N/A'
      : Number(row['Ketahanan Kerja']).toFixed(2);
  let v_motivation =
    row['Motivasi'] == '#N/A' ? 0 : Number(row['Motivasi']).toFixed(2);
  let v_motivation_text =
    row['Motivasi'] == '#N/A' ? '#N/A' : Number(row['Motivasi']).toFixed(2);
  let v_social =
    row['Kemampuan Sosial'] == '#N/A'
      ? 0
      : Number(row['Kemampuan Sosial']).toFixed(2);
  let v_social_text =
    row['Kemampuan Sosial'] == '#N/A'
      ? '#N/A'
      : Number(row['Kemampuan Sosial']).toFixed(2);
  let v_leadership =
    row['Kepemimpinan'] == '#N/A' ? 0 : Number(row['Kepemimpinan']).toFixed(2);
  let v_leadership_text =
    row['Kepemimpinan'] == '#N/A'
      ? '#N/A'
      : Number(row['Kepemimpinan']).toFixed(2);
  let v_maturity =
    row['Kematangan'] == '#N/A' ? 0 : Number(row['Kematangan']).toFixed(2);
  let v_maturity_text =
    row['Kematangan'] == '#N/A' ? '#N/A' : Number(row['Kematangan']).toFixed(2);
  let health_summary = row['Kesimpulan'];
  let total_score = row['Total Score Akhir']
    ? Number(row['Total Score Akhir']).toFixed(2)
    : '#N/A';
  let decision = row['Decision'];

  let finalObj = {
    id,
    name,
    campus: university,
    regional: ro,
    test_date: 'Oktober 2025',
    iq_scale,
    smart_grade,
    v_logical: v_logic,
    v_logical_text: v_logic_text,
    v_verbal,
    v_verbal_text,
    v_nonverbal,
    v_nonverbal_text,
    v_numeric,
    v_numeric_text,
    v_analysis: v_analytic,
    v_analysis_text: v_analytic_text,
    v_consistency,
    v_consistency_text,
    v_speed,
    v_speed_text,
    v_accuracy,
    v_accuracy_text,
    v_endurance,
    v_endurance_text,
    v_motivation,
    v_motivation_text,
    v_social,
    v_social_text,
    v_leadership,
    v_leadership_text,
    v_maturity,
    v_maturity_text,
    total_score,
    recommendation_status: decision,
    normal_status: health_summary
  };

  if (health_summary === 'Normal') {
    finalObj.normal = 'v';
    finalObj.mild = '';
    finalObj.severe = '';
  } else if (health_summary === 'Kecenderungan Gangguan') {
    finalObj.normal = '';
    finalObj.mild = 'v';
    finalObj.severe = '';
  } else if (health_summary === 'Gangguan') {
    finalObj.normal = '';
    finalObj.mild = '';
    finalObj.severe = 'v';
  }

  return finalObj;
};

export { errorFormat, excelFormat, excelFormatPrestasi, excelNewFormat };
