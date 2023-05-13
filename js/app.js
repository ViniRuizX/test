const nome = localStorage.getItem('nome');
const email = localStorage.getItem('email');
const tel = localStorage.getItem('tel');

function criar(tag, classe) {
    // Cria uma nova tag com o nome passado como argumento
    var novaTag = document.createElement(tag);
  
    // Adiciona a classe à nova tag, se um nome de classe for fornecido
    if (classe) {
      novaTag.classList.add(classe);
    }
  
    // Retorna a nova tag criada
    return novaTag;
}

//Main
let mainDiv = criar('div', 'main');
document.body.appendChild(mainDiv);

//Left
let leftDiv = criar('div', 'left');
mainDiv.appendChild(leftDiv);

//Right
let rightDiv = criar('div', 'right');
mainDiv.appendChild(rightDiv);

//br
let br = criar('br', '');
leftDiv.appendChild(br);

//Div da Imagem
let profileDiv = criar('div', 'profile-img');
leftDiv.appendChild(profileDiv);

//Imagem
let duImg = criar('img', '');
duImg.src = './img/eduardo.jpeg';
profileDiv.appendChild(duImg);

//Box-1
let boxDiv = criar('div', 'box-1');
leftDiv.appendChild(boxDiv);

//heading
let headingDiv = criar('div', 'heading');
boxDiv.appendChild(headingDiv);

//Contato
let contato = criar('p', '');
contato.textContent = 'CONTATO';
headingDiv.appendChild(contato)

//Telefone
let telefone = criar('p','p1');
telefone.textContent = tel;
boxDiv.appendChild(telefone);

//Email
let emailFront = criar('p', 'p1');
emailFront.textContent = email;
boxDiv.appendChild(emailFront);

//Box-1 das Linguagens
let box1Div =criar('div', 'box-1');
leftDiv.appendChild(box1Div);

//heading Linguagens
let headLi = criar('div', 'heading');
box1Div.appendChild(headLi);

//p Linguagens
let linguagens = criar('p', '');
linguagens.textContent = 'LINGUAGENS';
headLi.appendChild(linguagens);

/////////////////////////////////////////////

//HTML
let html = criar('p', 'p1');
html.textContent = 'HTML';
box1Div.appendChild(html);

//Barra HTML
let divHtml = criar('div', 'skill-container');
html.appendChild(divHtml);

//barra Skill html
let divSkillHt = criar ('div', 'skill-html');
divHtml.appendChild(divSkillHt);

////////////////////////////////////////////

//CSS
let css = criar('p', 'p1');
css.textContent = 'CSS';
box1Div.appendChild(css);

//Barra CSS
let divCss = criar('div', 'skill-container');
css.appendChild(divCss);

//barra Skill CSS
let divSkillCs = criar ('div', 'skill-css');
divCss.appendChild(divSkillCs);

///////////////////////////////////////////////

//JS
let js = criar('p', 'p1');
js.textContent = 'JS';
box1Div.appendChild(js);

//Barra JS
let divJs = criar('div', 'skill-container');
js.appendChild(divJs);

//barra Skill JS
let divSkillJs = criar ('div', 'skill-js');
divJs.appendChild(divSkillJs);

/////////////////////////////////////////////////

//Jquery
let jquery = criar('p', 'p1');
jquery.textContent = 'JQUERY';
box1Div.appendChild(jquery);

//Barra Jquery
let divJquery = criar('div', 'skill-container');
jquery.appendChild(divJquery);

//barra Skill Jquery
let divSkillJQ = criar ('div', 'skill-js');
divJquery.appendChild(divSkillJQ);

////////////////////////////////////////////////////

let br1 = criar('br', '');
leftDiv.appendChild(br1);

let divBox2 = criar('div', 'box-1');
leftDiv.appendChild(divBox2);

let headDiv = criar('div', 'heading');
divBox2.appendChild(headDiv);


//Habilidades
let habilidades = criar('p', '');
habilidades.textContent = 'HABILIDADES';
headDiv.appendChild(habilidades);

////////////////////////////////////////////////////

//skill web
let webD = criar('p', 'p1');
webD.textContent = 'WEBSITE DESIGN';
divBox2.appendChild(webD);

