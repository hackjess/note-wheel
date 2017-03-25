// JavaScript Document

// declare intervals
const ROOT = userInputForRoot;
const MAJOR_SECOND = root + 2;
const MINOR_THIRD = root + 3;
const MAJOR_THIRD = root + 4;
const PERFECT_FOURTH = root + 5;
const DIMINISHED_FIFTH = root + 6;
const PERFECT_FIFTH = root + 7;
const AUGMENTED_FIFTH = root + 8;

var chordType;

// construct chords by their type

//  check if major
if (chordType == major)
{
	select ROOT;
	select MAJOR_THIRD;
	select PERFECT_FIFTH;
}
// check if minor
else if (chordType == minor)
{
	select ROOT;
	select MINOR_THIRD;
	select PERFECT_FIFTH;	
}
// check if diminished
else if (chordType == diminished)
{
	select ROOT;
	select MINOR_THIRD;
	select DIMINISHED_FIFTH;	
}
// check if augmented
else if (chordType == augmented)
{
	select ROOT;
	select MAJOR_THIRD;
	select AUGMENTED_FIFTH;
}
// check if sus2
else if (chordType == sus2)
{
	select ROOT;
	select MAJOR_SECOND;
	select PERFECT_FIFTH;
}
// check if sus4
else if (chordType == sus4)
{
	select ROOT;
	select PERFECT_FOURTH;
	select PERFECT_FIFTH;
}