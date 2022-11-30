function lights () {
    Red()
    basic.pause(2000)
    Green()
    basic.pause(2000)
    yellow()
    basic.pause(2000)
}
function crosswalk () {
    yellow()
    basic.pause(2000)
    Red()
    basic.showIcon(IconNames.StickFigure)
    basic.pause(1000)
    for (let index = 0; index < 10; index++) {
        count += -1
        basic.showNumber(count)
    }
}
input.onButtonPressed(Button.A, function () {
    crosswalk()
})
function yellow () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Green () {
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let distance = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let count = 0
count = 10
radio.setGroup(173)
strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
strip.setBrightness(20)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) == false) {
        lights()
    }
})
