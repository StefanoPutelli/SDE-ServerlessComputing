sudo systemctl start docker.service
sudo docker-compose up $1 --build --force-recreate --remove-orphans