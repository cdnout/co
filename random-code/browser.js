/* @codedipper/random-code v2.1.2 */
const _chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    "_"
];

const {
    floor,
    random
} = Math;

function generateCode(_num, _characters){
	if (!_num) _num = 10;
	if (!_characters) _characters = _chars;
	if (parseInt(_num) == 0) _num = 10;
	if (!Array.isArray(_characters)) _characters = _chars;

	let _code = "";

	for (let i = 0; i < parseInt(_num); i++)
		_code = _code + _characters[floor(random() * _characters.length)];

	return _code;
};
