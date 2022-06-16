const { Builder, Browser, By } = require("selenium-webdriver")

const numTries = 15
const tryDelay = 1000 // ms

;(async function () {
    const driver = await connect()
    test(driver)
}())

async function connect() {
    // Selenium server might not be ready, so keep trying
    console.log("Trying to connect:")
    for (let i = 1; i <= numTries; ++i) {
        console.log(`Attempt ${i} of ${numTries}...`)
        try {
            const driver = await new Builder()
                .forBrowser(Browser.CHROME)
                .usingServer("http://sele-selenium-hub:4444/wd/hub")
                .build()

            console.log("Connected!")
            return driver
        } catch (Error) {
            console.log("Failed! Trying again in 1 s...")
            await new Promise(resolve => setTimeout(resolve, tryDelay))
        }
    }

    throw new Error(`Unable to connect after ${numTries} tries.`)
}

async function test(driver) {
    try {
        await driver.get("http://sele-app:1234")
        console.log(await driver.findElement(By.id("find-me")).getText())
    } finally {
        await driver.quit()
    }
}
