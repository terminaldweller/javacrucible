#!/bin/sh

curl -X POST -H "Content-Type:application/json" -d '{"name":"doc1", "lastModified": 1652882691, "body":"Hello"}' "http://localhost:9080/api/v1/doc"
curl -X GET "http://localhost:9080/api/v1/doc/2"
curl -X DELETE "http://localhost:9080/api/v1/doc/1"
curl -X PUT -H "Content-Type:application/json" -d '{"id": 1, "body": "Die before I do"}' "http://localhost:9080/api/v1/doc/1"
