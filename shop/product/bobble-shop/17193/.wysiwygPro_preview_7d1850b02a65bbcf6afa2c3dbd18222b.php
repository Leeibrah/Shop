<?php
if ($_GET['randomId'] != "pxeqDvTG7EK9PcP2Jb4EWMyLO0ZO11lr8wWWLU45qHzUJaNXjkfXyQYA1F5wbzx8") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
