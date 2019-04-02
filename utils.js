const fs = require("fs");

const helperMethods = {
  changeInfo: (obj, arg) => {
    try {
      obj["name"] = arg.name;
      obj["age"] = arg.age;
      return obj;
    } catch (e) {
      return false;
    }
  },

  writeFile: (file, data) => {
    try {
      const dataToStr = JSON.stringify(data);
      fs.writeFileSync(file, dataToStr);
      return true;
    } catch (e) {
      return false;
    }
  }
};

module.exports = helperMethods;
