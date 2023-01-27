var B1 = document.getElementById("B1");
var B2 = document.getElementById("B2");
var B3 = document.getElementById("B3");
var B4 = document.getElementById("B4");
var B5 = document.getElementById("B5");
var B6 = document.getElementById("B6");
var B7 = document.getElementById("B7");
var B8 = document.getElementById("B8");
var B9 = document.getElementById("B9");
var B10 = document.getElementById("B10");

var B1Play = false;
var B2Play = false;
var B3Play = false;
var B4Play = false;
var B5Play = false;
var B6Play = false;
var B7Play = false;
var B8Play = false;
var B9Play = false;
var B10Play = false;

function togglePlayB1() {  B1Play ? B1.pause() : B1.play();};

B1.onplaying = function() {B1Play = true;};
B1.onpause = function() {  B1Play = false;};

function togglePlayB2() {  B2Play ? B2.pause() : B2.play();};

B2.onplaying = function() {B2Play = true;};
B2.onpause = function() {  B2Play = false;};


function togglePlayB3() {  B3Play ? B3.pause() : B3.play();};

B3.onplaying = function() {B3Play = true;};
B3.onpause = function() {  B3Play = false;};


function togglePlayB4() {  B4Play ? B4.pause() : B4.play();};

B4.onplaying = function() {B4Play = true;};
B4.onpause = function() {  B4Play = false;};

function togglePlayB5() {  B5Play ? B5.pause() : B5.play();};

B5.onplaying = function() {B5Play = true;};
B5.onpause = function() {  B5Play = false;};

function togglePlayB6() {  B6Play ? B6.pause() : B6.play();};

B6.onplaying = function() {B6Play = true;};
B6.onpause = function() {  B6Play = false;};


function togglePlayB7() {  B7Play ? B7.pause() : B7.play();};

B7.onplaying = function() {B7Play = true;};
B7.onpause = function() {  B7Play = false;};


function togglePlayB8() {  B8Play ? B8.pause() : B8.play();};

B8.onplaying = function() {B8Play = true;};
B8.onpause = function() {  B8Play = false;};

function togglePlayB9() {  B9Play ? B9.pause() : B9.play();};

B9.onplaying = function() {B9Play = true;};
B9.onpause = function() {  B9Play = false;};

function togglePlayB10() {  B10Play ? B10.pause() : B10.play();};

B10.onplaying = function() {B10Play = true;};
B10.onpause = function() {  B10Play = false;};
