input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        beep()
    }
})
function beep () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(300)
}
basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P1),
    1023
    )
})
