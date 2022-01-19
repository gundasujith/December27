# Twin Project RDM Web App

# Prerequisite
1. node latest 16.x should be installed
2. npm install -g yarn

# How to install and run
```sh
yarn && yarn start
```

## Build Docker image
```shell
docker build -f Dockerfile -t rdm-web-app:1.0.4-dev

```

## Run Docker image
```shell
 docker run \
  --rm \
  -e REACT_APP_BACKEND_BASE_URL="http://localhost:8081" \
  -i \
  -d \
  --name webupdate \ 
  -p 3000:3000 \
  rdm-web-app:1.0.4-dev
```