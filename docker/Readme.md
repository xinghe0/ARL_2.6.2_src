# install

```
docker volume create arl_db
docker-compose up -d
```

若不能正常登录，可能是用户没事生成，执行以下语句

```
docker exec -ti arl_mongodb mongo admin
use admin
db.createUser({ user:'admin',pwd:'admin',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},"readWriteAnyDatabase"]})
use arl
db.user.insert({ username: 'admin',  password: hex_md5('arlsalt!@#'+'123456') })
```