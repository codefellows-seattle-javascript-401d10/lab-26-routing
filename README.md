![cf](http://i.imgur.com/7v5ASc8.png) lab-26-slugram
====

# To Submit this Assignment
* fork this repository
* write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
* push to your repository
* submit a pull request to this repository
* submit a link to your PR in canvas
* write a question and observation on canvas

# Directions
* inclde an .eslintrc
* inclde an .eslintingore
* inclde a .gitignore
 * ignore the build directory
* include a package.json
 * must have lint script
 * must have test script 
 * must have test-watch script 
 * must have build script 
 * must have build-watch script 
* inclde a webpack.config.js
 * include all the production configurations
* Create these directories to organize your code: 
 * app
 * app/config
 * app/view
  * app/view/\<your-views-dir\>
 * app/scss
 * app/scss/lib
* create a **_theme.scss** partial 
* create a **_vendor.scss** partial
 * build bootstrap from source
* create a **base.scss** file 
 * `@import "theme"`
 * `@import "vendor"`
* create a **entry.js**
 * require your **base.scss**
 * use require.context to add all of your angular construct definitions

## Requirements
* create three views `/#/home`, `/#/signup/`, `/#/gallery`
* each view should have a controller
 * each controller should have a title property
* each view should have a template
 * the template should use an angular expression to set the content of an **h1** tag to its controllers title property
* each view should have a sass file
 * to make your page pretty
