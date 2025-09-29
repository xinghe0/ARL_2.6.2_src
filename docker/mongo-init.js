use
admin;
db.createUser({
    user: 'admin',
    pwd: 'admin',
    roles: [
        {role: 'userAdminAnyDatabase', db: 'admin'},
        {role: 'readWriteAnyDatabase', db: 'admin'}
    ]
});

use
arl;
db.user.insert({
    username: 'admin',
    password: hex_md5('arlsalt!@#' + '123456')
});

