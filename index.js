//toggle between light and dark mode
let darkMode = localStorage.getItem('darkMode')
const checkbox = document.getElementById('checkbox');

//check if the dark mode is enables
//if yes , then turn it off
//if no, then turn it on

const enableDarkMode =()=>{
    //add the darkmode class to the body
    document.body.classList.add('dark-mode');
    console.log('darkmode added');
    //update the darkmode in localstorage
    localStorage.setItem('darkMode','enabled');
}

const disableDarkMode =()=>{
    //remove darkmode class from the body
    document.body.classList.remove('dark-mode');
    console.log('darkmode removed');
    //update the darkmode in localstorage
    localStorage.setItem('darkMode',null);
}

if(darkMode == "enabled"){
    enableDarkMode();
    checkbox.checked = true;
}

checkbox.addEventListener('change',()=>{

    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
})

// toggle between analog and digital clock

let digitalwatch= localStorage.getItem('digitalWatch');
var toggleBtn = document.getElementById('toggleBtn');
var analogClock = document.getElementById('clock');
var digitalClock = document.getElementById('container');

const enableDigital = ()=>{

    //remove the analog watch
    analogClock.classList.add('toggle-class');

    //add the digital watch
    digitalClock.classList.remove('toggle-class');

    console.log('digital watch');

    //update the watch in localStorage
    localStorage.setItem('digitalWatch','enabled');
}

const disableDigital = ()=>{

    //add the analog watch
    analogClock.classList.remove('toggle-class');

    //remove the digital watch
    digitalClock.classList.add('toggle-class');

    console.log('analog watch');

    //update the watch in localStorage
    localStorage.setItem('digitalWatch',null);
}

if(digitalwatch == 'enabled'){
   enableDigital();
   console.log('digital now')
}
else{
    disableDigital();
    console.log('analog now')
}

toggleBtn.addEventListener('click',()=>{
    digitalwatch = localStorage.getItem('digitalWatch');
    if(digitalwatch !== 'enabled'){
        enableDigital();
    }else{
        disableDigital();
    }
});


//logic behind clock

//digital watch
window.addEventListener('load',()=>{
    setInterval(digitalclock,1000);
})

function digitalclock(){


    var day = new Date();

    var hrs = day.getHours();
    var mins = day.getMinutes();
    var secs = day.getSeconds();
    var en = hrs >=12 ? 'pm' : 'am';

    if(hrs>12){
    en='PM'
    }
    if(hrs>12){
    hrs=hrs-12
    }
    if(hrs==0){
        hrs=12
    }
    if(hrs<10){
    hrs='0'+hrs;
    }
    if(mins<10){
        mins='0'+mins;
    }
    if(secs<10){
        secs='0'+secs;
    }

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;
    document.getElementById("amorpm").innerHTML = en;
}


//analog watch

window.addEventListener('load',function(){
    setInterval(analogclock,1000);
});

function analogclock(){
    var hr = document.querySelector('#hr');
    var mn = document.querySelector('#mn');
    var sc = document.querySelector('#sc');

    var day = new Date();
    var hrs = day.getHours();
    var mins = day.getMinutes();
    var secs = day.getSeconds();

    var hrdeg = hrs * 30 + mins/2;

    hr.style.transform = "rotate("+hrdeg+"deg)";
    mn.style.transform = "rotate("+mins * 6 +"deg)";
    sc.style.transform = "rotate("+secs * 6+"deg)";
};
