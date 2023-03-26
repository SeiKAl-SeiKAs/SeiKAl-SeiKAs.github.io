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


//sorting
function sortMY (a, b){
    return a.MY - b.MY;}

const SaabCaught2 = Array.from(SaabCaught);
const sortMYed = SaabCaught2.sort(sortMY);

/* console.log(SaabCaught2); */
console.log(sortMYed);



//display indivi obj in time order
/* for (let i = 0; i<SaabCaught.length - 1; i++){
console.log( SaabCaught[i + 1])
} */

    function makeUnit(SaabCaught){
        const unitIndiviId = SaabCaught.idClass;

        const unitBlock = document.createElement("div"); // create icon for each obj & add class
        unitBlock.classList.add("photocontent");
        unitBlock.classList.add("photocontentA");

        const unitImgDiv = document.createElement('img'); // add data img into wrapper unit
        unitImgDiv.classList.add("photolinked");
        unitImgDiv.src = SaabCaught.ImgsPathThumb;  //MARK to change into thumb link version
        
        unitImgDiv.setAttribute("alt", "Loading..."); // text show then file's too big

        unitBlock.appendChild(unitImgDiv); // add generated img and text into the unit wrapper
        //assign individual id to each generated div (for button )
        unitBlock.setAttribute("id", unitIndiviId) //id for button event reference
        
        document.querySelector('.list-container').appendChild(unitBlock);  //send wrapped into list
    
    }
        function makeUnitMY(sortMYed){
            const unitIndiviId = sortMYed.idClassB;

            const unitBlock = document.createElement("div"); // create icon for each obj & add class
            unitBlock.classList.add("photocontent");
            unitBlock.classList.add("photocontentB");
            unitBlock.classList.add("list-close");
        
            const unitImgDiv = document.createElement('img'); // add data img into wrapper unit
            unitImgDiv.classList.add("photolinked");
            unitImgDiv.src = sortMYed.ImgsPathThumb;  //MARK to change into thumb link version
            
            unitImgDiv.setAttribute("alt", "Loading..."); // text show then file's too big
        
            unitBlock.appendChild(unitImgDiv); // add generated img and text into the unit wrapper
            //assign individual id to each generated div (for button )
            unitBlock.setAttribute("id", unitIndiviId) //id for button event reference
            
            document.querySelector('.list-container').appendChild(unitBlock);  //send wrapped into list          
        }
        /* sortMYed.forEach(makeUnitMY); */ //option testing


function makeUnitWindow(SaabCaught){
    const displayIndiviId = SaabCaught.idClassBtn;

    const displayUnitContent = document.createElement("div"); //create components ::ref to mock's
    
    const displayUnitImgDiv = document.createElement("div");
    const displayUnitImg = document.createElement("img");

    const displayUnitText = document.createElement("div");

/*  list out Camera time, model,modelVar  MY  */
    /* const cameratime = SaabCaught.TimeSlot; */
    const displayTextTemplate = 
                `
                <p>Photo captured in ${SaabCaught.TimeSlot} </p>
                <p>Vehicle model : ${SaabCaught.Model} , ${SaabCaught.ModelVar} </p>
                <p>MY (approx.) : ${SaabCaught.MY} </p>
                `
    displayUnitContent.classList.add("display-unit-inner"); // add class name :: ref to mock's
    
    displayUnitImgDiv.classList.add("dispaly-img");
    displayUnitImg.classList.add("img-large-linked");
    displayUnitImg.src = SaabCaught.ImgsPath;
    displayUnitText.classList.add("display-text");

    displayUnitImgDiv.appendChild(displayUnitImg); // wrap img links in container
    displayUnitText.insertAdjacentHTML('beforeend', displayTextTemplate);

    displayUnitContent.appendChild(displayUnitImgDiv);//wrap multiple sect into unit
    displayUnitContent.appendChild(displayUnitText);

    displayUnitContent.setAttribute("id", displayIndiviId)

    document.querySelector('.display-unit').appendChild(displayUnitContent); // add the unit into veil list

}
/* add content (first look) */
SaabCaught.forEach(makeUnit);

sortMYed.forEach(makeUnitMY);

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

        const unitBtnB1 =document.getElementById("BId1")
const unitBtnB2 =document.getElementById("BId2")
const unitBtnB3 =document.getElementById("BId3")
const unitBtnB4 =document.getElementById("BId4")
const unitBtnB5 =document.getElementById("BId5")
const unitBtnB6 =document.getElementById("BId6")
const unitBtnB7 =document.getElementById("BId7")
const unitBtnB8 =document.getElementById("BId8")
const unitBtnB9 =document.getElementById("BId9")
const unitBtnB10 =document.getElementById("BId10")

