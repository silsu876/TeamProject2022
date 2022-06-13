create table users(
	id varchar2(10) PRIMARY KEY NOT NULL,
	pw varchar(10) NOT NULL
);
CREATE table rank(
	id varchar2(10) PRIMARY KEY NOT NULL,
	PUtime date 
);
ALTER session set NLS_DATE_FORMAT = 'DD/MM/RR HH:MI:SS'; 
drop table users;
delete from users; 
select * from users;

drop table rank;
delete from rank; 
select * from rank;


insert into users values('rjsdud','123');
insert into users values('test1','123');
insert into users values('test2','123');
insert into users values('test3','123');

INSERT INTO rank values ('히히', '2000/03/05 12:10:17');

insert into rank values('test1','123');
insert into rank values('test2','123');
insert into rank values('test3','123');
--오늘 날짜
SELECT TO_CHAR(sysdate, 'YYYY/MM/DD HH24:MI:SS')
FROM   dual;



SELECT COUNT(*) FROM users;