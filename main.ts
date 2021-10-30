//  https://1rom11.github.io/mirco-chat/
//  set channel
let channel = 3
radio.setGroup(channel)
//  Check startup
basic.showIcon(IconNames.Yes)
basic.pause(200)
basic.clearScreen()
//  ALL CODE IS MADE IN PXT / MAKECODE
//  Start of Mirco:Chat = 2021/10 by 1rom11:dev (owner of code)
//  send_number 0 / dot
//  Send dot
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(0)
})
//  send_number 1 / line
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(1)
})
//  +1 Channel
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    
    channel += 1
    basic.showString("" + ("" + channel))
    basic.clearScreen()
    radio.setGroup(channel)
})
// -1 Channel
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    
    channel += -1
    basic.showString("" + ("" + channel))
    basic.clearScreen()
    radio.setGroup(channel)
})
//  Receive message in leds / morse code (decoder)
// dez nutes
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
