#!/bin/sh

curl -k -X POST -H "Content-Type:application/json" -d '{"name":"doc1", "lastModified": 1652882691, "body":"Hello"}' "https://localhost:9080/api/v1/doc/1"
curl -k -X GET "https://localhost:9080/api/v1/doc/1"
curl -k -X DELETE "https://localhost:9080/api/v1/doc/1"
curl -k -X PUT -H "Content-Type:application/json" -d '{"id": 1, "body": "Die before I do"}' "https://localhost:9080/api/v1/doc/1"
