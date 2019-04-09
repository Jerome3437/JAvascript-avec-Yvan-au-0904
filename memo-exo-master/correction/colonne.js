class Colonne {
    constructor(titre) {
        //propriétés de la colonne
        this.titre = titre; //ça c'est le paramètre de ma colonne
        //Création du bouton Add
        this.elementButton = this.createButtonAdd();
        //Creation de la colonne
        this.drawColonne();
        //console.log("elementButton : ", this.elementButton);
    }
    createButtonAdd() {
        console.log("dans createButtonAdd");
        let buttonAdd = document.createElement("button");
        //AJout du texte dans l'élément buttonAdd
        buttonAdd.textContent = "Ajouter une carte";
        return buttonAdd; //Elément super important car pas de paramètres 
        //dans la fonction this.elementButton() il n'y a rien dans les parenthèses !

    }
    drawColonne() {
        console.log("dans drawColonne");

        //Création de la section "colonne"
        const sectionColonne = document.createElement("section");
        //Ajout de la classe "colonne" à la section 
        sectionColonne.setAttribute("class", "colonne");//ICI CEST DU HTML GENERE 
        //PAR LE JAVASCRIPT/VOIR LA SOURCE DU CODE

        //création d'un titre de niveau 2
        const titre = document.createElement("h2");
        titre.textContent = this.titre;
        sectionColonne.appendChild(titre);

        //ajout du bouton "buttonAdd" dans la colonne
        sectionColonne.appendChild(this.elementButton);

        //ajout de la section colonne dans la section "tableau"
        const tableau = document.getElementById("tableau");
        tableau.appendChild(sectionColonne);
    }
    addCarte(){
        const carte = new carte("question","réponse");
        const carte = new carte("question", "réponse");
        
    }
}