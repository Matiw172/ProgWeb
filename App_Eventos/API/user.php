<?php
include "config.php";
include "utils.php";


$dbConn =  connect($db);

/*
  listar todos los posts o solo uno
 */
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
      
  if (isset($_GET['cedula']))
  {
    $sql = $dbConn->prepare("SELECT * FROM user where cedula=:cedula");
    $sql->bindValue(':cedula', $_GET['cedula']);
    $sql->execute();
    $row_count =$sql->fetchColumn();
    if ($row_count==0) {
      header("HTTP/1.1 204 No Content");
      echo "No existe el registro ",$_GET['cedula'];
      
    }else{

      echo "Si existe el registro";
      $sql = $dbConn->prepare("SELECT * FROM user where cedula=:cedula");
      $sql->bindValue(':cedula', $_GET['cedula']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
      exit();
    }

  }
  else {
    //Mostrar lista de post
    $sql = $dbConn->prepare("SELECT * FROM user");
    $sql->execute();
    $sql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $sql->fetchAll()  );
    exit();
  }

}

// Crear un nuevo post
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  if (isset($_POST['cedula'])){
    $sql = $dbConn->prepare("SELECT cedula FROM user where cedula=:cedula");
    $sql->bindValue(':cedula', $_POST['cedula']);
    $sql->execute();
    $row_count =$sql->fetchColumn();
    if ($row_count>0) {
      header("HTTP/1.1 204 No Content");
      echo "Ya existe la cedula ", $_POST['cedula'];
    }else{
      echo "Guardado Exitosamente";
      $input = $_POST;
      $sql = "INSERT INTO user
            (name1,cedula, telefono, email,rol)
            VALUES
            (:name1,:cedula,:telefono,:email,:rol)";
      $statement = $dbConn->prepare($sql);
      bindAllValues($statement, $input);
      $statement->execute();
      $postId = $dbConn->lastInsertId();
      if($postId)
      {
        $input['id'] = $postId;
        header("HTTP/1.1 200 OK");
        echo json_encode($input);
        exit();
  	  }
    }
  }else{
    echo "EL campo cedula es obligatorio";
  }

}

//Borrar
if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{
  if (isset($_GET['cedula'])){
    $sql = $dbConn->prepare("SELECT COUNT(*) FROM user where cedula=:cedula");
    $sql->bindValue(':cedula', $_GET['cedula']);
    $sql->execute();
    $row_count =$sql->fetchColumn();
    if ($row_count == 0) {
      echo "No existe el registro ",$_GET['cedula'];
      header("HTTP/1.1 400 Bad Request"); //error 400 por no ejecutar el delete

    }else{
      $cedula = $_GET['cedula'];
      $statement = $dbConn->prepare("DELETE FROM user where cedula=:cedula");
      $statement->bindValue(':cedula', $cedula);
      $statement->execute();
      echo "Eliminado el registro ",$_GET['cedula'];
    	header("HTTP/1.1 200 OK");
    	exit();
    }
  }else{
    echo "El parametro cedula es obligatorio";
  }


}

//Actualizar
if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
  if (isset($_GET['cedula'])){
    $sql = $dbConn->prepare("SELECT cedula FROM user where cedula=:cedula");
    $sql->bindValue(':cedula', $_GET['cedula']);
    $sql->execute();
    $row_count =$sql->fetchColumn();
    if ($row_count>0) {
      $input = $_GET;
      $postId = $input['cedula'];
      $fields = getParams($input);

      $sql = "
            UPDATE user
            SET $fields
            WHERE cedula='$postId'
             ";

      $statement = $dbConn->prepare($sql);
      bindAllValues($statement, $input);

      $statement->execute();
      header("HTTP/1.1 200 OK");
      echo "Actualizado Exitosamente el usuario ", $_GET['cedula'];
      exit();
    }else{
      header("HTTP/1.1 204 No Content");
      echo "No existe la cedula ", $_GET['cedula'];
    }
  }else{
    echo "El parametro cedula es obligatorio";
  }
}


//En caso de que ninguna de las opciones anteriores se haya ejecutado
header("HTTP/1.1 400 Bad Request");

?>