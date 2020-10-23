# _src folder
This folder utlizes `gulp` to process content in the /js and /svg folders into a merged `js.js` javascript file that is placed into the `/client/js` directory.

## Process
* Run a separate `npm install` in this directory
* Open a new powershell instance (separate from the one running `node server/server.js`)
* cd to this directory
* run `gulp watch`
* This opens a `localhost:3000` instance of the `localhost:2090` server in your browser, and watches for changes within the `_src/**` files, as well as those within the `/client` directory.
* When it detects changes, the `localhost:3000` instance will reload the browser for you with the new changes in place

## Structure
* Every page is powered from index.html, and uses javascript to handle page-to-page functionality.
* The `onload.js` file initializes everything, and defines the Vue instance. 

#### Page structure
* Each page is defined via a route, which are defined via the `/js/routes` folder.
  * The `_routes.js` file defines the various page paths, and which route they'll use.
  * The other js files within the `/js/routes` folder correspond to each page.
  * They each have their own html structure (configured via the `template` section), and often their own data and functions
  * Virtually every route is passed data via the `props` values. 

#### Components
* The `/js/components` directory contains reuseable components.
  * The file names represent the element you would type to call them.
  * Ex: `svg-icon.js` defines a component that would be called via `<svg-icon></svg-icon>`.
  * The `props` attribute associated with each represents the data that can be passed to the component.
  * Ex: `svg-icon.js` lists prop values for `svg` and `ar`. To pass that to the component, you would do so like this: `<svg-icon svg="logo" ar="none">`.

#### Static data
* The `/js/data` directory houses static data that I am using throughout. Currently just the svg data.
