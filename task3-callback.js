var fs = require("fs");

function wr(content) {
  console.log(`write successfull ${content} written to the file`);
}

let readAndWrite = (filepath, contentTowrite, callback) => {
  fs.readFile(filepath, (err, data) => {
    if (err) throw err;
    data = data + contentTowrite;
    fs.writeFile(filepath, data, (err) => {
      if (err) throw err;
      callback(data);
    });
  });
};

console.log(
  readAndWrite(
    //primitives - string passed as value
    "C:\\Users\\Vignesh_Ambalam_Sure\\Desktop\\JS Tasks\\Hello.txt",
    " \\n 2.task",
    //function are passed as reference
    wr
  )
);
