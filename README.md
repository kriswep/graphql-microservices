# GRAPHQL-MICROSERVICES

This project showcases, how one could set up a graphql server using microservice
architectur.

**Work In Progress**

## Start in docker env - manually

setup a new docker network initially.

```bash
sudo docker network create --driver bridge my-service
```

**service-post**

Build and run service-post container.

```bash
cd ./service-post
sudo docker build -t my-service/service-post .
sudo docker run -d \
--network=my-service \
--name service-post \
my-service/service-post
```

**service-user**

Build and run service-user container.

```bash
cd ./service-user
sudo docker build -t my-service/service-user .
sudo docker run -d \
--network=my-service \
--name service-user \
my-service/service-user
```

**service-gateway**

Build and run service-gateway container.

```bash
cd ./service-gateway
sudo docker build -t my-service/service-gateway .
sudo docker run -d \
--network=my-service \
-p 3000:3000 \
--name service-gateway \
-e POST_URL='http://service-post:3010/graphql' \
-e USER_URL='http://service-user:3020/graphql' \
my-service/service-gateway
```
