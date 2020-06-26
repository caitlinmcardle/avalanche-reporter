# Avalanche Reporter

This is an application that can be used to get avalanche forecasts for a given area, view recent avalanches that have occured and/or report an avalanche that you have observed. This project is an imitation of Avalanche Canada's Mountain Information Network, which is a hugely important resource in the ski touring community.

## How to clone and run locally

- Clone the repo from [here](https://github.com/caitlinmcardle/avalanche-reporter)
- Copy the url
- In the terminal, run the command `git clone` https://github.com/caitlinmcardle/avalanche-reporter in the directory where you want the project to be stored
- `cd avalanche-reporter` to go to the project directory
- `npm start` to run the project locally

## A link to the deployed version can be found [here](https://cmc-finalproject.netlify.app/)

## List of Available End Points:

- GET /avalanche-reports
- POST /avalanche-reports
- GET /avalanche-reports/:report_id
- GET /areas
- GET /areas/:area_id
- GET /avalanche-forecasts
