sudo systemctl start docker.service
sudo docker-compose up -d --build --force-recreate --remove-orphans
while ! sudo docker-compose ps | grep -q 'sde.*Up'; do
    echo "Attendo l'avvio del servizio sde..."
    sleep 2
done
sudo docker-compose exec sde bash

