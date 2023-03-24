//fetch json array (ver1)
/*     fetch('./dummy.json')
    .then((response) => response.json())
    .then((json) => console.log(json)); */



/* //get json data (ver2)
    import data from './dummy.json'assert { type: 'json' };
//const array as ref from json
const SaabCaught = data;
let SaabCaughtAlt = SaabCaught;
//full display:
console.log(SaabCaught);
//full display:
console.log("# in Collection = ", SaabCaught.length - 1);  */


import SaabCaught from "./jsonTrans.js";

//testing out loop
for (let i = 0; i<SaabCaught.length - 1; i++){
console.log( SaabCaught[i + 1])

}
// locate the list container
let list = document.querySelector("#list-here")

/* //Sort the MY json array
function SortByMY() {
    SaabCaughtAlt.sort(function(a, b){return a - b});
    console.log(SaabCaughtAlt);
 } */
            /* 
            // testing adding div out 
            function text(SaabCaught){

            const wrapDiv = document.createElement("div"); //create the photo-content unit
            wrapDiv.classList.add("photocontent"); //add the assigned style in css (big wrapper)

            const unitImgDiv = document.createElement('img'); // add data img into wrapper unit
            unitImgDiv.classList.add("photolinked");
            unitImgDiv.src = SaabCaught.ImgsPathThumb; 

            wrapDiv.appendChild(unitImgDiv); // add generated img and text into the unit wrapper

            
            // add generated unit into the list container
            document.querySelector('.list-container').appendChild(wrapDiv); 
            }

            SaabCaught.forEach(test); */

        function makeUnit(SaabCaught){
            const unitIndiviId = SaabCaught.idClass;

            const unitBlock = document.createElement("div"); // create icon for each obj & add class
            unitBlock.classList.add("photocontent");

            const unitImgDiv = document.createElement('img'); // add data img into wrapper unit
            unitImgDiv.classList.add("photolinked");
            unitImgDiv.src = SaabCaught.ImgsPathThumb;  //MARK to change into thumb link version
            
            unitImgDiv.setAttribute("alt", "Loading..."); // text show then file's too big

            unitBlock.appendChild(unitImgDiv); // add generated img and text into the unit wrapper
            //assign individual id to each generated div (for button )
            unitBlock.setAttribute("id", unitIndiviId) //id for button event reference
            
            document.querySelector('.list-container').appendChild(unitBlock);  //send wrapped into list
        }
        SaabCaught.forEach(makeUnit);

function makeUnitWindow(SaabCaught){
    const displayIndiviId = SaabCaught.idClassBtn;

    const displayUnitContent = document.createElement("div"); //create components ::ref to mock's
    
    const displayUnitImgDiv = document.createElement("div");
    const displayUnitImg = document.createElement("img");
    const displayUnitText = document.createElement("div");

    displayUnitContent.classList.add("display-unit-inner"); // add class name :: ref to mock's
    
    displayUnitImgDiv.classList.add("dispaly-img");
    displayUnitImg.classList.add("img-large-linked");
    displayUnitText.classList.add("display-text");

    displayUnitImgDiv.appendChild(displayUnitImg); // wrap img links in container
     
    displayUnitContent.appendChild(displayUnitImgDiv);//wrap multiple sect into unit
    displayUnitContent.appendChild(displayUnitText);

    displayUnitContent.setAttribute("id", displayIndiviId)

    document.querySelector('.display-unit').appendChild(displayUnitContent); // add the unit into veil list

}
SaabCaught.forEach(makeUnitWindow);


