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


(async () => {
 /* await testNewTag(); */
  //await testEditTag();
  await testDeleteTag();
   /*
  await testNewMember();
  await testDeleteMember();
  await testNewTier();
  await testNewPost();
  await testNewPremiumPost();
  await testNewPostWithTag();
  await testNewOffer(); */
})();