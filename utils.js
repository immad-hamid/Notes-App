const fs = require("fs");

const helperMethods = {
  changeInfo: (obj, arg) => {
    obj["name"] = arg.name;
    obj["age"] = arg.age;
    return obj;
  },

  writeFile: (file, data) => {
    const dataToStr = JSON.stringify(data);
    fs.writeFileSync(file, dataToStr);
    return true;
  }
};

module.exports = helperMethods;
