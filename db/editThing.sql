update chores
set cashmoney = $1, stardate = $3, labor = $2
-- sim 1 70k
where id = $4;

select * from chores