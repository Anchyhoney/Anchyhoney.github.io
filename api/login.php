<?php
    $phone = $_POST["phone"];
	$password = $_POST["password"];

	$mysqli = new Mysqli("localhost","root","root","liwuyou");
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
    }
    
    $sql = "SELECT Id,username,password FROM users WHERE phone='{$phone}'";
	
	$result = $mysqli->query($sql);

	if(mysqli_num_rows($result)){
		$row = mysqli_fetch_assoc($result);

		if($password == $row["password"]){
			echo json_encode(Array("code"=>200,"msg"=>"登录成功","result"=>Array("id"=>$row["Id"],"username"=>$row["username"])));
		}else{
			echo json_encode(Array("code"=>404,"msg"=>"用户名或密码错误"));
		}
	}else{
		echo json_encode(Array("code"=>404,"msg"=>"用户名或密码错误"));
	}