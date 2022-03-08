# 🐬 MySQL Server

| Version | MySQL  | MariaDB |
| ------- | ------ | ------- |
| 4.0     | 5.7, 8 | 10      |

Chevereto V4 rely in a [RDBMS](https://en.wikipedia.org/wiki/Relational_database) provided by a MySQL server.

::: tip MySQL / MariaDB
Chevereto support both database servers but we refer to it as "MySQL" everywhere.
:::

## Resources

* [Website](https://www.mysql.com/)

## What it does?

The MySQL server is used to interact with the database storing relational data, for which Chevereto links users to media, content to reactions, folders, etc. That relational data is what is used to define what your application "is".

## Permissions

Database user must have `ALL PRIVILEGES` over the target database.

## Storage engine

InnoDB table storage engine.

👉 Old versions using MyISAM table storage engine will require to convert the old tables to InnoDB. Read [Convert MyISAM tables to InnoDB](https://dev.mysql.com/doc/refman/8.0/en/converting-tables-to-innodb.html)

## Creating the database

### Using the MySQL console

Run the following command to create the `chevereto` database and its user binding.

```sh
sudo mysql -uroot -ppassword -e "CREATE DATABASE chevereto; \
    CREATE USER 'chevereto' IDENTIFIED BY 'user_database_password'; \
    GRANT ALL ON chevereto.* TO 'chevereto' IDENTIFIED BY 'user_database_password';"
```

### Using web panels

Here some references for the most popular panels.

* [cPanel Database](https://docs.cpanel.net/cpanel/databases/mysql-databases/)
* [Plesk Database](https://docs.plesk.com/en-US/obsidian/customer-guide/website-databases/creating-databases.65157/)
* [CyberPanel Database](https://cyberpanel.net/docs/view-and-manage-databases-table-from-cloud-platform/)
* [CloudPanel Database](https://www.cloudpanel.io/docs/cloudpanel-ce/frontend-area/databases)
