console.log("this is an alarm clock");

const alarmSubmit=document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click', setAlarm);

function setAlarm(e)
{   

    e.preventDefault();
    const alarm=document.getElementById('alarm');
    
    alarmDate= new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}....`);

    now= new Date();

    let TimeToAlarm=alarmDate-now;
    console.log(TimeToAlarm);

    if(TimeToAlarm>=0)
    {
        setTimeout(()=>{
            ringBell();
        },TimeToAlarm);

        const alert=document.getElementById('alert');
    alert.classList.remove('show');
    }
    else
    {
        const alert=document.getElementById('alert');
        alert.classList.add('show');
    }

}

function ringBell()
{
     var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
     audio.play();

console.log("Ringing..... you can also add audio take help of internet!");
}