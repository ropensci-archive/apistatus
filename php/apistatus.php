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

    if(!curl_errno($curlInit)) {
      $info = curl_getinfo($curlInit);
      $status['is_ok'] = true;
      $status['trans_time'] = $info['total_time'];
    }
    else {
      $status['is_ok'] = false;
      $status['trans_time'] = 'n/a';
    }

    return $status;

    curl_close($curlInit);

  }

  public function getStatuses($json_data) {

    $apis = json_decode($json_data);

    foreach($apis AS &$api) {
      $status = $this->isDomainAvailible($api->eg_call);
      $api->status = $status['is_ok'];

      if(is_numeric($status['trans_time'])) {
        $api->trans_time = round($status['trans_time'],3);
      }
      else {
        $api->trans_time = $status['trans_time'];
      }

      $api->curr_time = date('m/d/Y H:i:s');

    }

    return $apis;

  }

}





?>
