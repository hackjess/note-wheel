// JavaScript Document

// declare intervals
var root = chooseNote(noteChoice);

function chooseNote(noteChoice){
	root = noteChoice;
	for (i = 0; i < 12; i++){
		config.data.datasets[0].data[i] = 65;
	}  
	window.myPolarArea.update();
	return root;
}

function chooseChordType(chordTypechoice){
    for (i = 0; i < 12; i++){
		config.data.datasets[0].data[i] = 65;
	}
	var chordType = chordTypechoice;
	var MAJOR_SECOND = root + 2;
	var MINOR_THIRD = root + 3;
	var MAJOR_THIRD = root + 4;
	var PERFECT_FOURTH = root + 5;
	var DIMINISHED_FIFTH = root + 6;
	var PERFECT_FIFTH = root + 7;
	var AUGMENTED_FIFTH = root + 8;
	var MAJOR_SIXTH = root + 9;
	var MINOR_SEVENTH = root + 10;
	var MAJOR_SEVENTH = root + 11;
	
	if (MAJOR_SECOND > 11){
		MAJOR_SECOND = MAJOR_SECOND - 12;
	}
	if (MINOR_THIRD > 11){
		MINOR_THIRD = MINOR_THIRD- 12;
	}
	if (MAJOR_THIRD > 11){
		MAJOR_THIRD = MAJOR_THIRD - 12;
	}
	if (PERFECT_FOURTH> 11){
		PERFECT_FOURTH = PERFECT_FOURTH - 12;
	}
	if (DIMINISHED_FIFTH > 11){
		DIMINISHED_FIFTH = DIMINISHED_FIFTH - 12;
	}
	if (PERFECT_FIFTH > 11){
		PERFECT_FIFTH = PERFECT_FIFTH - 12;
	} 
	if (AUGMENTED_FIFTH > 11){
		AUGMENTED_FIFTH = AUGMENTED_FIFTH- 12;
	}
	if (MAJOR_SIXTH  > 11){
		MAJOR_SIXTH  = MAJOR_SIXTH - 12;
	}
	if (MINOR_SEVENTH > 11){
		MINOR_SEVENTH= MINOR_SEVENTH - 12;
	}
	if (MAJOR_SEVENTH > 11){
		MAJOR_SEVENTH = MAJOR_SEVENTH - 12;
	}
	
	//Major
	if (chordType == 0) {
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MAJOR_THIRD] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;		
		window.myPolarArea.update();
	}
	//Minor
	else if (chordType == 1){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MINOR_THIRD] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;
		window.myPolarArea.update();
 	}
	//Diminished
	else if (chordType == 2){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MINOR_THIRD] = 85;
		config.data.datasets[0].data[DIMINISHED_FIFTH] = 85;
		window.myPolarArea.update();
 	}
	//Sus2
	else if (chordType == 3){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MAJOR_SECOND] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;
		window.myPolarArea.update();
 	}
	//Sus4
	else if (chordType == 4){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[PERFECT_FOURTH] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;
		window.myPolarArea.update();
 	}
	//Augmented
	else if (chordType == 5){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MAJOR_THIRD] = 85;
		config.data.datasets[0].data[AUGMENTED_FIFTH] = 85;
		window.myPolarArea.update();
 	}
	//Major 7th
	else if (chordType == 6){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MAJOR_THIRD] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;
		config.data.datasets[0].data[MAJOR_SEVENTH] = 85;
		window.myPolarArea.update();
 	}
	//Dominant Seventh
	else if (chordType == 7){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MAJOR_THIRD] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;
		config.data.datasets[0].data[MINOR_SEVENTH] = 85;
		window.myPolarArea.update();
 	}
	//Minor Seventh
	else if (chordType == 8){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MINOR_THIRD] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;
		config.data.datasets[0].data[MINOR_SEVENTH] = 85;
		window.myPolarArea.update();
 	}
		//Half Diminished
	else if (chordType == 9){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MINOR_THIRD] = 85;
		config.data.datasets[0].data[DIMINISHED_FIFTH] = 85;
		config.data.datasets[0].data[MAJOR_SEVENTH] = 85;
		window.myPolarArea.update();
 	}
		//Diminished
	else if (chordType == 10){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MINOR_THIRD] = 85;
		config.data.datasets[0].data[DIMINISHED_FIFTH] = 85;
		config.data.datasets[0].data[MINOR_SEVENTH] = 85;
		window.myPolarArea.update();
 	}
		//Sixth
	else if (chordType == 11){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MAJOR_THIRD] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;
		config.data.datasets[0].data[MAJOR_SIXTH] = 85;
		window.myPolarArea.update();
 	}
		//Minor Sixth
	else if (chordType == 12){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MINOR_THIRD] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;
		config.data.datasets[0].data[MAJOR_SIXTH] = 85;
		window.myPolarArea.update();
 	}
	//Add9
	else if (chordType == 13){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MAJOR_THIRD] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;
		config.data.datasets[0].data[MAJOR_SECOND] = 85;
		window.myPolarArea.update();
 	}
	//9
	else if (chordType == 14){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].data[MAJOR_THIRD] = 85;
		config.data.datasets[0].data[PERFECT_FIFTH] = 85;
		config.data.datasets[0].data[MAJOR_SECOND] = 85;
		config.data.datasets[0].data[MAJOR_SECOND] = 85;
		window.myPolarArea.update();
 	}
	return chordType;
}



	
	