

const url = 'https://data.cityofnewyork.us/resource/6yyb-pb25.json';

const numberInput = document.querySelector('#lengthInput');
const refreshBtn = document.querySelector('#refresh');
let arrayLength = 1000;

let saveValue = 0 ;
/* load();

if(localStorage.getItem("saveValue") === null){
	arrayLength = 1000;
	numberInput.value = arrayLength;
	save();
	console.log("paveL saved:" + saveValue);
}else{
	load;
	console.log ("paveL data finded. paveL =" + saveValue);
}


numberInput.setAttribute('placeholder', arrayLength);

// S/L MARK
numberInput.oninput = () => {

	arrayLength = numberInput.value;
	console.log(arrayLength);
	save();
	return arrayLength;
	
}
console.log("updated" + arrayLength);
function getNewOffset(){

	
	console.log( "arrayLength updated : " + arrayLength);
	save();
	location.reload();
}

function load(){
	saveValue = localStorage.getItem ("saveValue");
	arrayLength = saveValue;
	numberInput.value = saveValue;
	
}
function save(){
	saveValue = numberInput.value;
	localStorage.setItem("saveValue", saveValue)
} */

refreshBtn.addEventListener('click', () => getNewOffset());







//set async?

async function OverAll() {

	await rateProcess(fullData);
	console.log(fullData.length);
	await loadAniSwitch();
	/* await loadAniSwitch(); */
  }
  


//get full array length; (approx 135K-)
let arrayMax = 133397; //array size : temp local (later switch to fetch)
let paveLength = arrayLength;
let randomTemp = 0

offsetRandom(arrayMax);
console.log("offset seed:  " + randomTemp);

// random proto:
function offsetRandom(arrayMax) {
	randomTemp = Math.floor(Math.random() * arrayMax);
	console.log ("Offset generated:" + randomTemp);

	if(randomTemp + paveLength > arrayMax){
		let ranMinus = 	Math.floor(Math.random()* 100) * Math.floor(Math.random()* 100)
		//x^2
		console.log ("safe-count-activated:" + ranMinus);
		randomTemp = randomTemp - ranMinus - paveLength;
		return randomTemp;
	}

	return randomTemp;
}







//declare global var
let Rgood = 0
let Rfair = 0
let Rpoor = 0
let Runknown = 0

let goodPie = 0
let fairPie = 0
let poorPie = 0

//block gene loc set 
const geneBlock = document.querySelector('#geneBContainer');

const rateProcess = (fullData)=>{ //process full data first
	/* let Rgood = 0
	let Rfair = 0
	let Rpoor = 0
	let Runknown = 0 */
	
			console.log('running... The total count');
//sect genefirst, then count 
fullData.forEach( streetRate =>{
	//set the gene location



	const geneUnitB = document.createElement("div");

		if (streetRate.ratinglaye == 'GOOD' ) {
			geneUnitB.classList.add("blockBase");
			geneUnitB.classList.add("blockGood");
			geneBlock.appendChild(geneUnitB);
		}
		else if (streetRate.ratinglaye == 'FAIR' ) {
			geneUnitB.classList.add("blockBase");
			geneUnitB.classList.add("blockFair");
			geneBlock.appendChild(geneUnitB);
			
		}
		else if (streetRate.ratinglaye == 'POOR' ) {
			geneUnitB.classList.add("blockBase");
			geneUnitB.classList.add("blockPoor");
			geneBlock.appendChild(geneUnitB);
			
		}
		else {
			geneUnitB.classList.add("blockBase");
			geneBlock.appendChild(geneUnitB);
		}
	console.log("gene done!")
	})



// run and divide through array
	fullData.forEach( streetRate =>{
		if (streetRate.ratinglaye == 'GOOD' ) Rgood++
		else if (streetRate.ratinglaye == 'FAIR' ) Rfair++
		else if (streetRate.ratinglaye == 'POOR' ) Rpoor++
		else Runknown++
	
	})

	console.log( 'Good:' + Rgood)
	console.log( 'Fair:' + Rfair)
	console.log( 'Poor:' + Rpoor)
	console.log( '?state:' + Runknown)

	goodPie = (100 * Rgood ) / paveLength;
	console.log ("Good % :" + goodPie + "%");

	fairPie = (100 * Rfair ) / paveLength;
	console.log ("Fair % :" + fairPie + "%");

	poorPie = (100 * Rpoor ) / paveLength;
	console.log ("Poor % :" + poorPie + "%")


	//const the id for data insert
	const goodNumber = document.getElementById("displayW");
	const fairNumber = document.getElementById("displayF");
	const poorNumber = document.getElementById("displayFh");

	goodNumber.innerHTML = goodPie + "%";
	fairNumber.innerHTML = fairPie + "%";
	poorNumber.innerHTML = poorPie + "%";

	const displayP = document.getElementById("paveLong");
	const displayA = document.getElementById("arrayLong");
	const displayOffDis = document.getElementById("offsetDisplay");

	displayP.innerHTML = paveLength;
	displayA.innerHTML = arrayMax;
	displayOffDis.innerHTML = "　offset seed:" + randomTemp;
			
}

function loadAniSwitch(){
	const loader = document.querySelector(".lds-ellipsis");
	loader.classList.toggle("open");
}

//copy the value to filter vars
/* let FRgood = Rgood
let FRfair = Rfair
let FRpoor = Rpoor
let FRunknown = Runknown
 */


// gene mouseover title.properties (colorblocks)

/* loc, loc-start, loc-end, rate#, rate word, time of record */

/* function blockGenerate(fullData){ //MARK
		//create div
		const blockGene = document.createElement("div");
		//get rate property (good fair poor)
		const getRate = fullData.ratinglaye;
	
		const addGood = classList.add("good");
		const addFair = classList.add("fair");
		const addPoor = classList.add("poor");
		
		// set the hover.text
		const hoverTextO = fullData.onstreetna;
		const hoverTextF = fullData.fromstreet;
		const hoverTextT = fullData.tostreetna;

		const hoverText = "This segments is on" + hoverTextO + "from" + hoverTextF +  "to" + hoverTextT ;

		const hoverContent = setAttribute("title", hoverText);

		//if else insert class type
		

}  */

function iframeWidthFix(){
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

	const ifrUrlFL = 'https://data.cityofnewyork.us/dataset/Street-Pavement-Rating-Map/h933-akrx/embed?width=' + vw + '&height=' + (0.6* vh);

	document.getElementById('externelle-iframe').src = ifrUrlFL;
	
	console.log ("vw:" + vw);

}
iframeWidthFix();

// set map collapse

/* function togDatMap(){
const datMap = document.getElementById("datMap");
const everythingElse = document.getElementById("chartAndStuff");

datMap.classList.toggle("open");
everythingElse.classList.toggle("open");

}

const openCloseBtn = document.getElementById("mapBtn");

openCloseBtn.addEventListener('click', () => togDatMap()); */




//where fetch goes

//MARk: after func design
// 4-26-21:24 refresh new segment working


/* fetch("./assets/pave1000.json") */ // temp smol file (instant)
/* fetch("./assets/pave15000.json")  */ // local file 2 sec?local
/* fetch("./assets/pave35000.json") */  // local file (esti 5+min)
/* fetch("./assets/pave.json") */  // local full file  (forever)


fetch(url + '?$limit=' + arrayLength + '&$offset=' + randomTemp) 

.then(response => response.json())
.then(data => {
	fullData = data;
	OverAll();
	
})