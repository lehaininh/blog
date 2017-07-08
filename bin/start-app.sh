# deploy/start-app
cd /home/ubuntu/blog
forever stopall
forever app.js
