var fs = require("fs");

let updateFile = (filePath, textToAppend) => {
  let fileContent = (filePath) => {
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      console.log("The content of the file is ", data.toString());
      return data.toString();
    });
  };
  console.log("The returned data is ", fileContent);
  fs.writeFile(filePath, fileContent(filePath) + " " + textToAppend, (err) => {
    if (err) throw err;
  });
};

console.log(
  updateFile("C:UsersVignesh_Ambalam_SureDesktopHello.txt", "2.task")
);
