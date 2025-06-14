Hostel Management System:
React-App
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

Node-red and MYSQL:

    Open command prompt 
    > Cd downloads (change to path where key resides)
    > ssh -i nodered-vm_key.pem azureuser@20.193.131.13
    It will connect to vm 

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

In Microsoft Azure:
    Auto run MYSQL:
        > sudo systemctl is-enabled mysql
     if not enabled then  > sudo systemctl enable mysql

    Node-Red:
        > sudo systemctl start nodered.service
    for checking status     > sudo systemctl status nodered.service
    enable to start on boot > sudo systemctl enable nodered.service

MYSQL: 
    > "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u nodered -p -h 20.193.131.13
    > password: StrongPassword123!
    -> Nodred url: https://20.193.131.13:1880/
    -> Database: HMS
    -> backup: mysqldump -u root -p my_database > my_database_backup.sql
    -> restore: mysqldump -u root -p --all-databases > my_databases_backup.sql
    -> Tables: 
        -> Tenants:
            ->  id, name, mobile, password, emailid, roomType, permanentAdr, status, allocatedRoom, registered_at
            > CREATE TABLE Tenants (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                mobile VARCHAR(15) NOT NULL,
                emailid VARCHAR(100) NOT NULL UNIQUE,
                roomType ENUM('single', 'double','triple') NOT NULL DEFAULT 'single',
                permanentAdr VARCHAR(100) NOT NULL,
                status ENUM('approved','rejected','pending') NOT NULL DEFAULT 'pending',
                allocatedRoom VARCHAR(5),
                registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        -> insert into users(username, password, mobilenumber, role, email) values ("sai", "12345", "9876543210","admin","sai@gmail.com");
        -> Admin:
            -> username, password
            -> CREATE Table Admin (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL,
                password VARCHAR(255) NOT NULL
            );
