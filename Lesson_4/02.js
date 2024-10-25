const fs = require('fs');

// write json file

const obj = {
  "course": "node.js 2024",
  "sprints": 12,
  "tasks": 165,
  "text": ["fs", "file", "dataBase"]
}

fs.writeFileSync('./d04/j_1.json', JSON.stringify(obj), {encoding: 'utf8', flag: 'w'})
//               куда писать    из объекта делает строку  кодировка       режим работы