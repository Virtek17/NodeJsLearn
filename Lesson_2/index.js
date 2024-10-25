// подключаем модули для работы с файловой системой 

const fs = require('fs');
const path = require('path');
const { emitKeypressEvents } = require('readline');

// Проверяем существование папки
function f01() {
  const pathToDir = './test1';
  if (fs.existsSync(pathToDir)) {// fs.existsSync -> проверяет наличие файла по указанному адресу
    console.log("Yes");
  } 
  else {
    console.log("No")
  }
}

// f01();

// Проверяем существование файла 
function f02() {
  const pathToFile = './test/anacondaz.doc';
  if (fs.existsSync(pathToFile)) {// fs.existsSync -> проверяет наличие файла по указанному адресу
    console.log("Yes");
  } 
  else {
    console.log("No")
  }
}

// f02();

// Вычисление размера файла 
function f03() {
  
}