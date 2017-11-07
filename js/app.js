var i = Math.floor(Math.random() * 100) + 1;

var requestURL = 'https://www.reddit.com/r/tiodopave/hot.json?limit=100';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var dados = request.response;
  insereDados(dados);
}

function insereDados(json){
  //Insere pergunta
  var myP = document.createElement('h3');
  myP.textContent = json.data.children[i].data.title;
  document.getElementById("pergunta").appendChild(myP);

  //insere resposta
  var myR = document.createElement('h3');
  myR.textContent = json.data.children[i].data.selftext;
  document.getElementById("resposta").appendChild(myR);
}

function showDiv(id){
  var rickRoll = document.createElement('img');
  rickRoll.src = "https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif";
  document.getElementById("rick").appendChild(rickRoll);

  var cazalBe = document.createElement('img');
  cazalBe.src = "http://lh5.ggpht.com/-e8TwgJd_OeY/UTiTrJOY21I/AAAAAAAAAI4/hJY58Dxpono/s320/3786952_o.gif";
  document.getElementById("cazalbe").appendChild(cazalBe);
}
//jsonObj.data.children[i].data.title;




