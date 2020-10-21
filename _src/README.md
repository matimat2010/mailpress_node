# _src folder
This folder utlizes `gulp` to process content in the /js and /svg folders into a merged `js.js` javascript file that is placed into the `/client/js` directory.

### Process
* Run a separate `npm install` in this directory
* Open a new powershell instance (separate from the one running `node server/server.js`)
* cd to this directory
* run `gulp watch`
* opens a `localhost:3000` instance of the `localhost:2090` instance, and watches for changes within the `_src/**` files.
* Edit those files, and the page `localhost:3000` instance will livereload with the changes