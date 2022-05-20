// This script runs when the "survey" button is clicked.

function survey() { // calls the survey function
    surveyQ1 = prompt("On a scale of 1-10 how well is this website built?");

    if (surveyQ1 < 5) { // if the rating  is below 5
        surveySlide1 = prompt("What could be done to better your experience?");

        alert("Thank you for your feedback!");
        console.log(surveyQ1);
        console.log(surveySlide1);

        document.getElementById("surveytrophy").style.opacity = 100;
    }
    else if (surveyQ1 > 5) { // if the rating is above 5
        surveyQ2 = prompt("Is there anything else that is a {thumbs up} for you?");

        console.log(surveyQ1);

        if (surveyQ2 == "Yes") {
            surveySlide2 = prompt("What might that be?");

            console.log(surveyQ2);
            console.log(surveySlide2);

            alert("Great!");

            
            document.getElementById("surveytrophy").style.opacity = 100;
            
        }
        else if (surveyQ2 == "yes") {
            surveySlide2 = prompt("What might that be?");

            console.log(surveyQ2);
            console.log(surveySlide2);

            alert("Great!");

            document.getElementById("surveytrophy").style.opacity = 100;
        }
        else if (surveyQ2 == "yes.") {
            surveySlide2 = prompt("What might that be?");

            console.log(surveyQ2);
            console.log(surveySlide2);

            alert("Great!");

            document.getElementById("surveytrophy").style.opacity = 100;
        }
        else if (surveyQ2 == "Yes.") {
            surveySlide2 = prompt("What might that be?");

            console.log(surveyQ2);
            console.log(surveySlide2);

            alert("Great!");

            document.getElementById("surveytrophy").style.opacity = 100;
        }
        else {
            alert("Thanks for taking my survey!");

            console.log(surveyQ2);
            console.log(surveySlide2);

            document.getElementById("surveytrophy").style.opacity = 100;
        }
    }
}