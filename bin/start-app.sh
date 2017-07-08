# deploy/start-app
cd /home/ubuntu/blog
forever stopall
forever start app.js
