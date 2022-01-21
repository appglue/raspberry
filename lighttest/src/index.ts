var Gpio = require('onoff').Gpio,
    led = new Gpio(4, 'out'),
    led2 = new Gpio(26, 'out');
var iv = setInterval(function ()
{
    let val = led.readSync();

    led.writeSync(val === 0 ? 1 : 0)
    led2.writeSync(val === 0 ? 0 : 1)
}, 1000);
// Stop blinking the LED and turn it off after 5 seconds.  
setTimeout(function ()
{
    clearInterval(iv); // Stop blinking  
    led.writeSync(0); // Turn LED off.  
    led.unexport(); // Unexport GPIO and free resources  
}, 60000); 