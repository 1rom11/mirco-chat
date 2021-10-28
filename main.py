# Receive message in leds / morse code (decoder)

def on_received_number(receivedNumber):
    if receivedNumber == 0:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        music.play_tone(247, music.beat(BeatFraction.WHOLE))
    elif receivedNumber == 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . # # # .
                        . . . . .
                        . . . . .
        """)
        music.play_tone(349, music.beat(BeatFraction.WHOLE))
    else:
        basic.show_string("SOS CALL!!")
    basic.clear_screen()
radio.on_received_number(on_received_number)

# send_number 0 / dot

def on_button_pressed_a():
    radio.send_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    global channel
    channel += -1
    basic.show_string("" + str(channel) + "channel")
    basic.clear_screen()
    radio.set_group(channel)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

# send_number 1 / line

def on_button_pressed_b():
    radio.send_number(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    global channel
    channel += 1
    basic.show_string("" + str(channel) + "channel")
    basic.clear_screen()
    radio.set_group(channel)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def on_gesture_shake():
    radio.send_number(2)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

channel = 0
# set channel
channel = 3
radio.set_group(channel)