#!/usr/bin/env sh

JDBC_DRIVER=postgresql-42.4.0.jar
SCHEMA_SPY=schemaspy-6.1.0.jar
if [ ! -f ${JDBC_DRIVER} ]; then
  # https://jdbc.postgresql.org/download.html
  wget https://jdbc.postgresql.org/download/postgresql-42.4.0.jar
fi
if [ ! -f ${SCHEMA_SPY} ]; then
  wget https://github.com/schemaspy/schemaspy/releases/download/v6.1.0/schemaspy-6.1.0.jar
fi

# the driver included with the docker image is too old
# docker run \
#   -v "${PWD}"/dbdocs:/output \
#   schemaspy/schemaspy:6.1.0 \
#   -u "$(cat ./postgres/pg_user_secret)" \
#   -db "$(cat ./postgres/pg_db_secret)" \
#   -t pgsql \
#   -host 192.168.1.103 \
#   -p "$(cat ./postgres/pg_pass_secret)" \
#   -port 5432 \
#   -s public

java -jar ${SCHEMA_SPY} \
  -o "${PWD}/dbdocs" \
  -u "$(cat ./postgres/pg_user_secret)" \
  -db "$(cat ./postgres/pg_db_secret)" \
  -t pgsql \
  -host 192.168.1.103 \
  -p "$(cat ./postgres/pg_pass_secret)" \
  -port 5432 \
  -dp . \
  -noviews
