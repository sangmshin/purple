# Purplebricks hotel search app:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


** In the beginning of the project, there was a CORS error with browser like Firefox and Chrome while accessing purplebricks' api from front-end. So I created a node/express server to bypass CORS policy and was able to access purplebricks api with no issues.


## >> How to run this app locally in development mode

(The app has already been built/bundled to './build' folder so all you actually need to do is step 1 and open [http://localhost:8000](http://localhost:8000))

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

This app can be viewed here: (I took it down from EB so the link will not work. sorry)
http://purplebricks.us-east-1.elasticbeanstalk.com/

It is deployed to AWS Elastic Beanstalk as a node.js wep-app


## >> Notable Packages & Libraries that I use

- lodash
- axios
- react-bootstrap
- react-spinner
- redux
- express