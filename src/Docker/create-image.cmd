docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss16/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss16/app ../..
