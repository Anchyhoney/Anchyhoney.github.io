<?php
    header("Content-type:text/html;charset=utf8");

    $id = $_POST["id"];

    $mysqli = new Mysqli("localhost","root","root","liwuyou");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }

    $sql = "DELETE FROM address WHERE Id='{$id}'";
    
    $result = $mysqli->query($sql);

    if(mysqli_num_rows($result)){
        echo json_encode(Array('code'=>200,"msg"=>"删除成功"));
    }else{
        echo json_encode(Array('code'=>404,"msg"=>"删除失败"));
    }