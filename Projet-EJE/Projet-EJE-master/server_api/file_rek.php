<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-with");
header("Content-Type: application/json; charset=utf-8");

include "config.php";
$postjson = json_decode(file_get_contents('php://input'), true);

if ($postjson['aski']=="ajout_etudiant") {
//	$mdp = md5($postjson['mdp']);
	$query = mysqli_query($mysqli, "INSERT INTO utilisateur SET
		

        Statut = '$postjson[Statut]',
        Nom = '$postjson[Nom]',
        Prenoms = '$postjson[Prenoms]',
        Datnais = '$postjson[Datnais]',
        Email = '$postjson[Email]',
        Password = '$postjson[Password]'
		 " );
	if ($query) $result = json_encode(array('success'=>true));
	else $result = json_encode(array('success'=>false, 'msg'=>'Veillez ressayer plus tard'));

	echo $result;

}


elseif ($postjson['aski']=="connect") {
	$query = mysqli_query($mysqli, "SELECT * FROM utilisateur WHERE Email = '$postjson[Email]' AND
		Password = '$postjson[Password]'
		 " );
	$check = mysqli_num_rows($query);
	if($check>0){
		$data = mysqli_fetch_array($query);
		$datauser =  array(
		'id' => $data['id'],
		'Nom' => $data['Nom'],
		'Prenoms' => $data['Prenoms'],
		'Email' => $data['Email'],
		'Datnais' => $data['Datnais'] );

	if ($query) $result = json_encode(array('success'=>true, 'result'=>$datauser));
	else $result = json_encode(array('success'=>false, 'msg'=>'Veillez ressayer plus tard'));
	}else {
		$result = json_encode(array('success'=>false, 'msg'=>'Veillez ressayer plus tard'));
	}

	echo $result;

}

?>