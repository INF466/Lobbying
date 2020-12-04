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
$mail->Username = 'noreply@mjghre.com'; // email
$mail->Password = 'Zun56984'; // password
$mail->setFrom('noreply@mjghre.com', 'Lobbster contact form'); // From email and name
$mail->addAddress('matt@mjghre.com', 'Matt'); // to email and name

 if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
        $mail->Subject = 'Lobbster Contact Form';
        //Keep it simple - don't use HTML
        $mail->isHTML(false);
        //Build a simple message body
        $mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['name']}
Subject: {$_POST['subject']}
Message: {$_POST['message']}
EOT;
        //Send the message, check for errors
        if (!$mail->send()) {
            //The reason for failing to send will be in $mail->ErrorInfo
            //but it's unsafe to display errors directly to users - process the error, log it on your server.
            $msg = 'Sorry, something went wrong. Please try again later.';
        } else {
            $msg = 'Message sent! Thanks for contacting us.';
			
        }
    } else {
        $msg = 'Invalid email address, message ignored.';
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>


  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Lobbster: Reporting Lobbying Activities</title>
  <meta name="description" content="Lobbster provides a way for you to report and save your lobbying activities.">
  <meta name="keywords" content="Lobbying, Lobbying Report, Lobbying Activities, Reporting Lobbying Activities">
  <meta name="author" content="This wesbite was made in collaborations with Albany Law and SUNY Albany. The students who worked on this were Jocelyn Chan, Jesse Conklin, Matthew Galetta, and Gyuhaeng 'Alex' Lee!">

	<meta name="author" content="">

	<!-- Mobile Specific Metas
	–––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<meta name="viewport" content="width=device-width, initial-scale=1">


	<!-- CSS
	–––––––––––––––––––––––––––––––––––––––––––––––––– -->

	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/reportingStyles.css">

	<!-- Favicon
	–––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<!-- <link rel="icon" type="image/png" href="favicon.png"> -->

</head>
<body onload="checkDisclaimer()">

  <!-- Primary Page Layout -->

  <nav class="nav">
    <img class="logo" src="images/logoTrans.png" alt="NY Lobbying Express">
    <a href="index.html">Home</a>
    <a href="modules.html">Modules</a>
    <a href="podcasts.html">Podcasts</a>
    <a class="active" href="reporting_activities.html">Activities</a>
		<a href="reporting_expenses.html">Expenses</a>
  </nav>
  <nav class="nav_mobile">
    <img class="logo" src="images/logoTrans.png" alt="Lobbster: The website for learning about NYS lobbying!">
	<img onclick="nav_burger()" id="nav_burger" src="images/burger.png" alt="burger">
	<div id="nav_burger_hide" style="display:none;">
		<a href="index.html">Home</a>

		<a href="modules.html">Modules</a>

		<a href="podcasts.html">Podcasts</a>

		<a class="active" href="reporting_activities.html">Activities</a>

		<a href="reporting_expenses.html">Expenses</a>
	</div>
  </nav>

  <main>
		<div class="reportPageTitle">
      <h2>Reporting: Lobbying Activities</h2>
    </div>
		<!--Disclaimer-->
		<div id="modalDisclaimer" class="modal disclaimer">
			<div class="modal-content"><h4>Disclaimer</h4>
				<p>This web tool is in no way affiliated or endorsed by New York State.</p>
				<p>Albany Law School has made no warranties regarding web-based tool and that this software is being provided on an “as is” basis without any warranties or representations of any kind. Albany Law School disclaims all warranties worldwide with regard to the software, express or implied, including any warranty of software performance, and any implied warranties of fitness for a specific purpose, accuracy, or merchantability of computer program, merchantable quality or noninfringement of third-party rights. Some states or jurisdictions do not allow the exclusion of implied warranties, so the above limitations may not apply to you.</p>
				<p>This product could include inaccuracies in the information therein or typographical errors. Albany Law School disclaims all liability related to such inaccuracies or errors. Your sole remedy for all claims related to the product shall be the amount paid for the product. The material is not to be interpreted as legal advice; it is for informational purposes only. Users seeking legal advice should consult a licensed attorney in their jurisdiction.</p>
				<div>
					<button type="button" class="modalClose" id="acceptDisclaimer" onclick="acceptDisclaimer()">Accept</button>
				</div>
			</div>
		</div>
		<div id="modalInstructions" class="modal instructions">
			<div class="modal-content"><h4>Directions</h4>
			<span class="close" onclick="hideModalInstructions()">&times;</span>
				<p>This form is designed to help you track your organization's lobbying activities. On each page, you will need to enter the requested information to proceed. All fields are mandatory unless otherwise noted.</p>
				<button type="button" class="modalClose" id="accpetInstructions" onclick="hideModalInstructions()">OK</button>
			</div>
		</div>

		<!-- Form -->
		<div class="reportContainer">
			<div class="reporting">
			<?php if (!empty($msg)) {
				echo "<h2>$msg</h2>";
			} ?>
			<p>You can close this tab</p>
			</div>
		</div>
		<div id="modalPopUp" class="modal">
			<!-- Modal content -->
			<div class="modal-content">
				<span class="close" onclick="hideModal()">&times;</span>
				<div id="modalText"></div>
				<button type="button" class="modalClose" id="acceptInstructions" onclick="hideModal()">OK</button>
			</div>
		</div>

		<footer>
			<hr>
			<br>
			<p>Contact Information:</p>
			<p>Email:  LobbsterNY@albanylaw.edu</p>
      <p><a href="aboutus.html">About us</a></p>
			<button class="contactButton" id="contactBtn">Contact us!</button>
			<div id="contactModal" class="modal2">
				<div class="mdcontact">
					<span class="close">&times;</span>
					<form class="formcontact" id="formcontact" action="mail.php" method="post" target="_blank">
						<label for="name">Your Name</label>
						<input type="text" id="name" name="name">

						<label for="email">E-mail</label>
						<input type="text" id="email" name="email">
						
						<label for="subject">Subject</label>
						<input type="text" id="subject" name="subject">

						<label for="message">Message</label>
						<textarea id="message" name="message" placeholder="Please enter the text of your message here!" style="height:200px"></textarea>

						<input type="submit" value="Submit">
					</form>
				</div>
			</div>
			<img id="footerLogo" src="images/logoBackground.png" alt="NY Lobbying Express">
		</footer>
	</main>
	<script src="js/reportingModal.js"></script>
	<script src="js/js.js"></script>
	<script src="js/activities.js"></script>
	<script src="js/disclaimer.js"></script>
</body>
</html>
