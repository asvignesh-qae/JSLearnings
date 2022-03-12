let fs = require("fs");

function readContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      else resolve(data.toString());
    });
  });
}

function writeContent(filePath, contentToWrite) {
  //how to use Resolve over here?
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, contentToWrite, (err) => {
      err ? reject(err) : resolve();
    });
  });
}

function fn1() {}
const fn2 = function () {};
const fn3 = () => {};

let read_Write = (absolutePath, strToUpdate) => {
  //how to handle the error properly using .catch
  return readContent(absolutePath)
    .then((data) => {
      console.log("inetmediate log");
      return data;
    })
    .then((readData) => writeContent(absolutePath, readData + strToUpdate))
    .then(() => {
      console.log("after file write");
      throw new Error("err");
      return "TEST";
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

read_Write(
  "C:\\Users\\Vignesh_Ambalam_Sure\\Desktop\\JS Tasks\\Hello.txt",
  " \\n 2.task"
)
  .then((resuklt) => {
    console.log("result>", resuklt);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("FIRST LINE");
