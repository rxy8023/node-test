<?php
	header("content-type:text/html;charset=utf-8");
	var_dump($_SERVER['REQUEST_METHOD']);
	$loginName = isset($_POST['username']) ? $_POST['username'] : '';
	$passWord = isset($_POST['password']) ? $_POST['password'] : '';
	$Email = isset($_POST['email']) ? $_POST['email'] : '';
	echo $loginName;
	$link = mysqli_connect("localhost","root","","test");
	$sql="insert into login(ID,loginName,passWord,Email) values(default,'$loginName','$passWord','$Email')";
	if(mysqli_query($link,$sql)){
		$result_count = mysqli_affected_rows($link);
		if($result_count > 0){
			echo "OK";
		}else{
			echo "ERROR";
		}
	}else{
		//语法执行错误
		echo "服务器出现问题. ";
	}
?>