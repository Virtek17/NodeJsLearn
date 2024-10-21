// подключаем модули для работы с файловой системой 

const fs = require("fs");
const path = require('path');

// проверяем существование папки
function f01() {
  const pathToDir = './test'
  if (fs.existsSync(pathToDir)) { //fs.existsSync -> проверяет наличие файла по указанному адресу  
    console.log("Yes")
  }
  else {
    console.log("No")
  }
}

// f01()

// проверяем существование файла 
function f02() {
  const pathToFile = './test/anacondaz.doc'
  if (fs.existsSync(pathToFile)) {
    console.log("Yes")
  }
  else {
    console.log("No")
  }
}

// f02()

// Вычисление размера файла
function f03() {
  const pathToFile = './test/sound.mp3'
  const fileInfo = fs.statSync(pathToFile); // fs.statSync -> отдает статистическую инофрмацию о файле 
  console.log(fileInfo.size)
}

// f03()

// Имя и расширение файла 
function f04() {
  const pathToFile = './test/anacondaz.doc'
  console.log(path.basename(pathToFile)) // извлекает имя файла без пути
  console.log(path.dirname(pathToFile)) // извлекает дирректори файла
  console.log(path.extname(pathToFile)) // извлекает расширение файла 
  console.log(path.parse(pathToFile)) // отдает объект с информацией о файле (дир, имя, расширение ...)
}

// f04()

// Получаем файлы и папки в директории 
function f05() {
  const pathToDir = './test'
  const allFiles = fs.readdirSync(pathToDir) //fs.readdirSync -> позволяет получить информацию о содержимом по указанному адресу (какие фалы находятся) массив
  console.log(allFiles)
  let out = ''
  allFiles.forEach(item => {
    out += path.basename(item) + '\n'
  });
  console.log(out)
}

f05()

// Получить абсолютный путь

// const directoryPath = path.join(__dirname, 'test'); // __dirname позволяет увидеть полный путь к файлу 
// console.log(directoryPath);
// console.log(__dirname); 