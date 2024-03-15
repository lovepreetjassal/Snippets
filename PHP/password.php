<?php
$password = "test";
$hash = password_hash("test",null);
if (password_verify($password, $hash)) {
               echo "match!";
}
?>
