
use assessment;
create table relationstatus(
  relationid INT not null primary key,
  relationtype varchar(30)
);
insert into relationstatus values('1','parent');
insert into relationstatus values('2','brother');
insert into relationstatus values('3','sister');
insert into relationstatus values('4','son');
insert into relationstatus values('5','daughter');
create table gpap(
  gpapid INT not null,
  name varchar(10),
  dob varchar(10),
  relationid INT,
  foreign key (relationid) references relationstatus(relationid)
  );
alter table gpap add primary key (gpapid);
insert into gpap values('1','hari','2-12-2002','1');
insert into gpap values('2','guna','3-10-2003','2');
insert into gpap values('3','arjun','6-11-1999','3');
insert into gpap values('6','vamshi','3-12-1996','4');
insert into gpap values('5','kevin','5-12-2004','5');
select * from gpap;
 
create table gender(
     genderid INT not null primary key,
     name varchar(7)
);
insert into gender values('1','male');
insert into gender values('2','female');
insert into gender values('3','female');
insert into gender values('4','female');
insert into gender values('5','male');


create table insurancetypefirm (
    firmid INT not null primary key,
    firmname varchar(10)
);
insert into insurancetypefirm values('1','group py');
insert into insurancetypefirm  values('2','personal');
insert into insurancetypefirm values('3','group py');
insert into insurancetypefirm  values('4','personal');
insert into insurancetypefirm values('5','group py');



create table topups(
     topupid int not null primary key,
     amount int,
     deduction int,
     description varchar(30)
);
insert into topups values('1','100000','1200', 'this is great');
insert into topups values('2','100000','1200', 'fantastic');
insert into topups values('3','100000','1200', 'awesome');
insert into topups values('4','100000','1200', 'lets do it');
insert into topups values('5','100000','1200', 'goodbye');
create table cyclemgn(
      cycleid int not null,
      start date,
      end date,
      accessedit enum('on','off'),
      firmid int,
      foreign key (firmid) references insurancetypefirm (firmid)
);
alter table cyclemgn drop start;
alter table cyclemgn drop end;
alter table cyclemgn drop accessedit;
alter table cyclemgn add primary key(cycleid);
alter table cyclemgn add unique key (start);
alter table cyclemgn add unique key(end);
alter table cyclemgn add column start varchar(30);
alter table cyclemgn add column end varchar(30);
alter table cyclemgn add column accessedit varchar(30);
select * from cyclemgn;
alter table cyclemgn drop start;
alter table cyclemgn drop end; 
alter table cyclemgn add column start INT;
alter table cyclemgn add column end INT;
insert into cyclemgn values('1','1','on','2010','2011');
insert into cyclemgn values('2','2','on','2012','2013');
insert into cyclemgn values('3','3','off','2014','2015');
insert into cyclemgn values('4','4','on','2016','2017');
insert into cyclemgn values('5','5','off','2018','2019');
create table cycletopup (
       cycid int not null,
       topupid int,
       cycleid int,
       primary key (cycid),
       foreign key (topupid) references topups(topupid),
       foreign key (cycleid) references cyclemgn(cycleid)
);
insert into cycletopup values('1','1','1');
insert into cycletopup values('2','2','2');
insert into cycletopup values('3','3','3');
insert into cycletopup values('4','4','4');
insert into cycletopup values('5','5','5');
create table user(
       userid int not null,
       employeename varchar(10),
       empid int,
       dob date,
       location varchar(20),
       password varchar(20),
       bloodgroup varchar(10),
       phno INT,
       genderid INT,
       optin varchar(10),
       optout varchar(10),
       rolestatus enum('HR','employee'),
       gpapid int,
       primary key (userid),
       foreign key (genderid) references gender(genderid),
       foreign key (gpapid) references gpap(gpapid)
);
select * from user;
insert into user values('1','ednq','1','10:11:12','hyderabd','ainc','A+','90902211','1','12','15','hr','1');
insert into user values('2','ednq','2','11:10:11','hyderabd','ainc','B+','90912211','2','14','16','employee','2');
insert into user values('3','easjnq','3','12:9:9','singapore','aqjcq','o+','90932211','3','18','19','hr','3');
insert into user values('4','edqnjq','4','10:11:12','newyork','jsdai','A+','94952211','4','11','17','employee','4');
insert into user values('5','eddsk','5','10:11:12','mumbai','qwnjd','o-','90962211','5','19','11','employee','5');
create table nominee1(
nomineeid INT not null,
dependentname varchar(30),  
relationid INT, 
DOB DATE,
userid int,
primary key (nomineeid),
foreign key(userid) references user(userid),
foreign key (relationid) references relationstatus(relationid)
);

create table useryear (
 yearid int not null,
 userid int,
 cycleid int,
 primary key (yearid),
 foreign key (userid) references user(userid),
 foreign key (cycleid) references cyclemgn(cycleid)
);
select * from user;
insert into gender values('3','female');
insert into gender values('4','female');
insert into gender values('5','male');
nsert into user values('1','ednq','1','10:11:12','hyderabd','ainc','A+','90902211','1','12','15','hr','1');
insert into user values('2','ednq','2','11:10:11','hyderabd','ainc','B+','90912211','2','14','16','employee','2');
insert into user values('3','easjnq','3','12-9-9','singapore','aqjcq','o+','90932211','3','18','19','hr','3');
insert into user values('4','edqnjq','4','10:11:12','newyork','jsdai','A+','949522118','4','11','17','employee','6');
insert into user values('5','eddsk','5','10:11:12','mumbai','qwnjd','o-','909622119','5','19','11','employee','5');
alter table cyclemgn add unique key (start);
alter table cyclemgn add unique key(end);
select * from useryear;

insert into useryear values('1','1','1');
insert into useryear values('2','2','2');
insert into useryear values('3','4','3');
insert into useryear values('4','1','3');
insert into useryear values('5','5','4');