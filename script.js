var rIndex,table = document.getElementById("table");

function checkEmptyInput()
{
    var isEmpty = false;
    titre =  document.getElementById("titre").value;
    auteur = document.getElementById("auteur").value;
    prix =   document.getElementById("prix").value;
    date =   document.getElementById("date").value;
    email =   document.getElementById("email").value;
    lang =   document.getElementById("lang").value;        
    typedouvrage = document.querySelector('input[name="typeO"]:checked').value;

   

    if(titre === ""){
        alert("'TITRE'  can not be empty");
        isEmpty = true;
    }
    else if(auteur === ""){
        alert("'AUTEUR'  can not be empty");
        isEmpty = true;
    }
    else if(prix === ""){
        alert("'PRIX'  can not be empty");
        isEmpty = true;
    }
    else if(date === ""){
        alert("'DATE'  can not be empty");
        isEmpty = true;
    }
    else if(email === ""){
        alert("EMAIL  can not be empty");
        isEmpty = true;
    }
    else if(lang === ""){
        alert("'LANGUE'  can not be empty");
        isEmpty = true;
    }
    else if(typedouvrage === ""){
        alert("'TYPE'  can not be empty");
        isEmpty = true;
    }
    return isEmpty;
    
}

    function sortTable() {
        var table, i, x, y;
        table = document.getElementById("table");
        var switching = true;

        
        while (switching) {
            switching = false;
            var rows = table.rows;

           
            for (i = 1; i < (rows.length - 1); i++) {
                var Switch = false;

                
                x = rows[i].getElementsByTagName("td")[0];
                y = rows[i + 1].getElementsByTagName("td")[0];

               
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
                    {

                
                    Switch = true;
                    break;
                }
            }
            if (Switch) {
               
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }
      
  

    function prixCheck() {

    var Price = new RegExp(/^\d+(,\d{1,2})?$/);
    var prix = document.getElementById("prix").value;
    var valid = Price.test(prix);

    if (valid == true)
    {
    console.log("The Price is Valid")
    }

    else {
    alert("The Price is not Valid")

    }

    }

        function dateCheck() {

        var datee = new RegExp(/(?:((0\d|[12]\d|3[01])|(0\d|1[012]))[\-|\\|\/]((0\d|1[012])|(0\d|[12]\d|3[01]))[\-|\\|\/](((19|20)\d{2})|\d\d))/);
        var checkDate = document.getElementById("date").value;
        var validDate = datee.test(checkDate)

        if (validDate==true)
        {
        console.log("The Date is valid")
        }

        else {
        alert("The Date is Not Valid");

        }

        }

            function emailCheck() {

            email =  document.getElementById("email").value;

            let emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            let checkEmail = document.getElementById("email").value;
            let validate = emailRegex.test(checkEmail);

            if(validate == true) {
            console.log("Email is valid")

            } else {
            alert("Email is not valid")    
            }

            }
        

    function localstorage(){
        
            titre.value,
            auteur.value,
            prix.value,
            date.value,
            email.value,
            lang.value,        
            typedouvrage.value,
        
        
        
        localStorage.setItem("titre",document.getElementById("titre").value);
        localStorage.setItem("auteur",document.getElementById("auteur").value);
        localStorage.setItem("titre",document.getElementById("prix").value);
        localStorage.setItem("date",document.getElementById("date").value);
        localStorage.setItem("email",document.getElementById("email").value);
        localStorage.setItem("lang",document.getElementById("lang").value);
        localStorage.setItem("typedouvrage",document.querySelector('input[name="typeO"]:checked').value);
    
    
};

   

     function Print(){
    var btn = document.getElementById("print");
    btn.addEventListener("click", Print);
        window.print(), id="noprint"

    }
    
            
        
   

function AddTableRow(){
   
    if(!checkEmptyInput()){
   var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    titre =  document.getElementById("titre").value;
    auteur = document.getElementById("auteur").value;
    prix =   document.getElementById("prix").value;
    date =   document.getElementById("date").value;
    email =   document.getElementById("email").value;
    lang =   document.getElementById("lang").value;        
    typedouvrage = document.querySelector('input[name="typeO"]:checked').value;

    cell1.innerHTML= titre;
    cell2.innerHTML= auteur;
    cell3.innerHTML= prix;
    cell4.innerHTML= date;
    cell5.innerHTML= email;
    cell6.innerHTML= lang;
    cell7.innerHTML= typedouvrage;


    showAlert(Ouvrage);
    prixCheck();
    dateCheck();
    emailCheck();
    localstorage();
    }

    
    
    
    
    
    
    
    
}                      //fin de fonction add

   
   
        



function showAlert(Ouvrage) {
let OuvrageOne = new Ouvrage();
alert(OuvrageOne.detailOuvrage()); 

                            }

class Ouvrage {

    constructor() {
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
        this.date = date;
        this.email = email;
        this.lang = lang;
        this.typedouvrage = typedouvrage;
                }

    detailOuvrage() {
        
    return        `L ouvrage ${this.titre} est un ${this.typedouvrage}; en langue ${this.lang},
    écrit par ${this.auteur} et publié le ${this.date}; Le prix de ${this.titre} est de ${this.prix} Dhs.`
                    }
                    

            }   
    
 

SelectRowtoInput();   





function SelectRowtoInput()
{

    for ( var i=0; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            rIndex= this.rowIndex;
            
            document.getElementById("titre").value=this.cells[0].innerHTML;
            document.getElementById("auteur").value=this.cells[1].innerHTML;
            document.getElementById("prix").value=this.cells[2].innerHTML;
            document.getElementById("date").value=this.cells[3].innerHTML;
            document.getElementById("email").value=this.cells[4].innerHTML;
            document.getElementById("lang").value=this.cells[5].innerHTML;
            document.querySelector('input[name="typeO"]:checked').value=this.cells[6].innerHTML;
        }
    }

}
SelectRowtoInput();

function EditTableSelectedRow(){

    var titre = document.getElementById("titre").value;
    var auteur= document.getElementById("auteur").value;
    var prix = document.getElementById("prix").value;
    var date= document.getElementById("date").value;
    var email= document.getElementById("email").value;
    var lang =document.getElementById("lang").value;
    var typedouvrage =document.querySelector('input[name="typeO"]:checked').value;


    if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML=titre;
table.rows[rIndex].cells[1].innerHTML=auteur;
table.rows[rIndex].cells[2].innerHTML=prix;
table.rows[rIndex].cells[3].innerHTML=date;
table.rows[rIndex].cells[4].innerHTML=email;
table.rows[rIndex].cells[5].innerHTML=lang;
table.rows[rIndex].cells[6].innerHTML=typedouvrage;
}

}

function DelTableSelectdRow()
{
    table.deleteRow(rIndex);
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("date").value = "";
    document.getElementById("lang").value = "";
    document.querySelector('input[name="typeO"]:checked').value = "";
}
