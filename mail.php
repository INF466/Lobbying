<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require $_SERVER['DOCUMENT_ROOT'] . '/mail/Exception.php';
require $_SERVER['DOCUMENT_ROOT'] . '/mail/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'] . '/mail/SMTP.php';

$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->SMTPDebug = 0; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
$mail->Host = "smtp.office365.com"; 
$mail->Port = 587; // TLS only
$mail->SMTPSecure = 'tls'; // ssl is deprecated
$mail->SMTPAuth = True;
$mail->Username = 'lobbster@mjghre.com'; // email
$mail->Password = ''; // password redacted for GH
$mail->setFrom('lobbster@mjghre.com', 'Lobbster contact form'); // From email and name
$mail->addAddress('matt@mjghre.com', 'Matt'); // to email and name

$data = array();// array to pass back data

if ($mail->addReplyTo($_POST['email'], $_POST['fname'].$_POST['lname'])) {
	$mail->Subject = 'Lobbster Contact Form';
	//Keep it simple - don't use HTML
	$mail->isHTML(false);
	//Build a simple message body
	$mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['fname']} {$_POST['lname']}
Message: {$_POST['message']}
EOT;
	//Send the message, check for errors
	if (!$mail->send()) {
		//The reason for failing to send will be in $mail->ErrorInfo
		//but it's unsafe to display errors directly to users - process the error, log it on your server.
		$data['success'] = false;
		$data['message'] = 'Sorry, something went wrong. Please try again later.';
	} else {
		$data['success'] = true;
		$data['message'] = 'Message sent! Thanks for contacting us.';
		
	}
} else {
	$data['success'] = false;
	$data['message'] = 'This action requires a valid email address. Please try again';
}
echo json_encode($data);
?>
