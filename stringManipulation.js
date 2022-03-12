let myFunc = (str, char1, char2) => {
  return {
    count: [...str].filter((arrEle) => arrEle === char1).length,
    string: str.replace(/./g, (strChars) =>
      strChars === char1 ? char2 : strChars
    ),
  };
};

console.log(myFunc("asdh37c68asc12378c23c", "c", "Z"));
