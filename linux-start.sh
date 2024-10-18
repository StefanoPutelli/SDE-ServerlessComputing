sudo systemctl start docker.service
sudo docker-compose up --build --force-recreate --remove-orphans $1
