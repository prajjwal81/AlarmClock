console.log('Welcome to praj world')
//var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
let submit = document.getElementById('submit')
let alarm = document.getElementById('alarm')

let validTime = false
alarm.addEventListener('blur', function () {
    let reg = /^(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])\-\d{4}\s(2[0-3]|[01]?[0-9])\:([0-5]?[0-9])\:([0-5]?[0-9])$/
    let value = alarm.value;
    if (reg.test(value)) {
        console.log('Your Date and time is valid')
        alarm.classList.remove('is-invalid')
        validTime = true



    }
    else {
        console.log('your date and time is invalid')
        alarm.classList.add('is-invalid')
        validTime = false;
    }

})
function setAlarm(){
    alarmDate = new Date(alarm.value)
    console.log(`Your alarm is setting at ${alarmDate}`);
    now = new Date() ;

    let timeToAlarm = alarmDate - now ;
    console.log(timeToAlarm);
    setTimeout(() => {
        console.log('ringing')
        
    }, timeToAlarm);
}
// submit.addEventListener('click' , setAlarm)



submit.addEventListener('click' , function(){
    console.log (validTime)
    if(validTime = true){
        let success = document.getElementById("success")
        success.classList.add('show')
        setTimeout(() => {
            success.classList.remove('show')
            
        }, 3000);
        setAlarm();
    }
    else{
        let faliure = document.getElementById("faliure")
        faliure.classList.add('show')
        
    }
   

}) 

    




