/*
 Crie uma lista de conteúdos que serão aprendidos na formação. 


    a-) Adicione um novo conteúdo no final dessa lista . E imprima o array alterado . 

    b-) Adicione um novo conteúdo no inicio dessa lista . E imprima o array alterado . 

    c-) Retire o conteúdo no final dessa lista . E imprima o array alterado . 

    d-) Retire o conteúdo no inicio dessa lista . E imprima o array alterado .
*/

// Lista de conteúdos a serem aprendidos
let conteudos = [
    "HTML",
    "CSS",
    "JavaScript",
    "Array",
    "Backend"
  ];
  
  
  conteudos.push("Desenvolvimento de Aplicativos Móveis");
  console.log(conteudos);
  
  conteudos.unshift("Design de Interfaces");
  console.log(conteudos);
  
  conteudos.pop();
  console.log(conteudos);
  
  conteudos.shift();
  console.log(conteudos);
  