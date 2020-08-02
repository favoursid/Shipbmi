function myParcel() {



    // Collect Weight from html
    var Weight = document.getElementById("Weightid").value;

    // Collect Shipping Distance from html
    var Distance = document.getElementById("Distanceid").value;

    if (Weight <= 2) {
        var cost = 1.10 * (Distance / 500)
        document.getElementById("cost").innerHTML = cost;

    } else if (Weight > 2 && weight <= 6) {
        var cost = 2.20 * distance/500 
        document.getElementById("cost").innerHTML = cost

    } else if (Weight > 6 && Weight <= 10) {
        var cost = 3.70 * distance/500 
        document.getElementById("cost").innerHTML = cost
    } else {
        var cost = "Shipping charge per 500 miles will be $3.80";
        document.getElementById("cost")
    } 



}



