/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2019/11/6 14:32:35                           */
/*==============================================================*/


drop table if exists bom_code;

drop table if exists user;

drop table if exists user_group;

drop table if exists warehouse;

drop table if exists warehouse_detail;

/*==============================================================*/
/* Table: bom_code                                              */
/*==============================================================*/
create table bom_code
(
   id                   bigint not null,
   bom_code             varchar(100),
   bom_name             varchar(300),
   status               int(11) comment '1、正常
            2、限制
            3、冻结',
   is_del               tinyint,
   primary key (id)
);

alter table bom_code comment '物料编码表';

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   id                   bigint not null,
   username             varchar(50),
   password             varchar(50),
   user_auth            int(11) comment '用户权限，多个权限之间使用逗号分隔
            
            栗子：1,2,4',
   nick_name            varchar(50),
   create_time          bigint,
   status               int(11) comment '用户状态：
            0、正常
            1、受限
            2、冻结',
   is_del               tinyint,
   primary key (id)
);

alter table user comment '用户表，不包含其他附属信息';

/*==============================================================*/
/* Table: user_group                                            */
/*==============================================================*/
create table user_group
(
   id                   int(11) not null,
   group_name           varchar(50),
   group_auths          varchar(200) comment '多个权限值外键id，之间使用逗号分隔
            
            栗子：1,2,4',
   group_status         int(11) comment '组状态：
            0：正常
            1：受限
            2：冻结',
   remark               varchar(200),
   is_del               tinyint,
   primary key (id)
);

alter table user_group comment '用户分组表不包含其他附属信息';

/*==============================================================*/
/* Table: warehouse                                             */
/*==============================================================*/
create table warehouse
(
   id                   int(11) not null,
   bom_id               int(11),
   planner_id           int(11),
   repertory            float(11,4),
   plan_demand          float(11,4),
   create_time          int(11),
   is_del               tinyint,
   primary key (id)
);

/*==============================================================*/
/* Table: warehouse_detail                                      */
/*==============================================================*/
create table warehouse_detail
(
   id                   int(11) not null,
   warehourse_id        int(11),
   name                 varrchar(100),
   date                 int(11),
   plan_count           int(11),
   remark               varchar(200),
   creat_time           int(11),
   is_del               tinyint,
   primary key (id)
);

alter table warehouse_detail comment '盘存明细表';

