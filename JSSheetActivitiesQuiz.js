// With help from: https://www.youtube.com/watch?v=C7NsIRhoWuE&t=3s

submitbutton = document.getElementById("submit");
divResults = document.getElementById("result");

submitbutton.addEventListener("click", onSubmit);

function onSubmit() {

    divResults.classList.remove("hide");
    divResults.innerHTML = "Suggestions:"

    var question1 = document.WellnessQuiz.question1.value;
    var question2 = document.WellnessQuiz.question2.value;
    var question3 = document.WellnessQuiz.question3.value;
    var question4 = document.WellnessQuiz.question4.value;
    var question5 = document.WellnessQuiz.question5.value;

    var socialValue = 0;
    var activityValue = 0;
    var sleepValue = 0;
    var openValue = 0;
    var ratingValue = 0;

    var socialSuggest = document.createElement("p");
    var activitySuggest = document.createElement("p");
    var sleepSuggest = document.createElement("p");
    var openSuggest = document.createElement("p");
    var ratingSuggest = document.createElement("p");

    if (question1 == "Very social") {
        socialValue = 4;
        socialSuggest.innerHTML = "You like socializing! Keep talking and making new friends!";
    }
    if (question1 == "Somewhat social") {
        socialValue = 3;
        socialSuggest.innerHTML = "You aren't too introverted, but you can try starting conversations to make new friends";
    }
    if (question1 == "Not social") {
        socialValue = 2;
        socialSuggest.innerHTML = "You might like playing sports or video games with other people";
    }
    if (question1 == "Against social") {
        socialValue = 1;
        socialSuggest.innerHTML = "Reading can be a fun, quiet hobby for someone like you! It can also help you connect with others who have similar tastes!";
    }
    divResults.appendChild(socialSuggest);

    if (question2 == "Very active") {
        activityValue = 4;
        activitySuggest.innerHTML = "It seems that physical activity is your jam! Continue to stay active";
    }
    if (question2 == "Somewhat active") {
        activityValue = 3;
        activitySuggest.innerHTML = "You might enjoy team sports like basketball or tennis!";
    }
    if (question2 == "Not active") {
        activityValue = 2;
        activitySuggest.innerHTML = "Taking a walk and/or doing yoga may be perfect for you! They aren't very physically straining and can help calm you!";
    }
    if (question2 == "Against active") {
        activityValue = 1;
        activitySuggest.innerHTML = "You should strongly consider standing up and stretching in place every so often. Physical activity is key for both mental and physical health!";
    }
    divResults.appendChild(activitySuggest);

    if (question3 == "Very sleep") {
        sleepValue = 4;
        sleepSuggest.innerHTML = "You sleep a good amount! Try to sleep at least 8 hours every day, but not more than 12";
    }
    if (question3 == "Somewhat sleep") {
        sleepValue = 3;
        sleepSuggest.innerHTML = "Your sleeping habits are on the healthier side. See if you can consistently sleep closer to 8 hours daily!";
    }
    if (question3 == "Not sleep") {
        sleepValue = 2;
        sleepSuggest.innerHTML = "You are not receiving enough rest! Give yourself extra time to stay in bed!";
    }
    if (question3 == "Against sleep") {
        sleepValue = 1;
        sleepSuggest.innerHTML = "You are hardly sleeping, and it can negatively impact your mental health. Try to get much more rest every night!";
    }
    divResults.appendChild(sleepSuggest);

    if (question4 == "Very open") {
        openValue = 4;
        openSuggest.innerHTML = "You are good about discussing your wellbeing! Continue to do so";
    }
    if (question4 == "Somewhat open") {
        openValue = 3
        openSuggest.innerHTML = "You are decently open about your wellbeing. Try to be a bit more open if you can!";
    }
    if (question4 == "Not open") {
        openValue = 2;
        openSuggest.innerHTML = "Opening up about mental health can be very difficult at times; see if you can find a trusted friend to talk with.";
    }
    if (question4 == "Against open") {
        openValue = 1;
        openSuggest.innerHTML = "You should strongly consider professional services, like therapy, as an outlet to let out your emotions.";
    }
    divResults.appendChild(openSuggest);

    if (question5 == "4") {
        ratingValue = 4;
        ratingSuggest.innerHTML = "Overall, you have great mental health!";
    }
    if (question5 == "3") {
        ratingValue = 3;
        ratingSuggest.innerHTML = "It's good that you are generally feeling happy! Improve where you can!";
    }
    if (question5 == "2") {
        ratingValue = 2;
        ratingSuggest.innerHTML = "Understand what makes you happy and focus on that to feel more positive!";
    }
    if (question5 == "1") {
        ratingValue = 1;
        ratingSuggest.innerHTML = "Use the above suggestions (and consider professional services) to improve your mental health";
    }
    divResults.appendChild(ratingSuggest);


}
