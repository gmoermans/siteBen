<?php

function IsInjected($str)
{
	$injections = array('(\n+)',
		   '(\r+)',
		   '(\t+)',
		   '(%0A+)',
		   '(%0D+)',
		   '(%08+)',
		   '(%09+)'
		   );
			   
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	
	if(preg_match($inject,$str))
	{
	  return true;
	}
	else
	{
	  return false;
	}
}

function sendEmail()
{
	echo "send email called!";	
	$name = $_POST['user_name'];
	$visitor_email = $_POST['user_mail'];

	if(IsInjected($visitor_email))
	{
		echo "Bad email value!";
		exit;
	}

	echo "injection attack safe";

	$message = $_POST['user_message'];
	  
	$email_from = 'r6elsa@outlook.com';
	$email_subject = "requete via formulaire de contact";
	$email_body = "message de $name.\n".
	"message :\n $message".
	"adresse mail destinataire : $visitor_email".


	if(mail($email_from,$email_subject,$email_body,""))
	{
		echo "Mail send!";
	}
	else
	{
		echo "mail not send";
	}	
}

	
?>