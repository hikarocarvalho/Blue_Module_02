<?php
	$name = $_POST['name'];
	$email = $_POST["email"];
	$message = $_POST["message"];
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "portifolio@portifolio.com";
    $to = "hikarofcarvalho@gmail.com";
    $subject = $name;
    $message = "one person with this email: " . $email . " has send to you this message in your portifólio: " . $message;
    $headers = "From:" . $from;
    $json_str = '';
    if(mail($to,$subject,$message, $headers)){
        $json_str = '{"message":"This email has Send."}';
    }else{
         $json_str = '{"message":"Error"}';
    }

    //faz o json ser retornado
    $obj = json_encode($json_str);

    echo $obj;
    //header("Location: footer.html");
?>