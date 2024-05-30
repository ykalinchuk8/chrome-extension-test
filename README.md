# Backend part - lets first begin from this part
## Notice: node version used here: v19.9.0, so you should have this version installed, you could use 'nvm' program in order to switch between versions and install new ones

### lets first install sqlite3
#### for ubuntu
~~~
sudo apt update
sudo apt install sqlite3
~~~
#### for mac
~~~
brew install sqlite3
~~~
#### or you can just download it from the site and install as a regular app - same is for Windows

### Next steps
~~~
cd ./server

// install all dependencies
npm i

// copy .env.example .env
cp .env.example .env

// Execute migration in order to create users table:
// Navigate to ./src/db/migrations/0000_mighty_rogue.sql file
// Copy content from there

// Now navigate back to root of the server folder
// Log into sqlite CLI inside the root of the server folder:
sqlite3 test.db

// Paste the content you copied from the migration file, and press Enter

// Now seed the database
npm run db:seed

// start dev server
npm run dev
~~~

# Frontend part
~~~
cd ./client
// install all dependencies
npm i
// copy .env.example .env
cp .env.example .env
// make a build
npm run build
// all the compiled files will be located inside ./dist folder
~~~

### Now you need to install extension in Chrome
1. Navitgate to chrome://extensions
2. Make sure developer mode is enabled (right top corner)
3. Click on the "Load unpacked", choose path to dist directory
4. That's it