//Barra webD
let divweD = criar('div', 'skill-container');
webD.appendChild(divweD);

//barra Skill Jquery
let divSkillWD = criar ('div', 'skill-web');
divweD.appendChild(divSkillWD);

///////////////////////////////////////////////////////

//GRAPHIC DESIGN
let grapD = criar('p', 'p1');
grapD.textContent = 'GRAPHIC DESIGN';
divBox2.appendChild(grapD);

//Barra webD
let divGD = criar('div', 'skill-container');
grapD.appendChild(divGD);

//barra Skill Jquery
let divSkillGD = criar ('div', 'skill-gra');
divGD.appendChild(divSkillGD);

///////////////////////////////////////////////////////////

//Box-3
let nameDiv = criar('div', 'name-div');
rightDiv.appendChild(nameDiv);

//Eduardo
let eduardo = criar('h1', '');
eduardo.textContent = nome;
nameDiv.appendChild(eduardo)

//Front End
let front = criar('p','p8');
front.textContent = 'Front End';
eduardo.appendChild(front);

/////////////////////////////////////////////////////////

//Sobre mim
let divBox3 = criar('div', 'box-2');
rightDiv.appendChild(divBox3);

//SOBRE MIM
let sobre = criar('h2', '');
sobre.textContent = 'SOBRE MIM';
divBox3.appendChild(sobre)

//Front End
let textSob = criar('p','p2');
textSob.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,<br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,';
sobre.appendChild(textSob);

///////////////////////////////////////////////////////////

//Educação
let divBox4 = criar('div', 'box-2');
rightDiv.appendChild(divBox4);

//SOBRE MIM
let educacao = criar('h2', '');
educacao.textContent = 'EDUCAÇÃO';
divBox4.appendChild(educacao);

//ano
let anos = criar('p', 'p3');
anos.textContent = '2010-2013';
divBox4.appendChild(anos)

let span1 = criar('span', '');
span1.textContent = 'Lorem Ipsum is simply dummy';
anos.appendChild(span1);

let textAno = criar('p', 'p2');
textAno.textContent = 'Lorem Ipsum is simply dummy text of ';
divBox4.appendChild(textAno);

////////////////////////////////////////////////////////////////////

let anos1 = criar('p', 'p3');
anos1.textContent = '2013-2016';
divBox4.appendChild(anos1);

let span2 = criar('span', '');
span2.textContent = 'Lorem Ipsum is simply dummy';
anos1.appendChild(span2);

let textAno1 = criar('p', 'p2');
textAno1.textContent = 'Lorem Ipsum is simply dummy text of ';
divBox4.appendChild(textAno1);

/////////////////////////////////////////////////////////////////////////

let anos2 = criar('p', 'p3');
anos2.textContent = '2016-2021';
divBox4.appendChild(anos2);

let span3 = criar('span', '');
span3.textContent = 'Lorem Ipsum is simply dummy';
anos2.appendChild(span3);

let textAno2 = criar('p', 'p2');
textAno2.textContent = 'Lorem Ipsum is simply dummy text of ';
divBox4.appendChild(textAno2);

/////////////////////////////////////////////////////////////////////////////

let divBox5 = criar('div', 'box-2');
rightDiv.appendChild(divBox5);

//experiencia
let experiencia = criar('h2', '');
experiencia.textContent = 'EXPERIENCIA';
divBox5.appendChild(experiencia);

//anos1
let anos3 = criar('p', 'p3');
anos3.textContent = '2010-2013';
divBox5.appendChild(anos3);

let span4 = criar('span', '');
span4.textContent = 'Lorem Ipsum is simply dummy';
anos3.appendChild(span4);

let textAno3 = criar('p', 'p2');
textAno3.textContent = 'Lorem Ipsum is simply dummy text of ';
divBox5.appendChild(textAno3);

///////////////////////////////////////////////////////////////////////////////////

//anos1
let anos4 = criar('p', 'p3');
anos4.textContent = '2013-2016';
divBox5.appendChild(anos4);

let span5 = criar('span', '');
span5.textContent = 'Lorem Ipsum is simply dummy';
anos4.appendChild(span5);

let textAno4 = criar('p', 'p2');
textAno4.textContent = 'Lorem Ipsum is simply dummy text of ';
divBox5.appendChild(textAno4);