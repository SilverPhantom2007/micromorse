input.onButtonPressed(Button.A, function () {
    if (game_state == "write") {
        letter = "" + letter + "0"
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (game_state == "default") {
        basic.clearScreen()
        music.playMelody("C D E F G A B C5 ", 500)
        game_state = "read"
    } else if (game_state == "write") {
        message = "" + message + translateMorse(letter)
        basic.showString(letter, 100)
letter = ""
        music.playMelody("F C5 - - - - - - ", 500)
    }
})
radio.onReceivedString(function (receivedString) {
    new_messages.unshift(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (game_state == "write") {
        letter = "" + letter + "1"
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
input.onGesture(Gesture.Shake, function () {
    if (game_state == "default") {
        basic.clearScreen()
        music.playMelody("C5 F - - - - - - ", 500)
        game_state = "write"
    } else if (game_state == "write") {
        if (true) {
        	
        } else {
        	
        }
        radio.sendString("" + (message))
        message = ""
        music.playMelody("F C5 - C5 - - - - ", 500)
        basic.clearScreen()
    }
})
function translateMorse (code: string) {
    letter = chars_lookup[morse_lookup.indexOf(letter)]
    return letter
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    letter = ""
    message = ""
    music.playMelody("C5 F - - - - - - ", 500)
    game_state = "default"
    basic.clearScreen()
})
let game_state = ""
let message = ""
let chars_lookup: string[] = []
let morse_lookup: string[] = []
let letter = ""
let new_messages: string[] = []
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
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # . # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.clearScreen()
basic.showString("Ready!", 100)
game_state = "default"
basic.forever(function () {
    if (game_state == "read") {
        if (!(new_messages[0].isEmpty())) {
            basic.showString("New msg! Want 2 c?", 100)
while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            	
            }
            if (input.buttonIsPressed(Button.A)) {
                basic.showString("msg: " + new_messages.pop(), 100)
basic.pause(3000)
                basic.clearScreen()
            } else {
            	
            }
        } else {
            music.playMelody("C5 F - - - - - - ", 500)
            basic.showString("No new msgs", 100)
game_state = "default"
        }
    }
})
