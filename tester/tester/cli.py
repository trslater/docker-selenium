import sys
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.common.keys import Keys

INIT_WAIT = 10
RETRY_WAIT = 2
MAX_TRIES = 10


def run():
    driver = remote_connection()
    
    print(test(driver), flush=True)
    
    driver.close()


def remote_connection():
    print(f"Waiting {INIT_WAIT} seconds for Selenium to start up...", flush=True)
    time.sleep(INIT_WAIT)
    for i in range(1, MAX_TRIES + 1):
        print(f"Trying to connect ({i} of {MAX_TRIES})...", flush=True)
        try:
            driver = webdriver.Remote(
                command_executor="http://sele-selenium-hub:4444/wd/hub",
                desired_capabilities=DesiredCapabilities.CHROME)
        
        except Exception:
            print(f"Failed. Retrying in {RETRY_WAIT} seconds...", flush=True)
            time.sleep(RETRY_WAIT)
        
        else:
            print("Connected.", flush=True)
            return driver
    
    else:
        sys.exit(1)


def test(driver):
    driver.get("http://www.python.org")
    
    return driver.title
