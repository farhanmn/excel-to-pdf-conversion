import { readFileSync } from 'fs';
import mustache from 'mustache';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getTemplate = (name, data) => {
  const template = readFileSync(
    `${__dirname}/../templates/${name}.html`
  ).toString();

  const enhancedData = {
    ...data,
    newlineToBr: function () {
      return function (text, render) {
        return render(text).replace(/\n/g, '<br>');
      };
    }
  };

  const html = mustache.render(template, enhancedData || {});

  return {
    template,
    html
  };
};

const getBase64Signature = (signature) => {
  let signJSON = readFileSync(
    `${__dirname}/../templates/signature.json`
  ).toString();

  signJSON = JSON.parse(signJSON);
  return signJSON[signature] || '';
};

const setFolderPlace = (row) => {
  let university = row['Universitas'];
  let ro = row['RO'];

  const outputDir = `generated-pdfs/${ro.toUpperCase()}/${university.toUpperCase()}`;
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  return outputDir;
};

export { getTemplate, getBase64Signature, setFolderPlace };