const unitBtnB11 =document.getElementById("BId11")
const unitBtnB12 =document.getElementById("BId12")
const unitBtnB13 =document.getElementById("BId13")
const unitBtnB14 =document.getElementById("BId14")
const unitBtnB15 =document.getElementById("BId15")
const unitBtnB16 =document.getElementById("BId16")
const unitBtnB17 =document.getElementById("BId17")
const unitBtnB18 =document.getElementById("BId18")
const unitBtnB19 =document.getElementById("BId19")
const unitBtnB20 =document.getElementById("BId20")

const unitBtnB21 =document.getElementById("BId21")
const unitBtnB22 =document.getElementById("BId22")
const unitBtnB23 =document.getElementById("BId23")
const unitBtnB24 =document.getElementById("BId24")
const unitBtnB25 =document.getElementById("BId25")
const unitBtnB26 =document.getElementById("BId26")
const unitBtnB27 =document.getElementById("BId27")
const unitBtnB28 =document.getElementById("BId28")
const unitBtnB29 =document.getElementById("BId29")
const unitBtnB30 =document.getElementById("BId30")

const unitBtnB31 =document.getElementById("BIdB31")
const unitBtnB32 =document.getElementById("BIdB32")
const unitBtnB33 =document.getElementById("BId33")
const unitBtnB34 =document.getElementById("BId34")
const unitBtnB35 =document.getElementById("BId35")
const unitBtnB36 =document.getElementById("BId36")
const unitBtnB37 =document.getElementById("BId37")
const unitBtnB38 =document.getElementById("BId38")
const unitBtnB39 =document.getElementById("BId39")
const unitBtnB40 =document.getElementById("BId40")

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
        
        
        


            
unitBtn.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtnC.classList.toggle('open'); });



unitBtn1.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn1C.classList.toggle('open'); });
unitBtn2.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn2C.classList.toggle('open'); });
unitBtn3.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn3C.classList.toggle('open'); });
unitBtn4.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn4C.classList.toggle('open'); });
unitBtn5.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn5C.classList.toggle('open'); });

unitBtn6.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn6C.classList.toggle('open'); });
unitBtn7.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn7C.classList.toggle('open'); });
unitBtn8.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn8C.classList.toggle('open'); });
unitBtn9.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn9C.classList.toggle('open'); });
unitBtn10.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn10C.classList.toggle('open'); });

unitBtn11.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn11C.classList.toggle('open'); });
unitBtn12.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn12C.classList.toggle('open'); });
unitBtn13.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn13C.classList.toggle('open'); });
unitBtn14.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn14C.classList.toggle('open'); });
unitBtn15.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn15C.classList.toggle('open'); });

unitBtn16.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn16C.classList.toggle('open'); });
unitBtn17.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn17C.classList.toggle('open'); });
unitBtn18.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn18C.classList.toggle('open'); });
unitBtn19.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn19C.classList.toggle('open'); });
unitBtn20.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn20C.classList.toggle('open'); });

unitBtn21.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn21C.classList.toggle('open'); });
unitBtn22.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn22C.classList.toggle('open'); });
unitBtn23.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn23C.classList.toggle('open'); });
unitBtn24.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn24C.classList.toggle('open'); });
unitBtn25.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn25C.classList.toggle('open'); });

unitBtn26.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn26C.classList.toggle('open'); });
unitBtn27.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn27C.classList.toggle('open'); });
unitBtn28.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn28C.classList.toggle('open'); });
unitBtn29.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn29C.classList.toggle('open'); });
unitBtn30.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn30C.classList.toggle('open'); });

unitBtn31.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn31C.classList.toggle('open'); });
unitBtn32.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn32C.classList.toggle('open'); });
unitBtn33.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn33C.classList.toggle('open'); });
unitBtn34.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn34C.classList.toggle('open'); });
unitBtn35.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn35C.classList.toggle('open'); });

unitBtn36.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn36C.classList.toggle('open'); });
unitBtn37.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn37C.classList.toggle('open'); });
unitBtn38.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn38C.classList.toggle('open'); });
unitBtn39.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn39C.classList.toggle('open'); });
unitBtn40.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn40C.classList.toggle('open'); });

unitBtnB1.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn1C.classList.toggle('open'); });
unitBtnB2.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn2C.classList.toggle('open'); });
unitBtnB3.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn3C.classList.toggle('open'); });
unitBtnB4.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn4C.classList.toggle('open'); });
unitBtnB5.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn5C.classList.toggle('open'); });