// toggle detail window = indivi id for toggle
            const unitBtn = document.getElementById("protoid"); //demo assign
    //icon box as btn
            const unitBtn1 =document.getElementById("Id1")
            const unitBtn2 =document.getElementById("Id2")
            const unitBtn3 =document.getElementById("Id3")
            const unitBtn4 =document.getElementById("Id4")
            const unitBtn5 =document.getElementById("Id5")
            const unitBtn6 =document.getElementById("Id6")
            const unitBtn7 =document.getElementById("Id7")
            const unitBtn8 =document.getElementById("Id8")
            const unitBtn9 =document.getElementById("Id9")
            const unitBtn10 =document.getElementById("Id10")

            const unitBtn11 =document.getElementById("Id11")
            const unitBtn12 =document.getElementById("Id12")
            const unitBtn13 =document.getElementById("Id13")
            const unitBtn14 =document.getElementById("Id14")
            const unitBtn15 =document.getElementById("Id15")
            const unitBtn16 =document.getElementById("Id16")
            const unitBtn17 =document.getElementById("Id17")
            const unitBtn18 =document.getElementById("Id18")
            const unitBtn19 =document.getElementById("Id19")
            const unitBtn20 =document.getElementById("Id20")
            
            const unitBtn21 =document.getElementById("Id21")
            const unitBtn22 =document.getElementById("Id22")
            const unitBtn23 =document.getElementById("Id23")
            const unitBtn24 =document.getElementById("Id24")
            const unitBtn25 =document.getElementById("Id25")
            const unitBtn26 =document.getElementById("Id26")
            const unitBtn27 =document.getElementById("Id27")
            const unitBtn28 =document.getElementById("Id28")
            const unitBtn29 =document.getElementById("Id29")
            const unitBtn30 =document.getElementById("Id30")
            
            const unitBtn31 =document.getElementById("IdB31")
            const unitBtn32 =document.getElementById("IdB32")
            const unitBtn33 =document.getElementById("Id33")
            const unitBtn34 =document.getElementById("Id34")
            const unitBtn35 =document.getElementById("Id35")
            const unitBtn36 =document.getElementById("Id36")
            const unitBtn37 =document.getElementById("Id37")
            const unitBtn38 =document.getElementById("Id38")
            const unitBtn39 =document.getElementById("Id39")
            const unitBtn40 =document.getElementById("Id40")

            const unitBtnC =document.getElementById("IdBproto") // proto testing

            const unitBtn1C =document.getElementById("IdB1")
            const unitBtn2C =document.getElementById("IdB2")
            const unitBtn3C =document.getElementById("IdB3")
            const unitBtn4C =document.getElementById("IdB4")
            const unitBtn5C =document.getElementById("IdB5")
            const unitBtn6C =document.getElementById("IdB6")
            const unitBtn7C =document.getElementById("IdB7")
            const unitBtn8C =document.getElementById("IdB8")
            const unitBtn9C =document.getElementById("IdB9")
            const unitBtn10C =document.getElementById("IdB10")

            const unitBtn11C =document.getElementById("IdB11")
            const unitBtn12C =document.getElementById("IdB12")
            const unitBtn13C =document.getElementById("IdB13")
            const unitBtn14C =document.getElementById("IdB14")
            const unitBtn15C =document.getElementById("IdB15")
            const unitBtn16C =document.getElementById("IdB16")
            const unitBtn17C =document.getElementById("IdB17")
            const unitBtn18C =document.getElementById("IdB18")
            const unitBtn19C =document.getElementById("IdB19")
            const unitBtn20C =document.getElementById("IdB20")
            
            const unitBtn21C =document.getElementById("IdB21")
            const unitBtn22C =document.getElementById("IdB22")
            const unitBtn23C =document.getElementById("IdB23")
            const unitBtn24C =document.getElementById("IdB24")
            const unitBtn25C =document.getElementById("IdB25")
            const unitBtn26C =document.getElementById("IdB26")
            const unitBtn27C =document.getElementById("IdB27")
            const unitBtn28C =document.getElementById("IdB28")
            const unitBtn29C =document.getElementById("IdB29")
            const unitBtn30C =document.getElementById("IdB30")
            
            const unitBtn31C =document.getElementById("IdB31")
            const unitBtn32C =document.getElementById("IdB32")
            const unitBtn33C =document.getElementById("IdB33")
            const unitBtn34C =document.getElementById("IdB34")
            const unitBtn35C =document.getElementById("IdB35")
            const unitBtn36C =document.getElementById("IdB36")
            const unitBtn37C =document.getElementById("IdB37")
            const unitBtn38C =document.getElementById("IdB38")
            const unitBtn39C =document.getElementById("IdB39")
            const unitBtn40C =document.getElementById("IdB40")

            const displayVeil = document.querySelector('.display-veil');
            
            
            
            
            unitBtn.addEventListener('click', () => {
                displayVeil.classList.toggle('open');
                unitBtnC.classList.toggle('open'); });

         
          

            displayVeil.addEventListener('click', () => {
                                
                displayVeil.classList.toggle('open'); 
                /* remove class didn't work */ /* MARK!!! */ /* solved? */
                document.querySelector('.open').classList.toggle('open');
                      
            });
                                            



//set loop  function of Time: generate div base on template
function generateDivTime(){

}

//set loop function of MY : generate div base on template ()
function generateDivMY(){


}

//button sort func [by time, and by MY]
//event listenr on option sort div (time)

        // delete the old divs
        //and regenerate the divs

//event listenr on option sort div (MY)

        // delete the old divs
        //and regenerate the divs
