let path = require("path");

let PROJECT_ROOT = path.resolve(__dirname, "..");

module.exports = {
  projectRoot: PROJECT_ROOT,
  outPutPath: path.join(PROJECT_ROOT, "build"),
  appEntry: path.join(PROJECT_ROOT, "src"),
  stylesEntry: path.join(PROJECT_ROOT, "src/styles"),
  //   favIcon: path.join(PROJECT_ROOT, 'public/favicon.ico'),
  publicDir: path.join(PROJECT_ROOT, "public"),
  fontsOutPut: "fonts",
  imagesOutPut: "imgs",
};
