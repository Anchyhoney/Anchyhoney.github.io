<?php
    header("Content-type:text/html;charset=utf8");

    $userId = $_GET["userId"];

    $mysqli = new Mysqli("localhost","root","root","liwuyou");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }

    $sql = "SELECT Id,name,phone,province,city,area,address,state FROM address WHERE userId={$userId} ORDER BY state";

    $result = $mysqli->query($sql);


    if(mysqli_num_rows($result)){
        while($row = mysqli_fetch_assoc($result)){
	        $arr[] = $row;
	    }
		echo json_encode(Array("code"=>200,"result"=>$arr));
    }else{
		echo json_encode(Array("code"=>404,"result"=>""));
	}

    