def on_forever():
    pins.digital_write_pin(DigitalPin.P1, 1)
    led.plot(0, 4)
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P0, 0)
    led.unplot(0, 4)
    basic.pause(900)
basic.forever(on_forever)
