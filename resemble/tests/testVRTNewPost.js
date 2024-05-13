const compareImages = require("resemblejs/compareImages");
const initialSettings = require("../config/initialSettings");
const path = require("path");
const config = require("../config/config.json");
const { options } = config;
const fs = require("fs").promises;

async function testVRTNewPost() {
  console.log("REALIZANDO PRUEBA VRT DE CREAR UN POST");
  const escenario = "newPost";

  const screenshots = [
    "01_pageLogin.png",
    "02_userName.png",
    "03_password.png",
    "04_loginSuccess.png",
    "05_newPostInterface.png",
    "06_fillNewPostForm.png",
    "07_publishPost.png",
    "08_confirmPublish.png",
    "09_returnToPosts.png",
    "10_openPosts.png",
    "11_newpostSuccess.png",
    "12_dropdownMenu.png",
    "13_logOut.png",
  ];

  const {
    compareDir,
    ghost3Dir,
    ghost5Dir,
    reportsDir,
    createReport,
    createCss,
  } = await initialSettings(escenario, screenshots);

  let resultInfo = {};

  try {
    for (const imagePath of screenshots) {
      console.log(`Comparing: ${imagePath}`);

      const ghost3Image = path.join(ghost3Dir, imagePath);
      const ghost4Image = path.join(ghost5Dir, imagePath);
      const compare_iamge = path.join(compareDir, "compare_" + imagePath);

      const data = await compareImages(
        await fs.readFile(ghost3Image),
        await fs.readFile(ghost4Image),
        options
      );

      resultInfo[imagePath] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
      };
      await fs.writeFile(compare_iamge, data.getBuffer());
    }

    const reportHtmlPath = path.join(reportsDir, "report.html");
    await fs.writeFile(reportHtmlPath, createReport(escenario, resultInfo));

    const reportCssPath = path.join(reportsDir, "index.css");
    await fs.writeFile(reportCssPath, createCss());

    const resultInfoPath = path.join(reportsDir, "resultInfo.json");
    await fs.writeFile(resultInfoPath, JSON.stringify(resultInfo));
  } catch (error) {
    console.log(error);
  }
}
module.exports = testVRTNewPost;
