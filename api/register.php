<?php
	$phone = $_POST["phone"];
	$password = $_POST["password"];

	$mysqli = new Mysqli("localhost","root","root","liwuyou");

	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}

	$sql0 = "SELECT Id FROM users WHERE phone='{$phone}'";
	$result0 = $mysqli->query($sql0);
	if(mysqli_num_rows($result0)){
		echo json_encode(Array("code"=>400,"msg"=>"手机号码已存在"));
	}else{
		$sql1 = "SELECT max(Id) FROM users";
		$result1 = $mysqli->query($sql1);
		$row1 = mysqli_fetch_assoc($result1);
		$id = $row1["max(Id)"]+1;
		$username = "USER".$id;

		$sql = "INSERT INTO users (username,phone,password) VALUES ('{$username}','{$phone}','{$password}')";

		$result = $mysqli->query($sql);

		if($result){
			echo json_encode(Array("code"=>200,"result"=>Array("username"=>$username,"userId"=>$id)));
		}else{
			echo json_encode(Array("code"=>404,"msg"=>"注册失败"));
		}
	}

    