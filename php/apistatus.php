<?php

class apistatus {

  public function __construct() {

  }

  //returns true, if domain is availible, false if not
  public function isDomainAvailible($domain) {
    //check, if a valid url is provided
    if(!filter_var($domain, FILTER_VALIDATE_URL)) {
           return false;
    }

    //initialize curl
    $curlInit = curl_init($domain);
    curl_setopt($curlInit,CURLOPT_CONNECTTIMEOUT,10);
    curl_setopt($curlInit,CURLOPT_HEADER,true);
    curl_setopt($curlInit,CURLOPT_NOBODY,true);
    curl_setopt($curlInit,CURLOPT_RETURNTRANSFER,true);

    //get answer
    $response = curl_exec($curlInit);

    curl_close($curlInit);

    if ($response) return true;

    return false;
  }

  public function getStatuses($json_data) {

    $apis = json_decode($json_data);

    foreach($apis AS &$api) {
      $api->status = $this->isDomainAvailible($api->eg_call);
    }

    return $apis;

  }

}





?>
