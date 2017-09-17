# onix
node back end, mysql, orm


## Test
cd src
nodeunit tests/logger.js


# development
nodemon onix.js


curl -i -X POST \
  --url http://localhost:8001/apis/ \
  --data 'name=acl-api' \
  --data 'hosts=acl.onix.ca' \
  --data 'upstream_url=http://localhost:3012'

  curl -i -X GET \
    --url http://localhost:8000/ \
    --header 'Host: acl.onix.ca'

    curl -i -X POST \
      --url http://localhost:8001/apis/ \
      --data 'name=example-api' \
      --data 'hosts=example.com' \
      --data 'upstream_url=http://httpbin.org'

      curl -i -X GET \
        --url http://localhost:8000/ \
        --header 'Host: example.com'

        curl -i -X POST \
          --url http://localhost:8001/apis/example-api/plugins/ \
          --data 'name=key-auth'

          curl -i -X POST \
            --url http://localhost:8001/consumers/ \
            --data "username=Jason"

abfce226-0c3f-438b-a164-9600b1e40c10
curl -i -X POST \
  --url http://localhost:8001/consumers/Jason/key-auth/ \
  --data 'key=p@ss17'

curl -i -X GET \
  --url http://localhost:8000 \
  --header "Host: example.com" \
  --header "apikey: p@ss17"

curl -i -X GET   --url http://localhost:8000/ip   --header "Host: example.com"   --header "apikey: p@ss17"
