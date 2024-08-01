let btn = document.getElementById('circle');
let txtY = document.getElementById('spanY');
let txtM = document.getElementById('spanM');
let txtD = document.getElementById('spanD');
let DER = document.getElementById('t1');
let MER = document.getElementById('t2');
let YER = document.getElementById('t3');

btn.onclick = function getdate() {
    //values of inputs
    let inputYear = parseInt(document.getElementById('year').value);
    let inputMonth = parseInt(document.getElementById('month').value);
    let inputDay = parseInt(document.getElementById('day').value);

    let inputYear1 = document.getElementById('year');
    let inputMonth1 = document.getElementById('month');
    let inputDay1 = document.getElementById('day');

    //dates
    let date = new Date();
    let nowYear = date.getFullYear();
    let nowMonth = date.getMonth() + 1; // getMonth() returns 0-11, so add 1
    let nowDay = date.getDate();
    var remMonth, remYear, remDay;
    let error = false;
    if(nowYear >= inputYear)
    {
        remYear = (nowYear - inputYear) - 1;
    }
    else if(nowYear < inputYear || inputYear1 == "")
    {
        error = true;
        YER.innerText = "Enter only old year."
        YER.style.opacity = 1;
        inputYear1.style.border = "1px solid hsl(0, 100%, 67%)";
        inputYear1.value = "";
    }

    if(inputMonth > nowMonth && inputMonth <= 12)
    {
        remMonth = (inputMonth - nowMonth);
        remMonth = 12 - remMonth;
    }
    else 
    {
        remMonth = (nowMonth - inputMonth);
        remYear++;
    }
    
    if(inputMonth > 12)
    {
        error = true;
        MER.innerText = "Invalid Month."
        MER.style.opacity = 1;
        inputMonth1.style.border = "1px solid hsl(0, 100%, 67%)";
    }

    if(inputDay <= 31 && nowDay > inputDay)
    {
        remDay = nowDay - inputDay;
    }
    else if(inputDay <= 31 && nowDay < inputDay)
    {
        remDay = inputDay - nowDay;
        remMonth++;
    }
    else if(inputDay <= 31 && nowDay == inputDay)
    {
        remDay = inputDay - nowDay;
    }
    else
    {
        error = true;
        DER.innerText = "Invalid day."
        DER.style.opacity = 1;
        inputDay1.style.border = "1px solid hsl(0, 100%, 67%)";
    }

    if(!error)
    {
        txtY.innerText = remYear;
        txtM.innerText = remMonth;
        txtD.innerText = remDay;
        MER.style.opacity = 0;
        DER.style.opacity = 0;
        YER.style.opacity = 0;
        inputMonth1.style.border = "1px solid hsl(0, 0%, 86%)";
        inputYear1.style.border = "1px solid hsl(0, 0%, 86%)";
        inputDay1.style.border = "1px solid hsl(0, 0%, 86%)";
    }
}

