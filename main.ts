input.onButtonPressed(Button.A, function () {
    letter = "" + letter + "0"
    music.playTone(523, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.AB, function () {
    message = "" + message + translateMorse(letter)
    basic.showString("" + (letter))
    letter = ""
    music.playMelody("F C5 - - - - - - ", 1000)
})
radio.onReceivedString(function (receivedString) {
    new_messages.unshift(receivedString)
})
input.onButtonPressed(Button.B, function () {
    letter = "" + letter + "1"
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("" + (message))
    message = ""
    music.playMelody("F C5 - C5 - - - - ", 1000)
    basic.clearScreen()
})
function translateMorse (code: string) {
    letter = chars_lookup[morse_lookup.indexOf(letter)]
    return letter
}
let letter = ""
let message = ""
let new_messages: string[] = []
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
new_messages = []
radio.setGroup(1)
radio.setFrequencyBand(0)
radio.setTransmitPower(7)
message = ""
basic.forever(function () {
    if (!(new_messages[0].isEmpty())) {
        basic.showString("New messages! Want to see the oldest?")
    }
})
