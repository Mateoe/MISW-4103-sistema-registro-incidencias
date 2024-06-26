const testDeleteMember = require("./tests/deleteMember");
const testDeleteTag = require("./tests/deleteTag");
const testEditTag = require("./tests/editTag");
const testNewMember = require("./tests/newMember");
const testNewTag = require("./tests/newTag");
const testNewTier = require("./tests/newTier");
const testNewPost = require("./tests/newPost");
const testNewPremiumPost = require("./tests/newPremiumPost");
const testNewPostWithTag = require("./tests/newPostWithTag");
const testNewOffer = require("./tests/newOffer");
const testEditProfileName = require("./tests/editProfileName");
const testEditProfileLocation = require("./tests/editProfileLocation");
const testNewPage = require("./tests/newPage");
const testDeletePage = require("./tests/deletePage");

(async () => {
  await testNewPage()
  await testDeletePage()
  await testNewTag();
  await testEditTag();
  await testDeleteTag();
  await testEditProfileName();
  await testNewPost();
/*   
  await testEditProfileLocation();
  await testNewPostWithTag();
  await testNewMember();
  await testDeleteMember();
  await testNewTier();
  await testNewPremiumPost();
  await testNewOffer(); */
})();
