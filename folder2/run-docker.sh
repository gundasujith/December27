docker run \
  --rm \
  -e REACT_APP_BACKEND_BASE_URL="http://localhost:8081" \
  -i \
  -d \
  --name webupdate \
  -p 3000:3000 \
  rdm-web-app:1.0.4-dev

docker images
