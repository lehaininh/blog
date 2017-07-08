# deploy/start-app
source /home/ubuntu/.bashrc
cd /home/ubuntu/blog

sudo forever stopall
sudo forever app.js
