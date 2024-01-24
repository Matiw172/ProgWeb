create database api_eventos_asistencias;

use api_eventos_asistencias;
create table user(
    id int primary key auto_increment,
    name1 varchar(200) not null,
    cedula varchar(10) not null,
    telefono varchar(15) not null,
    email varchar(100) not null,
    rol varchar(100) not null
);

use api_eventos_asistencias;
create table evento(
    id int primary key auto_increment,
    nombre varchar(250),
    fecha_inicio date not null,
    lugar varchar(100) not null,
    descripcion text,
    estado varchar(100)
);

use api_eventos_asistencias;
create table asistencia(
    id int primary key auto_increment,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES user(id),
    id_evento INT,
    FOREIGN KEY (id_evento) REFERENCES evento(id),
    cantidad int not null,
    estado varchar(100),
    fecha_entrada date not null, #format YYYY-MM-DD
    fecha_salida date not null #format YYYY-MM-DD
);

/* borrar base de datos */
drop database api_eventos_asistencias;