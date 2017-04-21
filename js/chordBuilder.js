// JavaScript Document

var sliceColors = ["#1874cd", "#2C0095", "#760190", "#E4007B", "#b22222", "#FE0000", "#e67300", "#FDB700", "yellow", "#47d147", "#217B33", "#13979a", "#1874cd", "#2C0095", "#760190", "#E4007B", "#b22222", "#FE0000", "#e67300", "#FDB700", "yellow", "#47d147", "#217B33", "#13979a"];

var noteChordChoice = new Object();
    noteChordChoice.root = "";
	noteChordChoice.chord = "";
	noteChordChoice.MAJOR_SECOND = "";
	noteChordChoice.MINOR_THIRD = "";
	noteChordChoice.MAJOR_THIRD = "";
	noteChordChoice.PERFECT_FOURTH = "";
	noteChordChoice.DIMINISHED_FIFTH = "";
	noteChordChoice.PERFECT_FIFTH = "";
	noteChordChoice.AUGMENTED_FIFTH = "";
	noteChordChoice.MAJOR_SIXTH = "";
	noteChordChoice.MINOR_SEVENTH = "";
	noteChordChoice.MAJOR_SEVENTH = "";
	noteChordChoice.bigNotes = ""; 

	var colorChoice = sliceColors[0];
	var bigNotes = "";


function chooseNote(noteChoice){
	noteChordChoice.root = noteChoice;
	for (i = 0; i < 12; i++){
		config.data.datasets[0].data[i] = 65;
	}
	window.myPolarArea.update();
	if (noteChordChoice.chord !== ""){
		for (i = 0; i < 12; i++){
		config.data.datasets[0].backgroundColor[i] = "#808080";
	}
		window.myPolarArea.update();
		changeChart(noteChordChoice.root, noteChordChoice.chord);
	}
	window.myPolarArea.update();
	
	return noteChordChoice.root;
}

function chooseChordType(chord){
    noteChordChoice.chord = chord;
	for (i = 0; i < 12; i++){
		config.data.datasets[0].data[i] = 65;
	}
	window.myPolarArea.update();
	if (noteChordChoice.root !== ""){
		for (i = 0; i < 12; i++){
		config.data.datasets[0].backgroundColor[i] = "#808080";
	}
		window.myPolarArea.update();
		changeChart(noteChordChoice.root, noteChordChoice.chord);
	}
	window.myPolarArea.update();
	return noteChordChoice.chord;
}


