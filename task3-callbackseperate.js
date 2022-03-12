var fs  = require("fs");

function readContent(filePath){
    fs.readFile(filePath, (err, data)=>{
        if(err) throw err;
        return data.toString();
    })
}

function writeContent(filePath, contentToWrite){
    fs.writeFile(filePath, contentToWrite, (err)=>{
        if(err) throw err;
    })
}

let readNWrite = (filePath, contentToWrite)=>{
    let r = readContent(filePath);
    console.log(`The read data from the file is ${r}`);
    writeContent(filePath, r + contentToWrite);
}

console.log(
    readNWrite(
        'C:\\Users\\Vignesh_Ambalam_Sure\\Desktop\\JS Tasks\\Hello.txt',
        ' \\n 2.task'
    )
);
