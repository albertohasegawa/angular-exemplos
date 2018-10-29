create schema livroestudo;

create table livroestudo.autor (
	id serial primary key,
	nome varchar(200) not null,
	pseudonimo varchar(200) null);
create table livroestudo.categoria (
	id serial primary key,
	descricao varchar(200) not null);

create table livroestudo.livro (
	id serial primary key,
	titulo varchar(100) not null,
	datapublicacao timestamp(0) not null,
	id_autor integer not null,
	id_categoria integer not null,
	constraint fk_livro_autor FOREIGN KEY (id_autor) REFERENCES livroestudo.autor (id),
	constraint fk_livro_categoria FOREIGN KEY (id_categoria) REFERENCES livroestudo.categoria (id))

	