#!/usr/bin/env bash
npm run build
cd dist/inventory/
zip -r release.zip *
sshpass -p "resto#test" ssh iikoweb@10.10.5.109 "rm -rf /var/www/html/www/web/inventory && mkdir /var/www/html/www/web/inventory"
sshpass -p "resto#test" scp -r release.zip iikoweb@10.10.5.109:/var/www/html/www/web/inventory
sshpass -p "resto#test" ssh iikoweb@10.10.5.109 "unzip /var/www/html/www/web/inventory/release -d /var/www/html/www/web/inventory"
