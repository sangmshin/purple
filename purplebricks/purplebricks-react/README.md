## Purplebricks assessment:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


**In the beginning of the project, there was a CORS issue with browser like Firefox and Chrome while accessing purplebricks' api. So I created a node/express server to bypass CORS and access purplebricks api with no issues. However, I found the way to bypass CORS and access api in a browser in stackoverflow.com. Please do this before run my app.

WINDOW:
1. Open the start menu
2. Type windows+R or open "Run"
3. Execute the following command:
### chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

MAC:
1. Go to Terminal
2. Execute the following command:
### open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/Chrome dev session" --disable-web-security


(https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome)


**so my app get the full results through node/express server but when opening an individual listing, my app accesses the api directly through redux (front end).



## How to run this app locally in development mode

1. cd to 'purple/purplebricks' folder and run

### `npm start`

- this will run the node/express server at PORT 8000

2. cd to 'purple/purplebricks/purplebricks-react' folder and run

### `npm start`

- this will run/open react app in the browser at PORT 3000
Otherwise, go to [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to run this app in production mode (deploy ready)

1. cd to 'purple/purplebricks/purplebricks-react' folder and run

### `npm run build`

- this will build/bundle react app to './build' folder

2. cd to 'purple/purplebricks' folder and run

### `npm start`

- this will run node/express server and read './purplebricks-react/build/index.html' file at PORT 8000
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


** make sure you open these in the browser I mentioned above. Thank you!

## Decisions and more time.

1. If I had more time, I would have fully incorporated node/express to react app so that I can bypass CORS issues. 
2. I could have done carousel images or gallery for the listings
3. There is glitch when you go back to search results and click to go to individual listing. You will see in a split second previous content. I would like to fix this if I have more time.
