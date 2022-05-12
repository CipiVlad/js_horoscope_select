








function show() {
    let month = document.getElementById("horoskops").value;
    let horoskop = document.getElementById("horoskop-pic");
    switch (month) {
        case "Jan":
            horoskop.innerHTML = "<p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p><img src='https://www.horoscopedates.com/img/icon_aquarius.png' alt='aquarius'>";
            break;
        case "Feb":
            horoskop.innerHTML = "<p>Communication is very important today—written, spoken, and even nonverbal body language will all…</p><img src='https://www.horoscopedates.com/img/icon_pisces.png' alt='pisces'>";
            break;
        case "Mar":
            document.getElementById("horoskop-pic").innerHTML = "<p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p><img src='https://www.horoscopedates.com/img/icon_aries.png' alt='aries'>";
            break;
        case "Apr":
            document.getElementById("horoskop-pic").innerHTML = "<p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…</p><img src='https://www.horoscopedates.com/img/icon_taurus.png' alt='taurus'>";
            break;
        case "May":
            document.getElementById("horoskop-pic").innerHTML = "<p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…</p><img src='https://www.horoscopedates.com/img/icon_gemini.png' alt='gemini'>";
            break;
        case "Jun":
            document.getElementById("horoskop-pic").innerHTML = "<p>Too many different elements in your life are overlapping with each other right now—and it's your…</p><img src='https://www.horoscopedates.com/img/icon_cancer.png' alt='cancer'>";
            break;
        case "Jul":
            document.getElementById("horoskop-pic").innerHTML = "<p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…</p><img src='https://www.horoscopedates.com/img/icon_leo.png' alt='leo'>";
            break;
        case "Aug":
            document.getElementById("horoskop-pic").innerHTML = "<p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…</p><img src='https://www.horoscopedates.com/img/icon_virgo.png' alt='virgo'>";
            break;
        case "Sep":
            document.getElementById("horoskop-pic").innerHTML = "<p>Pick a cultural event that's coming up and get some tickets for it today.</p><img src='https://www.horoscopedates.com/img/icon_libra.png' alt='libra'>";
            break;
        case "Oct":
            document.getElementById("horoskop-pic").innerHTML = "<p>Someone will challenge a belief that you've held for a very long time today—and they will say an…</p><img src='https://www.horoscopedates.com/img/icon_scorpio.png' alt='scorpio'>";
            break;
        case "Nov":
            document.getElementById("horoskop-pic").innerHTML = "<p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....</p><img src='https://www.horoscopedates.com/img/icon_sagittarius.png' alt='sagittarius'>";
            break;
        case "Dec":
            document.getElementById("horoskop-pic").innerHTML = "<p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity.</p><img src='https://www.horoscopedates.com/img/icon_capricorn.png' alt='capricorn'>";
            break;
    }
    console.log(month);
}