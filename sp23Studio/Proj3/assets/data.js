

const url = 'https://data.cityofnewyork.us/resource/6yyb-pb25.json';

let arrayLength = 1000;

//esti change  array.length == 1000;

//MARk: after func design
/* fetch(url + '?$limit=15000') */ // limit current highest (5000= fast, 15000 = 5sec+)

fetch("./assets/pave1000.json") // temp smol file (instant)
/* fetch("./assets/pave15000.json")  */ // local file 2 sec?local
/* fetch("./assets/pave35000.json") */  // local file (esti 5+min)
/* fetch("./assets/pave.json") */  // local full file  (forever)

//set dataset length;

.then(response => response.json())
.then(data => {
	fullData = data;
	togClass;
	setTimeout(	rateProcess(fullData), 3000);
	console.log(fullData.length);
	setTimeout(togClass, 2000);
})

//set async?

//get full array length; (approx 135K-)
let arrayMax = 133553; //array size (local / api respose would be slow)
let paveLength = arrayLength;
let randomTemp = 0
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
offsetRandom(arrayMax);
console.log(randomTemp);


//declare global var
let Rgood = 0
let Rfair = 0
let Rpoor = 0
let Runknown = 0

let goodPie = 0
let fairPie = 0
let poorPie = 0

const rateProcess = (fullData)=>{ //process full data first
	/* let Rgood = 0
	let Rfair = 0
	let Rpoor = 0
	let Runknown = 0 */
	
			console.log('running... The total count');
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

	displayP.innerHTML = paveLength;
	displayA.innerHTML = arrayMax;

	
				
}

const togClass = function loadAniSwitch(){
	const loader = document.querySelector('.lds-ellipsis');
	loader.classList.toggle('open');
}

//copy the value to filter vars
let FRgood = Rgood
let FRfair = Rfair
let FRpoor = Rpoor
let FRunknown = Runknown



// gene mouseover title.properties (colorblocks)

/* loc, loc-start, loc-end, rate#, rate word, time of record */

function blockGenerate(fullData){ /* MARK */
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
		

} 
/* MARK -activate? */
/* fullData.forEach(blockGenerate); */

//filter idea : dateof date, (don't touch the rate, gacha related)


/* EVENT LIS    TO THE OPTION list (select active) */
/* EVENT LIS the gacha button */