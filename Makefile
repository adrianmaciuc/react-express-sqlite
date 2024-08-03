start-client-dev:
	export DEV="dev" 
	cd client && npm run dev

build-client:
	cd client && npm run build

start-server:
	cd server && node populateDBscript.js && node server.js

clean:
	rm -rf client/dist
	rm -rf server/database.db
