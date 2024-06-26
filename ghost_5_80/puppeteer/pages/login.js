class LoginPage {
  constructor(page, path, logStep, screenshotsDir, screenshots) {
    this.page = page;
    this.path = path;
    this.logStep = logStep;
    this.screenshotsDir = screenshotsDir;
    this.screenshots = screenshots;
  }

  async open(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.page.waitForSelector('button[type="submit"]');

    await this.logStep(
      this.screenshots.text1,
      this.path.join(this.screenshotsDir, this.screenshots.image1)
    );

    await this.page.type('input[name="identification"]', username, {
      delay: 100,
    });

    await this.logStep(
      this.screenshots.text2,
      this.path.join(this.screenshotsDir, this.screenshots.image2)
    );

    await this.page.type('input[name="password"]', password, { delay: 100 });

    await this.logStep(
      this.screenshots.text3,
      this.path.join(this.screenshotsDir, this.screenshots.image3)
    );

    await this.page.click('button[type="submit"]');

    await this.page.waitForSelector('a[href="#/site/"]');

    await this.logStep(
      this.screenshots.text4,
      this.path.join(this.screenshotsDir, this.screenshots.image4)
    );
  }
}

module.exports = LoginPage;
