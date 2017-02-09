<?php
	//1.连接数据库
	 $host = "localhost";
	 $uname="root";
	 $upwd="";
	 $db="test";
	$link = mysqli_connect($host,$uname,$upwd,$db); //查询对象
	//2.查询数据表、
	 //获取用户提交的数据
	 $username=$_REQUEST["username"];
	 //sql语句
	 $sql="select * from login where loginName='$username'";
	 //查询
	 $result=mysqli_query($link,$sql); 
	//3、获取查询记录数
	$result_count = mysqli_num_rows($result);
	 if($result_count > 0){
	 	echo "用户名存在！";
	 }
	 else{
	 	echo "恭喜您,可以注册！";
	 }

	//根据查询结果响应数据给客户端
?>