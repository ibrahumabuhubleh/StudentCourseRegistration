create table if not exists course(
  id bigserial primary key,
  code varchar(20) not null unique,
  title varchar(255) not null,
  credits int not null default 3
);
create table if not exists student(
  id bigserial primary key,
  name varchar(255) not null,
  email varchar(255) not null unique,
  major varchar(100)
);
create table if not exists section(
  id bigserial primary key,
  course_id bigint not null references course(id) on delete cascade,
  term varchar(20) not null,
  capacity int not null default 30
);
