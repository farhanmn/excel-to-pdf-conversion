import { readFileSync } from 'fs'
import mustache from 'mustache'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getTemplate = (name, data) => {
  const template = readFileSync(
    `${__dirname}/../templates/${name}.html`
  ).toString()
  const html = mustache.render(template, data || {})

  return {
    template,
    html,
  }
}

const getBase64Signature = (signature) => {
  let signJSON = readFileSync(
    `${__dirname}/../templates/signature.json`
  ).toString()

  signJSON = JSON.parse(signJSON)
  return signJSON[signature] || ''
}

export { getTemplate, getBase64Signature }
