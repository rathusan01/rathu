function affichage_tableau(){
    document.write("<table border=2 width=30%;>");
    for (i=0; i <=5; i++) 
{
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>") 
}
document.write("</table>");
}




function affichage_tableau2()
{
    var ligne=prompt("Donner le nombre de ligne à afficher");
    document.write("<table border=2; width=30%;>");
        for(i=1; i <=ligne; i++)

    {
    document.write("<tr><td"+i+"</td><td>*</td><td>*</td><td>")
    }
    document.write("</table")
}

function connexion()
{
    var id =prompt("DONNEZ VOTRE NOM D'UTILISATEUR");
    var mdp =prompt("ENTREZ VOTRE MOT DE PASSE");
    if (id=="admin" && mdp=="admin") 
{
    document.write("BIENVENUE:  " + id);
}
{
    alert("Accès refusé");
}

}


function connexion2(){
    var i= 0;

    do{
        var id = prompt("DONNEZ VOTRE NOM D'UTILISATEUR");
        var mdp = prompt("ENTREZ VOTRE MOT DE PASS");

        if(id == "admin"&& mdp=="admin")
        {
            document.write("BIENVENUE:   "+ id);
            break;
        }

        else

        alert("Accés refuser");

        i+=1; 
    } while (i<3);
    if(i==3)
    alert("délais dépassé");
    }

function chaine_caractere()
{
    var chaine=prompt("DONNEZ UN MOT")
    document.write(chaine.touppercase()+"<br");
    document.write(chaine.tolowercase()+"<br>");
    document.write("la chaine contient  "+chaine.lengh+"caractére " +"<br>"); 
    document.write("la premiere lettre est   "+chaine.substr(0,1)+"<br>");

}


function fun_switch()
{
    var color= prompt("ENTREZ UNE COULEUR");

    switch(color)
    {
        case "vert": document.body.style.background = "green";;
        break;
        case "VERT": document.body.style.background = "green";;
        break;
        case "bleu": document.body.style.background = "blue";;
        break;
        case "BLEU": document.body.style.background = "blue";;
        break;
            default:alert("COULEUR NON DEFINIE");
    }



}


function facture(){
var article
var price
var quantity
var res
var total=0;

do{
    article = prompt("votre article");
    price= prompt  ("le prix"); 
    quantity = prompt("quantité");

    res = Number(price)*Number(quantity)
    total= total + res;

    alert("votre facture :  " + total);

    next = prompt("voulez vous continuer (oui/stop)?")

}
while(next!="STOP")
}


