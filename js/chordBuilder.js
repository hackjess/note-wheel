// JavaScript Document


var chordType = 0;

// declare intervals
var root= 0;
const MAJOR_SECOND = root + 2;
const MINOR_THIRD = root + 3;
const MAJOR_THIRD = root + 4;
const PERFECT_FOURTH = root + 5;
const DIMINISHED_FIFTH = root + 6;
const PERFECT_FIFTH = root + 7;
const AUGMENTED_FIFTH = root + 8;


function chooseNote(noteChoice){
    root = noteChoice;
	alert(root);
}

function chooseChordType(chordTypechoice){
    chordType = chordTypechoice;
	adjustChart(chordType);
	alert(chordType);
}

function adjustChart(chordType){
	if (chordType == 0) {
		config.data.datasets.data[root] = 100 ;
		window.myPolarArea.update();
	}	
}

