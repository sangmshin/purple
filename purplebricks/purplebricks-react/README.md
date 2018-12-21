## Purplebricks assessment:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


** In the beginning of the project, there was a CORS error with browser like Firefox and Chrome while accessing purplebricks' api from front-end. So I created a node/express server to bypass CORS policy and was able to access purplebricks api with no issues.


## >> How to run this app locally in development mode

1. cd to 'purple/purplebricks' folder and run

### `npm start`

- this will run the node/express server at PORT 8000

2. cd to 'purple/purplebricks/purplebricks-react' folder and run

### `npm start`

- this will run/open react app in the browser at PORT 3000.
Otherwise, go to [http://localhost:3000](http://localhost:3000) to view it in the browser.

## >> How to run this app in production mode (deploy ready)

1. cd to 'purple/purplebricks/purplebricks-react' folder and run

### `npm run build`

- this will build/bundle react app to './build' folder

2. cd to 'purple/purplebricks' folder and run

### `npm start`

- this will run node/express server and read './purplebricks-react/build/index.html' file at PORT 8000.
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


## >> Deploy/Live

You view this app here:
http://purplebricks.us-east-1.elasticbeanstalk.com/

It is deployed to AWS Elastic Beanstalk as a node.js wep-app


## >> Decisions and more time.

1. I could have done carousel images or gallery for the listings
2. Now, you need to click one of listings from search results to view individual list. But when you go directly to individual listing url such as '/listing/03oyy8', most of the contents are missing, because react/redux doesn't make an api call to get json object. If I had more time, I would like to make it so that even when you go directly individual listing you redux can get data from api.

## >> Notable Packages & Libraries that I use

- lodash
- axios
- react-bootstrap
- react-spinner
- redux
- express