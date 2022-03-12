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
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, contentToWrite, (err) => {
      err ? reject(err) : resolve();
    });
  });
}

let read_Write = async (absolutePath, strToUpdate) => {
  // let strValue_Read = await readContent(absolutePath);
  const content = await readContent(absolutePath);
  await writeContent(absolutePath, content + strToUpdate);
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
