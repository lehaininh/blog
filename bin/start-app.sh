# deploy/start-app
cd /home/ubuntu/blog
pm2 stop all
pm2 start app.js