unitBtnB6.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn6C.classList.toggle('open'); });
unitBtnB7.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn7C.classList.toggle('open'); });
unitBtnB8.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn8C.classList.toggle('open'); });
unitBtnB9.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn9C.classList.toggle('open'); });
unitBtnB10.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn10C.classList.toggle('open'); });

unitBtnB11.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn11C.classList.toggle('open'); });
unitBtnB12.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn12C.classList.toggle('open'); });
unitBtnB13.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn13C.classList.toggle('open'); });
unitBtnB14.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn14C.classList.toggle('open'); });
unitBtnB15.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn15C.classList.toggle('open'); });

unitBtnB16.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn16C.classList.toggle('open'); });
unitBtnB17.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn17C.classList.toggle('open'); });
unitBtnB18.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn18C.classList.toggle('open'); });
unitBtnB19.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn19C.classList.toggle('open'); });
unitBtnB20.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn20C.classList.toggle('open'); });

unitBtnB21.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn21C.classList.toggle('open'); });
unitBtnB22.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn22C.classList.toggle('open'); });
unitBtnB23.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn23C.classList.toggle('open'); });
unitBtnB24.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn24C.classList.toggle('open'); });
unitBtnB25.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn25C.classList.toggle('open'); });

unitBtnB26.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn26C.classList.toggle('open'); });
unitBtnB27.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn27C.classList.toggle('open'); });
unitBtnB28.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn28C.classList.toggle('open'); });
unitBtnB29.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn29C.classList.toggle('open'); });
unitBtnB30.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn30C.classList.toggle('open'); });

/* unitBtnB31.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn31C.classList.toggle('open'); }); */
/*  unitBtnB32.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn32C.classList.toggle('open'); }); */
unitBtnB33.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn33C.classList.toggle('open'); });
unitBtnB34.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn34C.classList.toggle('open'); });
unitBtnB35.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn35C.classList.toggle('open'); });

unitBtnB36.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn36C.classList.toggle('open'); });
unitBtnB37.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn37C.classList.toggle('open'); });
unitBtnB38.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn38C.classList.toggle('open'); });
unitBtnB39.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn39C.classList.toggle('open'); });
unitBtnB40.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn40C.classList.toggle('open'); });

function buttonLis(){

unitBtn1.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn1C.classList.toggle('open'); });
unitBtn2.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn2C.classList.toggle('open'); });
unitBtn3.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn3C.classList.toggle('open'); });
unitBtn4.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn4C.classList.toggle('open'); });
unitBtn5.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn5C.classList.toggle('open'); });

unitBtn6.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn6C.classList.toggle('open'); });
unitBtn7.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn7C.classList.toggle('open'); });
unitBtn8.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn8C.classList.toggle('open'); });
unitBtn9.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn9C.classList.toggle('open'); });
unitBtn10.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn10C.classList.toggle('open'); });

unitBtn11.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn11C.classList.toggle('open'); });
unitBtn12.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn12C.classList.toggle('open'); });
unitBtn13.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn13C.classList.toggle('open'); });
unitBtn14.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn14C.classList.toggle('open'); });
unitBtn15.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn15C.classList.toggle('open'); });

unitBtn16.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn16C.classList.toggle('open'); });
unitBtn17.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn17C.classList.toggle('open'); });
unitBtn18.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn18C.classList.toggle('open'); });
unitBtn19.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn19C.classList.toggle('open'); });
unitBtn20.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn20C.classList.toggle('open'); });

unitBtn21.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn21C.classList.toggle('open'); });
unitBtn22.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn22C.classList.toggle('open'); });
unitBtn23.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn23C.classList.toggle('open'); });
unitBtn24.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn24C.classList.toggle('open'); });
unitBtn25.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn25C.classList.toggle('open'); });

unitBtn26.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn26C.classList.toggle('open'); });
unitBtn27.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn27C.classList.toggle('open'); });
unitBtn28.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn28C.classList.toggle('open'); });
unitBtn29.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn29C.classList.toggle('open'); });
unitBtn30.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn30C.classList.toggle('open'); });

unitBtn31.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn31C.classList.toggle('open'); });
unitBtn32.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn32C.classList.toggle('open'); });
unitBtn33.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn33C.classList.toggle('open'); });
unitBtn34.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn34C.classList.toggle('open'); });
unitBtn35.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn35C.classList.toggle('open'); });

unitBtn36.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn36C.classList.toggle('open'); });
unitBtn37.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn37C.classList.toggle('open'); });
unitBtn38.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn38C.classList.toggle('open'); });
unitBtn39.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn39C.classList.toggle('open'); });
unitBtn40.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn40C.classList.toggle('open'); });

