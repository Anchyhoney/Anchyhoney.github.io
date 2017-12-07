<?php
    header("Content-type:text/html;charset=utf8");

    $id = $_POST["id"];
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

    $sql = "UPDATE address SET name='{$name}',phone='{$phone}',province='{$province}',city='{$city}',area='{$area}',address='{$address}',state='{$state}',userId='{$userId}' WHERE Id='{$id}'";
    
    $result = $mysqli->query($sql);

    if($result){
        echo json_encode(Array('code'=>200,"msg"=>"更新成功"));
    }else{
        echo json_encode(Array('code'=>404));
    }