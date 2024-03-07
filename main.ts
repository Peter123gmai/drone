input.onGesture(Gesture.TiltLeft, function () {
    pins.analogWritePin(AnalogPin.P3, 1023)
})
let list = [
sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0),
sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1),
sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P2),
sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P3)
]
pins.setAudioPin(AnalogPin.P10)
pins.analogWritePin(AnalogPin.P0, 0)
pins.analogWritePin(AnalogPin.P1, 0)
pins.analogWritePin(AnalogPin.P2, 0)
pins.analogWritePin(AnalogPin.P3, 0)
let fly = false
Drones.initModule(Drones.Runmodes.Remote)
Drones.UAV_speed(100)
basic.forever(function () {
    list[0] = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0)
    list[1] = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    list[2] = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P2)
    list[3] = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P3)
    if (list[0] >= 20 || (list[1] >= 20 || list[2] >= 20) || list[3] >= 20) {
    	
    }
})
