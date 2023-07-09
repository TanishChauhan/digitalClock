

// console.log(date);

window.onload=()=>{
    function digitalClock(){
    const date = new Date();   


    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours <10 ? '0'+ hours:hours;
    minutes = minutes <10 ? '0'+ minutes:minutes;
    seconds = seconds <10 ? '0'+ seconds:seconds;
        console.log(hours);

    document.querySelector('#container-h').innerText=hours;
    document.querySelector('#container-m').innerText=minutes;
    document.querySelector('#container-s').innerText=seconds;
    

    setTimeout(digitalClock,1000);
}
    digitalClock();
}