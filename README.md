# Docker–Selenium Experiment

An experiment in setting up Selenium tests to run entirely in Docker containers.

## Usage

```
docker compose up
```

## How It Works

`app` is a basic static site. This is the app we're testing.

`tester` is the app that runs Selenium tests on `app`.

`selenium-hub` and `selenium-chrome` are set up based on the official Selenium `docker-compose.yml` files, [here](https://github.com/SeleniumHQ/docker-selenium).

`tester` attempts to connect to `selenium-hub` until it is ready. Once a connection is established with Selenium, `tester` connects to `app` and retrieves the contents of `#find-me`.
