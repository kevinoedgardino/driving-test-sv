// This was used to iterate the array of former questions file
// to add a random UUID to each option of the questions
// and then write the output data to a new json file

import { randomUUID } from 'node:crypto'
import { writeFile } from 'node:fs/promises'
import questions from './former-file.js'

const QUESTIONS_PATH = process.cwd()

const data = []

questions.forEach(elm => {
  for (const item in elm.options) {
    elm.options[item] = { text: elm.options[item], option_uuid: randomUUID().split('-')[0] }
  }

  data.push(elm)
})

await writeFile(`${QUESTIONS_PATH}/new-file.json`, JSON.stringify(data, null, 2), 'utf-8')
