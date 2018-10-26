var wheelPower    = 0;
var wheelSpinning = false;

var theWheel = new Winwheel({
    'numSegments'  : 8,     // Specify number of segments.
    'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
    'textFontSize' : 28,    // Set font size as desired.
    'segments'     :        // Define segments including colour and text.
    [
       {'fillStyle' : '#eae56f', 'text' : '1'},
       {'fillStyle' : '#89f26e', 'text' : '2'},
       {'fillStyle' : '#7de6ef', 'text' : '3'},
       {'fillStyle' : '#e7706f', 'text' : '4'},
       {'fillStyle' : '#eae56f', 'text' : '5'},
       {'fillStyle' : '#89f26e', 'text' : '6'},
       {'fillStyle' : '#7de6ef', 'text' : '7'},
       {'fillStyle' : '#e7706f', 'text' : '8'}
    ],
    'animation' :           // Specify the animation to use.
    {
        'type'     : 'spinToStop',
        'duration' : 5,     // Duration in seconds.
        'spins'    : 8,     // Number of complete spins.
        'callbackFinished' : alertPrize
    }
});

function startSpin()
{
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false)
    {
        // Based on the power level selected adjust the number of spins for the wheel, the more times is has
        // to rotate with the duration of the animation the quicker the wheel spins.
        if (wheelPower == 1)
        {
            theWheel.animation.spins = 3;
        }
        else if (wheelPower == 2)
        {
            theWheel.animation.spins = 8;
        }
        else if (wheelPower == 3)
        {
            theWheel.animation.spins = 15;
        }
        // Disable the spin button so can't click again while wheel is spinning.

        document.getElementById('spin_button').className = "";
        // Begin the spin animation by calling startAnimation on the wheel object.
        theWheel.startAnimation();
        // Set to true so that power can't be changed and spin button re-enabled during
        // the current animation. The user will have to reset before spinning again.
        wheelSpinning = true;
    }
}

function resetWheel()
{
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.
    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}

function alertPrize(indicatedSegment)
{
    // Do basic alert of the segment text. You would probably want to do something more interesting with this information.
    alert("You have won " + indicatedSegment.text);
    resetWheel();
}
