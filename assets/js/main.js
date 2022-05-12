








function show() {
    let month = document.getElementById("horoskops").value;

    switch (month) {
        case "Jan":
            document.getElementById("horoskop-pic").innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great.";
            break;
        case "Feb":
            document.getElementById("horoskop-pic").innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…";
            break;
        case "Mar":
            document.getElementById("horoskop-pic").innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone…";
            break;
        case "Apr":
            document.getElementById("horoskop-pic").innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…";
            break;
        case "May":
            document.getElementById("horoskop-pic").innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…";
            break;
        case "Jun":
            document.getElementById("horoskop-pic").innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…";
            break;
        case "Jul":
            document.getElementById("horoskop-pic").innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…";
            break;
        case "Aug":
            document.getElementById("horoskop-pic").innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…";
            break;
        case "Sep":
            document.getElementById("horoskop-pic").innerHTML = "Pick a cultural event that's coming up and get some tickets for it today.";
            break;
        case "Oct":
            document.getElementById("horoskop-pic").innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…";
            break;
        case "Nov":
            document.getElementById("horoskop-pic").innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to....";
            break;
        case "Dec":
            document.getElementById("horoskop-pic").innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity.";
            break;
    }
    console.log(month);
}