unitBtnB1.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn1C.classList.toggle('open'); });
unitBtnB2.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn2C.classList.toggle('open'); });
unitBtnB3.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn3C.classList.toggle('open'); });
unitBtnB4.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn4C.classList.toggle('open'); });
unitBtnB5.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn5C.classList.toggle('open'); });

unitBtnB6.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn6C.classList.toggle('open'); });
unitBtnB7.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn7C.classList.toggle('open'); });
unitBtnB8.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn8C.classList.toggle('open'); });
unitBtnB9.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn9C.classList.toggle('open'); });
unitBtnB10.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn10C.classList.toggle('open'); });

unitBtnB11.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn11C.classList.toggle('open'); });
unitBtnB12.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn12C.classList.toggle('open'); });
unitBtnB13.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn13C.classList.toggle('open'); });
unitBtnB14.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn14C.classList.toggle('open'); });
unitBtnB15.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn15C.classList.toggle('open'); });

unitBtnB16.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn16C.classList.toggle('open'); });
unitBtnB17.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn17C.classList.toggle('open'); });
unitBtnB18.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn18C.classList.toggle('open'); });
unitBtnB19.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn19C.classList.toggle('open'); });
unitBtnB20.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn20C.classList.toggle('open'); });

unitBtnB21.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn21C.classList.toggle('open'); });
unitBtnB22.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn22C.classList.toggle('open'); });
unitBtnB23.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn23C.classList.toggle('open'); });
unitBtnB24.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn24C.classList.toggle('open'); });
unitBtnB25.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn25C.classList.toggle('open'); });

unitBtnB26.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn26C.classList.toggle('open'); });
unitBtnB27.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn27C.classList.toggle('open'); });
unitBtnB28.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn28C.classList.toggle('open'); });
unitBtnB29.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn29C.classList.toggle('open'); });
unitBtnB30.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn30C.classList.toggle('open'); });

unitBtnB31.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn31C.classList.toggle('open'); });
unitBtnB32.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn32C.classList.toggle('open'); });
unitBtnB33.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn33C.classList.toggle('open'); });
unitBtnB34.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn34C.classList.toggle('open'); });
unitBtnB35.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn35C.classList.toggle('open'); });

unitBtnB36.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn36C.classList.toggle('open'); });
unitBtnB37.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn37C.classList.toggle('open'); });
unitBtnB38.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn38C.classList.toggle('open'); });
unitBtnB39.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn39C.classList.toggle('open'); });
unitBtnB40.addEventListener('click', () => {  displayVeil.classList.toggle('open');   unitBtn40C.classList.toggle('open'); });
}

     
      
        
        //closing the opened veil and content    
displayVeil.addEventListener('click', () => {
                    
    displayVeil.classList.toggle('open'); 
    /* remove class didn't work */ /* MARK!!! */ /* solved? */
    document.querySelector('.open').classList.toggle('open');
            
});

/* page content set */




//button sort func [by time, and by MY]

//event listenr on option sort div (time)
const btnTime =document.getElementById("btnTime")
btnTime.addEventListener('click', () => {
/* const list =document.querySelector('.list-container');  // delete the old divs
let deleting = list.querySelectorAll('div');
deleting.forEach(div => div.remove());
        
SaabCaught.forEach(makeUnit);//and regenerate the divs
buttonLis(); */

const list =document.querySelector('.list-container');
let toggleA = list.querySelectorAll('.photocontentA');
    toggleA.forEach(toggleA => toggleA.classList.toggle('list-close'));
let toggleB = list.querySelectorAll('.photocontentB');
    toggleB.forEach(toggleB =>toggleB.classList.toggle('list-close'));
    console.log("by MY?");   


console.log("by time");
});

//event listenr on option sort div (MY)
const btnMY =document.getElementById("btnMY")
btnMY.addEventListener('click', () => {
    /* const list =document.querySelector('.list-container');  // delete the old divs
    let deleting = list.querySelectorAll('div');
    deleting.forEach(div => div.remove());
            
    sortMYed.forEach(makeUnitMY);//and regenerate the divs
    buttonLis(); */
    const list =document.querySelector('.list-container');
let toggleA = list.querySelectorAll('.photocontentA');
    toggleA.forEach(toggleA => toggleA.classList.toggle('list-close'));
let toggleB = list.querySelectorAll('.photocontentB');
    toggleB.forEach(toggleB =>toggleB.classList.toggle('list-close'));
    console.log("by MY?");
    });
                                        



