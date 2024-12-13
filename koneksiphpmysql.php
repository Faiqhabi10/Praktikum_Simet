<?php
$host ="localhost";
$user ="root";
$pass ="";
$db = "simet_praktikum";

$koneksi = mysqli_connect($host,$user,$pass,$db);
if(!$koneksi){
    die("Gagal terkoneksi");
}else{
    echo"koneksi berhasil";
}