Hostel Management System:

commands:
    > npx create-react-app hostel-management-system-app
    > cd hostel-management-system-app
    > npm run start

    > npm install -g --unsafe-perm node-red
    > node-red
    
installation of node js libraries:
    > npm i react-router-dom@latest
    > npm i axios@latest
Deployment:
    > npm install gh-pages --save-dev
    package.json:
        "homepage": "https://<your-github-username>.github.io/<repo-name>"
        "scripts": {
            "predeploy": "npm run build",
             "deploy": "gh-pages -d build"
        }

    > git remote add origin https://github.com/Sai-Kumar-Gundeboina/HostelManagementSystem.git
    > npm run deploy

Nodered and MYSQL:

    > Cd downloads
    > ssh -i nodered-vm_key.pem azureuser@20.193.131.13
Installation :
    > sudo apt update
    > sudo apt install -y build-essential git curl

    > curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    > sudo apt install -y nodejs

    > sudo npm install -g --unsafe-perm node-red

SSL certificate creation for converting nodered http to https:
    > openssl req -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365

    Move  key.pem cert.pem certificate to nodered folder
    > mv key.pem cert.pem ~/.node-red

Write HTTPS setting data to settings.js file:
    > nano ~/.node-red/settings.js

    in module.exports = { section add the following
    """
        https: {
            key: require("fs").readFileSync(require("path").join(__dirname, "key.pem")),
            cert: require("fs").readFileSync(require("path").join(__dirname, "cert.pem"))
        },
    """
