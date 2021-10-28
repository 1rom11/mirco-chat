//  Receive message in leds / morse code (decoder)
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
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
    }
    
})
//  send_number 0 / dot
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(0)
})
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    
    channel += -1
    basic.showString("" + ("" + channel) + "channel")
    basic.clearScreen()
    radio.setGroup(channel)
})
//  send_number 1 / line
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(1)
})
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    
    channel += 1
    basic.showString("" + ("" + channel) + "channel")
    basic.clearScreen()
    radio.setGroup(channel)
})
let channel = 0
//  set channel
channel = 3
radio.setGroup(channel)
