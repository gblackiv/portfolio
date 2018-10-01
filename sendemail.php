<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
	   'message'=>'Your email has been sent!'
	);
    $name = @trim(stripslashes($_POST['name'])); 
    $email = @trim(stripslashes($_POST['email'])); 
    // $phone = @trim(stripslashes($_POST['phone']));
    // $subject = @trim(stripslashes($_POST['subject']));
    $message = @trim(stripslashes($_POST['message'])); 

    $email_from = $email;
    $email_to = 'blackmongerry@gmail.com';
    
    $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Message: ' . $message;

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    echo json_encode($status);
    die;
    ?>