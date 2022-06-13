create table users(
	id varchar2(20) PRIMARY KEY NOT NULL,
	pw varchar(10) NOT NULL
);


drop table users;
delete from users; 
select * from users;


insert into users values('rjsdud','123');
insert into users values('test1','123');
insert into users values('test2','123');
insert into users values('test3','123');
--오늘 날짜
SELECT TO_CHAR(sysdate, 'YYYY/MM/DD HH24:MI:SS')
FROM   dual;



SELECT COUNT(*) FROM users;