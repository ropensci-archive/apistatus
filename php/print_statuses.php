<?php

  include 'apistatus.php';

  $json_data = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/apiinfo.json');

  $apistatus = new apistatus();

  $apis = $apistatus->getStatuses($json_data);

  $file = $_SERVER['DOCUMENT_ROOT'] . '/statuses.json';

  if (($fp = fopen($file, "w")) !== false) {
    fwrite($fp, json_encode($apis));
    fclose($fp);
  }

?>
