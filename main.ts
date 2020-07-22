let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showRainbow(1, 360)
    strip.shift(1)
})
