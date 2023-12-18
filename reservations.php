<?php

if (isset($_POST['submit'])) {
    $name = htmlspecialchars($_POST['name']);
    $number = htmlspecialchars($_POST['contact']);
    $restaurant = htmlspecialchars($_POST['restaurant']);
    $datetime = htmlspecialchars($_POST['datetime']);
    $mailTo = "anubhav@bapukikutia.in";
    $subject = "New Reservation";
    $headers = "From: webmaster@bapukikuta.in\r\n";
    $headers .= "Reply-To: webmaster@bapukikuta.in\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $txt = "New Reservation ~ \n\nName: ".$name.".\n\nPhone No: ".$number."\n\nRestaurant: ".$restaurant."\n\nDate & Time: ".$datetime;

    if(mail($mailTo, $subject, $txt, $headers)) {
        header("Location: https://bapukikutia.in");
        exit();
    } else {
        echo "Mail sending failed.";
    }
}

?>
