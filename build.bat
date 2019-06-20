cmd /c docker-compose down -v
cd server 
mvn clean package
cd ../client
cmd /c npm run build
cd ../
cmd /c docker-compose up --build