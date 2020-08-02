function myInfo() {

    // Collect weight from html
    var weight = document.getElementById("weight").value;

    // Collect height from html
    var height = document.getElementById("height").value;

    // Calculate bmi
    var bmi = weight / (height * height)


    // between 18.5 - 25 (optimal)
    // < than 18.5 (underweght)
    // > than 25 (overweght)

    if (bmi >= 18.5 && bmi <= 25) {
        var report = "Your Body Mass Index is: " + bmi + " this is between 18.5 and 25, so you are optimal";
        document.getElementById("report").innerHTML

    } else if (bmi < 18.5){
        var report = "Your Body Mass Index is: " + bmi + "this is less than 18.5, so you are underweight";
        document.getElementById("report").innerHTML

    } else {
        var report = "Your Body Mass Index is: " + bmi + " this is greater than 25, so you are overweight";
        document.getElementById("report").innerHTML
 
    }
