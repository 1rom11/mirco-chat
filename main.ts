// Receive message in leds / morse code (decoder)
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(247, music.beat(BeatFraction.Whole))
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else {
        basic.showString("SOS CALL!!")
    }
    basic.clearScreen()
})
// send_number 0 / dot
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onPinPressed(TouchPin.P2, function () {
    channel += -1
    basic.showString("" + channel + "channel")
    basic.clearScreen()
    radio.setGroup(channel)
})
// send_number 1 / line
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onPinPressed(TouchPin.P1, function () {
    channel += 1
    basic.showString("" + channel + "channel")
    basic.clearScreen()
    radio.setGroup(channel)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(2)
})
let channel = 0
// set channel
channel = 3
radio.setGroup(channel)
