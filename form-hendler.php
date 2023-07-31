<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $project = $_POST['project'];
    $message = $_POST['message'];

    $email_form = 'info@robaet.com';

    $email_subject = 'New Form Submission';

    $email_body = "User Name: $name.\n".
                    "Email ID: $visitor_email.\n".
                    "Project Name: $project.\n".
                    "Message: $message.\n";

    $to = 'modelcomputer.net@gmail.com';

    $headers = "From: $email_form \r\n";

    $headers = "Reply-To: $visitor_email \r\n";


    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>