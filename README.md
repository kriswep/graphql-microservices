# GRAPHQL-MICROSERVICES

This project showcases, how one could set up a graphql server using a (mildy simplified) microservice
architecture.

[![CircleCI](https://circleci.com/gh/kriswep/graphql-microservices.svg?style=svg)](https://circleci.com/gh/kriswep/graphql-microservices)

_Powered by [Apollo Server 2](https://github.com/apollographql/apollo-server/), using [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/) to expose a single, 'monolithic' API and many more_

## Start in docker - via docker compose

`sudo docker-compose up -d`

Scale single services, eg the post-service, which has an identifier field for demo purposes build in

`sudo docker-compose up -d --scale post=2`

remove:
`sudo docker-compose down`

Open the example API-Playground on http://localhost:3000 and issue GraphQL request.

It is composed of the separated user and post services, stitched together.

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
--net-alias service-post \
my-service/service-post
```

You could start multiple services as well to get easy round robin load
balancing. We added a hash field to our post service to identify the handling
process.

**service-user**

Build and run service-user container.

```bash
cd ./service-user
sudo docker build -t my-service/service-user .
sudo docker run -d \
--network=my-service \
--net-alias service-user \
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
--net-alias service-gateway \
-e POST_URL='http://service-post:3010/graphql' \
-e USER_URL='http://service-user:3020/graphql' \
my-service/service-gateway
```

---

Sidenote: If you need to stop and remove all services do sthg like

```bash
sudo docker stop $(sudo docker ps -a -q)
sudo docker rm $(sudo docker ps -a -q)
```

Attention: This stops and removes all your running docker images
