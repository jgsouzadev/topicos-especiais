### How to run postgres database in docker

docker run --name postgres -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=fatec -p 5432:5432 -d postgres