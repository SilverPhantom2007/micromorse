input.onButtonPressed(Button.A, function () {
    if (idx == 0) {
        idx = chars_lookup.length - 1
    } else {
        idx += -1
    }
    basic.showString("" + (chars_lookup[idx]))
})
input.onButtonPressed(Button.AB, function () {
    message = "" + message + chars_lookup[idx]
    music.playMelody("F C5 - - - - - - ", 1000)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (idx == chars_lookup.length - 1) {
        idx = 0
    } else {
        idx += 1
    }
    basic.showString("" + (chars_lookup[idx]))
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("" + (message))
    message = ""
    music.playMelody("F C5 - C5 - - - - ", 1000)
})
function translateMorse (code: string) {
    letter = chars_lookup[morse_lookup.indexOf(letter)]
    return letter
}
let letter = ""
let idx = 0
let message = ""
let chars_lookup: string[] = []
let morse_lookup: string[] = []
morse_lookup = [
"01",
"1000",
"1010",
"100",
"0",
"0010",
"110",
"0000",
"00",
"0111",
"101",
"0100",
"11",
"10",
"111",
"0110",
"1101",
"010",
"000",
"1",
"001",
"0001",
"011",
"1001",
"1011",
"1100",
"11111",
"01111",
"00111",
"00011",
"00001",
"00000",
"10000",
"11000",
"11100",
"11110"
]
chars_lookup = [
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
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"
]
radio.setGroup(1)
radio.setFrequencyBand(0)
message = ""
idx = 0
basic.showString("" + (chars_lookup[idx]))
basic.forever(function () {
	
})
