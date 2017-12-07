<?php
    // header("Content-Type:text/html;charset=utf-8"); 
    header("Content-type:text/html;charset=utf8");

    // $mysqli = new Mysqli("localhost","root","root","liwuyou");
    // if(mysqli_connect_error()){
    //     echo mysqli_connect_error();
    //     exit();
    // }
    // $sql = "SELECT * FROM address";

    // $result = $mysqli->query($sql);

    // $a = mysqli_fetch_assoc($result);
    // print_r($a);

    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $province = $_POST["province"];
    $city = $_POST["city"];
    $area = $_POST["area"];
    $address = $_POST["address"];
    $state = $_POST["state"];
    $userId = $_POST["userId"];

    $mysqli = new Mysqli("localhost","root","root","liwuyou");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }

    if($state){
        $sql2 = "UPDATE address SET state=0 WHERE userId={$userId}";
        $result2 = $mysqli->query($sql2);
    }

    $sql = "INSERT INTO address (name,phone,province,city,area,address,state,userId) VALUES ('{$name}','{$phone}','{$province}','{$city}','{$area}','{$address}','{$state}','{$userId}')";
    
    $sql1 = "SELECT max(Id) FROM address";
    // echo $sql;
    $result = $mysqli->query($sql);

    $result1 = $mysqli->query($sql1);

    

    $id = mysqli_fetch_assoc($result1);

    if($result){
        // echo "插入成功";
        echo json_encode(Array('code'=>200,"id"=>$id["max(Id)"]));
    }