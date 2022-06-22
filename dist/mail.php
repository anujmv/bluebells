<?php

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;


require './phpmailer/PHPMailer.php';


use PHPMailer\PHPMailer\PHPMailer;


$mail = new PHPMailer();

//enter SMTP settings

// Form Data
$name = $_REQUEST['name'] ;
$email = $_REQUEST['email'] ;
$phone = $_REQUEST['phone'];
$message = $_REQUEST['message'] ;



//Set who the message is to be sent from
$mail->setFrom('webmaster@bluebellspg.in', 'Webmaster Blue Bells');
//Set an alternative reply-to address
$mail->addReplyTo($email,$name);
//Set who the message is to be sent to
$mail->addAddress('info@bluebellspg.in', 'Info Blue Bells');
//Set the subject line
$mail->Subject = 'Enquiry from your website"';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->isHTML(true);

$mailContent = " <div>
<h1 class='title'>Details of enquiry</h1> 
<table>
    <tr> 
        <th>Name:</th><td>$name</td> 
    </tr> 
    <tr> 
        <th>Email:</th><td>$email</td> 
    </tr> 
    <tr> 
        <th>Phone:</th><td>$phone</td> 
    </tr> 
    <tr> 
        <th>Message:</th><td>$message</td>
    </tr>                                             
    
</table>
</div>";

$mail->Body = $mailContent;

//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file


//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}