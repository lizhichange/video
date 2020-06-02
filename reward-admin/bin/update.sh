

path=

project=reward-platform
if [ ! -n "$1" ];then
  echo "NULL"
else
 path=$1
fi


cd  //home/fulihui/javacode/${project}${path}

git pull

mvn clean package -DskipTests


scp  /home/fulihui/javacode/${project}${path}/reward-admin/config/*  /home/fulihui/micro-svr/${project}/reward-admin/config/.

scp  /home/fulihui/javacode/${project}${path}/reward-admin/target/reward-admin.jar  /home/fulihui/micro-svr/${project}/reward-admin/.
