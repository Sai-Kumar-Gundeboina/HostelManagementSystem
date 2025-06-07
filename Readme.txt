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
