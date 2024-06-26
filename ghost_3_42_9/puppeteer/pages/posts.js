class PostPage {
  constructor(page, path, logStep, screenshotsDir, screenshots) {
    this.page = page;
    this.path = path;
    this.logStep = logStep;
    this.screenshotsDir = screenshotsDir;
    this.screenshots = screenshots;
  }

  async openPosts(text, image) {
    await this.page.waitForSelector('a[href="#/posts/"]');
    await this.page.click('a[href="#/posts/"]');
    await this.page.waitForSelector('a[title="Edit this post"]');
    await this.logStep(
      this.screenshots[text],
      this.path.join(this.screenshotsDir, this.screenshots[image])
    );
  }

  async openNewPost() {
    await this.page.waitForSelector('a[href="#/editor/post/"]');
    await this.page.click('a[href="#/editor/post/"]');
    await this.logStep(
      this.screenshots.text5,
      this.path.join(this.screenshotsDir, this.screenshots.image5)
    );
  }

  async fillPostForm(title) {
    await this.page.type("textarea.gh-editor-title", title, {
      delay: 200,
    });

    await this.logStep(
      this.screenshots.text6,
      this.path.join(this.screenshotsDir, this.screenshots.image6)
    );
    await this.page.keyboard.press("Enter");

    await new Promise((r) => setTimeout(r, 2000));
  }

  async assignTags(text, image) {
    await new Promise((r) => setTimeout(r, 1000));

    await this.page.click("button.post-settings");

    await this.page.type(
      ".ember-power-select-trigger-multiple-input",
      "tag-test-2"
    );
    await new Promise((r) => setTimeout(r, 1000));

    await this.page.keyboard.press("Enter");

    await this.logStep(
      this.screenshots[text],
      this.path.join(this.screenshotsDir, this.screenshots[image])
    );
    await new Promise((r) => setTimeout(r, 1000));

    await this.page.click("button.close.settings-menu-header-action");
  }

  async publishPost(text, image) {
    await new Promise((r) => setTimeout(r, 1000));

    await this.page.waitForSelector("div.gh-publishmenu-trigger");

    await this.page.click("div.gh-publishmenu-trigger");
    await this.logStep(
      this.screenshots[text],
      this.path.join(this.screenshotsDir, this.screenshots[image])
    );
  }

  async confirmPublish(text, image) {
    await new Promise((r) => setTimeout(r, 2000));
    await this.page.waitForSelector("button.gh-btn-blue");
    await this.page.click("button.gh-btn-blue");

    await this.logStep(
      this.screenshots[text],
      this.path.join(this.screenshotsDir, this.screenshots[image])
    );
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.click("button.gh-notification-close");
  }

  async returnToPosts(text, image) {
    await this.page.goBack();
    await this.page.waitForSelector('a[href="#/posts/"]');

    await this.logStep(
      this.screenshots[text],
      this.path.join(this.screenshotsDir, this.screenshots[image])
    );
  }
}

module.exports = PostPage;
