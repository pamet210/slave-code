function back () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "start") {
        rockpaperscissor()
    }
    if (receivedString == "scissor") {
        if (play == 2) {
            back()
        } else if (play == 3) {
            go()
        }
    }
    radio.sendString("next")
    if (receivedString == "rock") {
        if (play == 3) {
            back()
        } else if (play == 1) {
            go()
        }
    }
    radio.sendString("next")
    if (receivedString == "paper") {
        if (play == 1) {
            back()
        } else if (play == 2) {
            go()
        }
    }
    radio.sendString("next")
})
function rockpaperscissor () {
    play = randint(1, 3)
    if (play == 1) {
        radio.sendString("scissor")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            . # . # .
            `)
    }
    if (play == 2) {
        radio.sendString("rock")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (play == 3) {
        radio.sendString("paper")
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
}
function go () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
}
let play = 0
radio.setGroup(1)
