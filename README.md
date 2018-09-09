# Express Static
This tool provide a webserver base on express.js to display static content

## Command line
```sh
node index.js --public STATIC_FILES_DIRECTORY --port LISTEN_PORT [ --verbose ]
```

### Example
The following command line expose the public directory to a webserver bind on 9000 port
```sh
node index.js --public public --port 9000
```
You can access to the server by the address : http://localhost:9000