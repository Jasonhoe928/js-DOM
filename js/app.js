/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/
var changeTay = document.getElementById("name1");
changeTay.innerHTML = "Tay-Tay";


/*2. Replace the n/a with the following: 

Project Manager*/
var changeDJ = document.getElementById("position2");
changeDJ.innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/
var changePiko = document.getElementById("alias3");
changePiko.innerHTML = "Concatenation";

/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/
var changeSnoop = document.getElementsByClassName("profile")[0];
changeSnoop.innerHTML = "gangsta lorem ipsum";


/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/
var changeSammy = document.getElementsByClassName("profile")[2];
changeSammy.innerHTML = "Lorem ipsum";


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/
var newChuck = document.createElement("div");
newChuck.id = "name7";
newChuck.innerHTML = "Chuck Norris";
main.appendChild(newChuck);
 

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/
var newGrimmace = document.createElement("div");
newGrimmace.id = "alias8";
newGrimmace.innerHTML = "The Purple Monster.";
main.appendChild(newGrimmace);



//Final Boss
/*8. Create your own profile.*/