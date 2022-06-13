create table users(
	id varchar2(10) PRIMARY KEY NOT NULL,
	pw varchar(10) NOT NULL
);
CREATE table rank(
	id varchar2(10) PRIMARY KEY NOT NULL,
	PUtime TIMESTAMP
);


drop table users;
delete from users; 
select * from users;

drop table rank;
delete from rank; 
SELECT * FROM rank;

insert into users values('rjsdud','123');
insert into users values('test1','123');
insert into users values('test2','123');
insert into users values('test3','123');

INSERT INTO rank values ('히히', '2000/03/05 12:10:17');

insert into rank values('test1','2008/11/11 11:11:11.0');
insert into rank values('test2','2008/11/11 11:11:11.1');
insert into rank values('test3','2022/11/14 11:12:12.1');
--오늘 날짜
SELECT TO_CHAR(sysdate, 'YYYY/MM/DD HH24:MI:SS')
FROM   dual;


SELECT COUNT(*) FROM users;

SELECT Rank.id
FROM RANK,USERS;

SELECT users.id, rank.id , TO_CHAR(TO_DATE(PUtime), 'HH:MI:ss') FROM USERS, RANK WHERE USERS.id = rank.id;

SELECT to_char(PUtime,'HH-MI-ss')
FROM rank

SELECT users.id, rank.id ,to_char(PUtime,'HH-MI-ss')
FROM rank users;

SELECT users.id, rank.id , to_char(rank.PUtime,'HH:MI:ss')
FROM USERS, 
RANK WHERE USERS.id = rank.id
SELECT users.id, rank.id , to_char(rank.PUtime,'HH:MI:ss') FROM USERS, RANK WHERE USERS.id = rank.id


SELECT RANK.PUtime() from RANK Mi






TO_CHAR(TO_DATE('PUtime'), 'HH:MI:ss'), 'HH:MI:ss')
