# AngularTestSite
My first Angular site.

NOTE: The month's number (e.g. January = 1) is not stored in the post.json file (or other files for that matter.)
This should be added eventually when there are weeks to trade within 2 months.
For now, the month is hard-coded.

----------------------------------------------------------------------------------------------------

To generate a new Angular application, execute the following command:

ng new application-name (like hello-world)

It will ask if you would like Angular routing and what type of stylesheet format you would like to use (e.g. CSS, SCSS, Less, etc.).

Some notes about the files/folders generated:

(a) The "e2e" folder is used for the start of an end-to-end test for the application.
(b) The "node_modules" folder contains all of the installed libraries from the package.json file.
(c) The "src" folder contains all of the source code for the application.

NOTE: The following folders and within the "src" folder.

(c1) The "app" folder contains all of the modules, components, services and other files for the application.
(c2) The "assets" folder contains any images/assets that will be used in the application.
(c3) The "environments" folder sets up a build environment. It generates 2 files by default; one for development and one for production. The appropriate file is chosen based on the flags used.

(d) The "favicon.ico" file is the icon shown at the tab for the website in the browser.
(e) The "index.html" file is the first file downloaded when a user uses the application. Most times, this file will never be modified.
(f) The "karma.conf.js" file set up Karma, which is a Javascript test runner. It used for unit tests.
(g) The "main.ts" file bootstraps the application. Most times, this file will never be modified.
(h) The "polyfills.ts" file helps in supporting both evergreen and classic browsers. If older browsers need to be supported, it shows what additional libraries need to be imported.
(i) The "styles.css" file is used to define application-wide styles.
(j) The "test.ts" file sets up for testing.

The files preceded with ts (tsconfig.app.json, tsconfig.json, tsconfig.spec.json, tslint.json) are for TypeScript configuration.

(k) The "tsconfig.app.json" file is used for compiling the code files.
(l) The "tsconfig.spec.json" file is used for compiling test specifications.
(m) The "tsconfig.json" file is extended in the 2 previous files.
(n) The "tslint.json" file is a TSLint configuration file. TSLint is a TypeScript linter, which checks the application's code against a set of code style rules and gives a notification when a rule is not followed. They can be changed based on a team's code style preference.
(o) If it exists, the ".editorconfig" file defines standard setting for an editor (like VS Code).
(p) The ".gitignore" file defines which files to ignore for checking into Git. The "node_modules" folder is typically in this list.
(q) The "package.json" file defines all the libraries that should be installed for this application to work.
(r) The "angular.json" file is the Angular CLI configuration file. It is used to configure how the CLI generates code and works with certain files. Things like assets and css files can be defined here.

----------------------------------------------------------------------------------------------------

To run an Angular application, run the following command:

ng serve -o (opens in default browser) --port (allows you to choose a different port)

It will launch the application and listen on "localhost:4200". It will refresh the browser when any code is changed and saved.

For this application, the command "npm start" accomplishes the same thing, as defined in the "package.json" file.

----------------------------------------------------------------------------------------------------

To generate an Angular component, execute the following command:

ng generate (or g) component (or c) component-path/name-of-component (like products/product-detail) --flat (if you don't want a folder created. In this case, a "products" folder would not be created.) -m app (If you want to import it into the AppModule or another module like products/product.module)

This component will come with 4 files:

(a) (name-of-component).component.html
(b) (name-of-component).component.spec.ts
(c) (name-of-component).component.ts
(d) (name-of-component).component.css


----------------------------------------------------------------------------------------------------


To generate an Angular guard file, execute the following command:

ng generate (or g) guard (or g) guard-path/name-of-guard (like products/product-detail)

It will then prompt for the type of guard(s) you would like to generate. 
You can press the space bar to choose from the following and then press ENTER to finish:

() CanActivate
() CanActivateChild
() CanLoad

----------------------------------------------------------------------------------------------------

To run unit tests, execute the following command:

ng test

This will build the application, launch the browser and execute the Karma test runner.

----------------------------------------------------------------------------------------------------

To run e2e tests, execute the following command:

ng e2e

This will build the application, launch the browser and close the browser.
It will then display the result of the test in the CLI.

----------------------------------------------------------------------------------------------------

To generate files that can be used in deployment (and have them put into a "dist" folder), execute the following command:

ng build --prod (Will minify the code to make it as small as possible) --base-href (can be used to set the base url for the deployed application)

