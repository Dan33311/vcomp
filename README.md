# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Installation
***
If you want clone this project. 
```
$ git clone https://github.com/Dan33311/vcomp.git
$ cd ../path/to/the/file
$ npm install
$ npm run dev
```

## My steps

* Create a camera component
* Use a webcam package
  - View your camera in you app
  - Capture Button: Take a screenshot, it is saved in a state (Data URL string)
* Use Firebase and Firestore
  - Config Firebase conection
  - Firestore allow us to store the image
  - (Data URL string) storege config 
* use dotenv to store keys and values to the Firebase configuration
* Add UUID in order to set a different name to each screenshot
* Create a Select which apply filters to the image
TODO: When download the image: The image are storage, but the applied filter is not applied.
TODO: a carrousel, it show us a preview miniature of the image with the filter applied https://www.cssfilters.co/
TODO: capture photo or upload photo