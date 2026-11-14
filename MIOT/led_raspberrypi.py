# Raspberry Pi Experimentation with MicroIoT
# Aim: Blink LEDs or control devices using Python on Raspberry Pi
# Command to run: python led.py

import time
try:
    import RPi.GPIO as GPIO
except ImportError:
    print("RPi.GPIO not installed on non-Raspberry Pi system")
    GPIO = None

LED_PIN = 18

def setup():
    if GPIO:
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(LED_PIN, GPIO.OUT)

def loop():
    while True:
        if GPIO:
            GPIO.output(LED_PIN, GPIO.HIGH)
            print("LED ON")
            time.sleep(1)
            GPIO.output(LED_PIN, GPIO.LOW)
            print("LED OFF")
            time.sleep(1)
        else:
            print("Simulating LED Blink (1s interval)...")
            time.sleep(1)

if __name__ == '__main__':
    setup()
    try:
        loop()
    except KeyboardInterrupt:
        if GPIO:
            GPIO.cleanup()
        print("\nExiting cleanly")
