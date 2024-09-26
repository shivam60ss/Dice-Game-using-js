function refresh() {
    // Generate random numbers between 1 and 6 for both players
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
    // Set the corresponding dice image for Player 1
    var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

    var image1 = document.querySelector(".img1");
    image1.setAttribute("src", randomImageSource1);
  
    // Set the corresponding dice image for Player 2
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelector(".img2");

    image2.setAttribute("src", randomImageSource2);
  
    // Display the winner player 
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h2").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {

      document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h2").innerHTML = "It's a Draw! ";

    }
  }


  