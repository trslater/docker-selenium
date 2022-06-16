const { Builder, Browser, By } = require("selenium-webdriver")

;(async function () {
    const driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .usingServer("http://sele-selenium-hub:4444/wd/hub")
        .build()
    
    try {
        await driver.get("http://sele-app:1234")
        console.log(await driver.findElement(By.id("find-me")).getText())
    } finally {
        await driver.quit()
    }
}())
