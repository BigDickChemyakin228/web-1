<?php
require_once "Result.php";
session_start();
if (isset($_SESSION['result'])) {
    foreach ($_SESSION['result'] as $res) {
        drawResult($res);
    }
} else {
    $_SESSION['result'] = array();
}