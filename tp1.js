function calcul_moyenne()
{
var note1= prompt("Donner la premiere note:");
var coef1= prompt("Donner la coef de note");
var note2= prompt("Donner la deuxieme note:" );
var coef2= prompt("Donner la coef de note:");
var note3= prompt("Donner la troisiéme note");
var coef3= prompt("Donner la coef de la note:" );

var somme = Number(note1)+Number(note2)+Number(note3);
var somme_coef = coef1 + coef2 + coef3; 

document.write ("Voici la somme: "+ somme +"<br>");
var moyenne= somme/somme_coef;

document.write("voici la moyenne: "+moyenne +"<br>"); 

if (moyenne<10)
document.write("Vous etes redoublant");
else
document.write("Vous etes admis");
}


function test_age()
{
    var age= prompt("Donnez votre age");
    if (age<18)
    {
        document.write("Vous etes mineur")
        document.body.style.background="red";
    }
    else
    {
    document.write("vous etes majeur");
    document.body.style.background="green";
    }

}
function simple_affichage()
{
    var nom= prompt("Donner votre nom");
    var prenom= prompt("Donner votre prenom");

    document.write("<div style='margin:auto; width; border:2px solid blue; '>");
    document.write("Bonjour "+prenom+" " +nom);
    document.write("</div>");
}

function test_couleur()

{ 

    var c = prompt("Donner une couleur");
    if(c == "rouge" || c == "ROUGE" || c=="R")
    document.body.style.background="red";
    else if (c == "bleu" || c == "BLEU")
    document.body.style.background = "bleu";
    else
    document.write("Couleur non comprise");


}

