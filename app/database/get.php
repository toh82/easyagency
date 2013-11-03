<?php
	$urlParameters = $_GET["url"];

    $ch = curl_init();
 
    curl_setopt($ch, CURLOPT_URL, "http://127.0.0.1:5984/$urlParameters");
    curl_setopt($ch, CURLOPT_USERAGENT, "MozillaXYZ/1.0");
    //curl_setopt($ch, CURLOPT_PUT, true);
    //curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $output = curl_exec($ch);
    
    curl_close($ch);
 
    echo $output;
?>