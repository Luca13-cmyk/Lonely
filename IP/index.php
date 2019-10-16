<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>MyIP</title>
	<style>
	html,body
		{
			padding: 0;
			margin: 0;
			background: #dcdcdc;

		}
		#content
		{
			position: relative;
			padding: 50px 70px;
		}
		#modal
		{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

		}
		b
		{
			font-size: 28px;
			color: #000;
		}
	
	</style>
</head>
<body>
	<div id="content">
		<div id="modal">
			<b>
			<?php
	
				$ip = $_SERVER["SERVER_ADDR"];
				echo "IP: <i>".$ip."<i/>";
			?>
			</b>
		</div>
	</div>
</body>
</html>