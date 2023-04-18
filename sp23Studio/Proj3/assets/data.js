

const url = 'https://data.cityofnewyork.us/resource/6yyb-pb25.json';

//MARk: after func design
fetch(url + '?$limit=15000') // limit current highest (5000= fast, 15000 = 5sec+)

/* fetch("./assets/pave1000.json") */ // temp smol file 
.then(response => response.json())
.then(data => {
	fullData = data;
	rateProcess(fullData);
})
let locData = [];
const processData = Array.from(locData);




const chart = document.querySelector("#chartAll");


let yrArray=[] // repeat or name change?
let tempArray=Array.from(processData)





const rateProcess = (fullData)=>{ //process full data first
	let Rgood = 0
	let Rfair = 0
	let Rpoor = 0
	let Runknown = 0
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

let dummycharttext = document.getElementById('temp2ndtext');
let textDummy = document.createTextNode('Good:' + Rgood + '   Fair:' + Rfair + '   Poor:' + Rpoor + '   ????:' + Runknown)
	
dummycharttext.appendChild(textDummy);

var chart = new CanvasJS.Chart("chartContainerAll", {
	animationEnabled: true,
	backgroundColor: "transparent",
	title:{
		text: "Rating overall (proto:15000)",
		fontFamily:"Mitr",
		horizontalAlign: "left",
		fontSize:15
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		innerRadius: 30,
		indexLabelFontSize: 10,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		indexLabelPlacement: "inside",
		dataPoints: [
			{ y: Rgood, label: "Good" },
			{ y: Rfair, label: "Fair" },
			{ y: Rpoor, label: "Poor" },
			{ y: Runknown, label: "Null"},
			
		]
	}]
});
chart.render();

}


/* let Rgood = rateProcess(Rgood)
let Rfair = rateProcess(Rfair)
let Rpoor = rateProcess(Rpoor)
let Runknown = rateProcess(Runknown) */
console.log( 'Good:' + Rgood)
	console.log( 'Fair:' + Rfair)
	console.log( 'Poor:' + Rpoor)
	console.log( '?state:' + Runknown)
//set let for chart all to process
/* let goodAL= Rgood;
let fairAL= Rfair;
let poorAL= Rpoor;
let quesAL= Runknown; */






/* time filter proto */
/* let dateTempProcess = dummy; //MARK: replace the array into real ones

let processed= dateTempProcess.filter(filterFunc);

 function filterFunc(dateTempProcess.inspection){
	const startDate = document.getElementById('startDate');
	const endDate = document.getElementById('endDate');
	//return date >= "2000-11-04T00:00:00.000" && date <= "2010-12-31T00:00:00.000" ; 
	return date >= startDate.value && date <= endDate.value ;


} 
console.log(processed); //MARK test line


tag = [onnstreetna, fromstreet, tostreetna, manualrati, ratinglaye, inspection];
timeSeg = ["2000 to 2010", "2011 to 2016" , "2017-2021", " 2022" , "2023" ,] ; 
// divide seg in 5 parts
 */

/* loc, loc-start, loc-end, rate#, rate word, time of record */


//filter idea : dateof date, (don't touch the rate, gacha related)

// define vars

//calc the ave for chart

// insert value into chart

//insert chart effect


/* GACHA sys. */
//draw one & identify

//function result and add ani to icon

//function when redraw (remove prev ani class)


/* EVENT LIS    TO THE OPTION list (select active) */
/* EVENT LIS the gacha button */