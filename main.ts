basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 50) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
})
