<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $subject = "Franchise Mail from Website";
    $number = $_POST['number'];
    $city = $_POST['city'];
    $mailTo = "anubhav@bapukikutia.in";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail regarding Franchise ~ \n\nName: ".$name.".\n\nPhone No: ".$number.".\n\nCity: ".$city.".\n\nMail From: ".$mailFrom;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: https://bapukikutia.in");

}