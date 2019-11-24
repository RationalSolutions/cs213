<?php
$amount = $_GET['amount'];
$apr = $_GET['apr'];
$term = $_GET['term'];

$monthlyAPR = $apr / 100 / 12;
$months = $term * 12;

$payment = round($amount * $monthlyAPR / (1 - (pow(1 / (1 + $monthlyAPR), $months))), 2);

echo "<p> With a mortgage amount of {$amount}, and an APR of {$apr}%, you will have a monthly payment of {$payment} over the course of {$term} years. </p>
        </br><a href='mortgage.html' title='Mortgage Calculator'>Back</a>";

