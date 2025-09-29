# 简述

来源：https://github.com/xinghe0/ARL2

此项目为灯塔（ARL）的二开项目，因个人原因没有继续更新src版本，且各位师傅留言想要源码，故抽空整理下给各位师傅自己调试。



# 安装

## 源码

源码安装直接参考原官方文档，此处不再赘述，若跑通源码版本也可自行构建docker镜像，下面也给出一个基础版本给各位师傅直接使用。



## docker

在docker目录下直接使用docker-compose.yml进行构建

````
docker volume create arl_db
docker-compose up -d
```

若不能正常登录，可能是用户没事生成，执行以下语句

docker exec -ti arl_mongodb mongo admin
use admin
db.createUser({ user:'admin',pwd:'admin',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},"readWriteAnyDatabase"]})
use arl
db.user.insert({ username: 'admin',  password: hex_md5('arlsalt!@#'+'123456') })

````

执行完后使用默认账密admin、123456登录，在extents目录下有两个脚本：src、finger，按要求操作即可添加指纹和对应的src厂商

后面就可以愉快的使用了