function changeChart(root, chord){
	noteChordChoice.MAJOR_SECOND = root + 2;
	noteChordChoice.MINOR_THIRD = root + 3;
	noteChordChoice.MAJOR_THIRD = root + 4;
	noteChordChoice.PERFECT_FOURTH = root + 5;
	noteChordChoice.DIMINISHED_FIFTH = root + 6;
	noteChordChoice.PERFECT_FIFTH = root + 7;
	noteChordChoice.AUGMENTED_FIFTH = root + 8;
	noteChordChoice.MAJOR_SIXTH = root + 9;
	noteChordChoice.MINOR_SEVENTH = root + 10;
	noteChordChoice.MAJOR_SEVENTH = root + 11;
	noteChordChoice.MAJOR_SECOND = root + 2;
	
	var startColor = "";
	
	if (root == 0){
		startColor = 0;	
	}else if (root == 1){
		startColor = 1;	
	}else if (root == 2){
		startColor = 2;	
	}else if (root == 3){
		startColor = sliceColors[3];	
	}else if (root == 4){
		startColor = sliceColors[4];	
	}else if (root == 5){
		startColor = sliceColors[5];	
	}else if (root == 6){
		startColor = sliceColors[6];	
	}else if (root == 7){
		startColor = sliceColors[7];	
	}else if (root == 8){
		startColor = sliceColors[8];	
	}else if (root == 9){
		startColor = sliceColors[9];	
	}else if (root == 10){
		startColor = sliceColors[10];	
	}else if (root == 11){
		startColor = sliceColors[11];	
	}
	
	if (noteChordChoice.MAJOR_SECOND > 11){
		noteChordChoice.MAJOR_SECOND =- 12;
	}
	if (noteChordChoice.MINOR_THIRD > 11){
		noteChordChoice.MINOR_THIRD = noteChordChoice.MINOR_THIRD - 12;
	}
	if (noteChordChoice.MAJOR_THIRD > 11){
		noteChordChoice.MAJOR_THIRD = noteChordChoice.MAJOR_THIRD - 12;
	}
	if (noteChordChoice.PERFECT_FOURTH> 11){
		noteChordChoice.PERFECT_FOURTH = noteChordChoice.PERFECT_FOURTH - 12;
	}
	if (noteChordChoice.DIMINISHED_FIFTH > 11){
		noteChordChoice.DIMINISHED_FIFTH = noteChordChoice.DIMINISHED_FIFTH - 12;
	}
	if (noteChordChoice.PERFECT_FIFTH > 11){
		noteChordChoice.PERFECT_FIFTH = noteChordChoice.PERFECT_FIFTH - 12;
	} 
	if (noteChordChoice.AUGMENTED_FIFTH > 11){
		noteChordChoice.AUGMENTED_FIFTH = noteChordChoice.AUGMENTED_FIFTH - 12;
	}
	if (noteChordChoice.MAJOR_SIXTH  > 11){
		noteChordChoice.MAJOR_SIXTH  = noteChordChoice.MAJOR_SIXTH - 12;
	}
	if (noteChordChoice.MINOR_SEVENTH > 11){
		noteChordChoice.MINOR_SEVENTH = noteChordChoice.MINOR_SEVENTH - 12;
	}
	if (noteChordChoice.MAJOR_SEVENTH > 11){
		noteChordChoice.MAJOR_SEVENTH = noteChordChoice.MAJOR_SEVENTH - 12;
	}
	
	//Major
	if (chord == 0) {
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MAJOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_THIRD] = sliceColors[root + 4];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];		
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		window.myPolarArea.update();
	}
	//Minor
	else if (chord == 1){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MINOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_THIRD] = sliceColors[root + 3];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		window.myPolarArea.update();
 	}
	//Diminished
	else if (chord == 2){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MINOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_THIRD] = sliceColors[root + 3];
		config.data.datasets[0].data[noteChordChoice.DIMINISHED_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.DIMINISHED_FIFTH] = sliceColors[root + 6];
		window.myPolarArea.update();
 	}
	//Sus2
	else if (chord == 3){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SECOND] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SECOND] = sliceColors[root + 2];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		window.myPolarArea.update();
 	}
	//Sus4
	else if (chord == 4){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FOURTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FOURTH] = sliceColors[root + 5];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		window.myPolarArea.update();
 	}
	//Augmented
	else if (chord == 5){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MAJOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_THIRD] = sliceColors[root + 4];
		config.data.datasets[0].data[noteChordChoice.AUGMENTED_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.AUGMENTED_FIFTH] = sliceColors[root + 8];
		window.myPolarArea.update();
 	}
	//Major 7th
	else if (chord == 6){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MAJOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_THIRD] = sliceColors[root + 4];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SEVENTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SEVENTH] = sliceColors[root + 11];
		window.myPolarArea.update();
 	}
	//Dominant Seventh
	else if (chord == 7){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MAJOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_THIRD] = sliceColors[root + 4];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		config.data.datasets[0].data[noteChordChoice.MINOR_SEVENTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_SEVENTH] = sliceColors[root + 10];
		window.myPolarArea.update();
 	}
	//Minor Seventh
	else if (chord == 8){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MINOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_THIRD] = sliceColors[root + 3];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		config.data.datasets[0].data[noteChordChoice.MINOR_SEVENTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_SEVENTH] = sliceColors[root + 10];
		window.myPolarArea.update();
 	}
	//Half Diminished
	else if (chord == 9){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MINOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_THIRD] = sliceColors[root + 3];
		config.data.datasets[0].data[noteChordChoice.DIMINISHED_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.DIMINISHED_FIFTH] = sliceColors[root + 6];
		config.data.datasets[0].data[noteChordChoice.MINOR_SEVENTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_SEVENTH] = sliceColors[root + 10];
		window.myPolarArea.update();
 	}
		//Diminished
	else if (chord == 10){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MINOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_THIRD] = sliceColors[root + 3];
		config.data.datasets[0].data[noteChordChoice.DIMINISHED_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.DIMINISHED_FIFTH] = sliceColors[root + 6];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SIXTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SIXTH] = sliceColors[root + 9];
		window.myPolarArea.update();
 	}
		//Sixth
	else if (chord == 11){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MAJOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_THIRD] = sliceColors[root + 4];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SIXTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SIXTH] = sliceColors[root + 9];
		window.myPolarArea.update();
 	}
		//Minor Sixth
	else if (chord == 12){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MINOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_THIRD] = sliceColors[root + 3];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SIXTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SIXTH] = sliceColors[root + 9];
		window.myPolarArea.update();
 	}
	//Add9
	else if (chord == 13){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MAJOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_THIRD] = sliceColors[root + 4];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SECOND] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SECOND] = sliceColors[root + 2];
		window.myPolarArea.update();
 	}
	//9
	else if (chord == 14){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MAJOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_THIRD] = sliceColors[root + 4];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		config.data.datasets[0].data[noteChordChoice.MINOR_SEVENTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_SEVENTH] = sliceColors[root + 10];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SECOND] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SECOND] = sliceColors[root + 2];
		window.myPolarArea.update();
 	}//major 9
	else if (chord == 15){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MAJOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_THIRD] = sliceColors[root + 4];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SEVENTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SEVENTH] = sliceColors[root + 11];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SECOND] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SECOND] = sliceColors[root + 2];
		window.myPolarArea.update();
	}//minor 9
	else if (chord == 16){
		config.data.datasets[0].data[root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MINOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_THIRD] = sliceColors[root + 3];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		config.data.datasets[0].data[noteChordChoice.MINOR_SEVENTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MINOR_SEVENTH] = sliceColors[root + 10];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SECOND] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SECOND] = sliceColors[root + 2];
		window.myPolarArea.update();
 	}//6/9
	else if (chord == 17){
		config.data.datasets[0].data[noteChordChoice.root] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.root] = sliceColors[root];
		config.data.datasets[0].data[noteChordChoice.MAJOR_THIRD] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_THIRD] = sliceColors[root + 4];
		config.data.datasets[0].data[noteChordChoice.PERFECT_FIFTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.PERFECT_FIFTH] = sliceColors[root + 7];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SIXTH] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SIXTH] = sliceColors[root + 9];
		config.data.datasets[0].data[noteChordChoice.MAJOR_SECOND] = 85;
		config.data.datasets[0].backgroundColor[noteChordChoice.MAJOR_SECOND] = sliceColors[root + 2];
		window.myPolarArea.update();
 	}
}