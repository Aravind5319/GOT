alert("Welcom to the world of GOT")


 window.onload = function () {
    document.getElementById("enter").onclick = function () {
      var age = document.getElementById("abc").value.trim(); // .trim() removes extra spaces

      if (age === "Aegon") {
        alert("WINTER IS COMING❄️");
        window.location.href = "https://www.hotstar.com/in/shows/game-of-thrones/1971002880";
      } else {
        alert("You idiot get out!!");
      }
    }
  }



// var a=20;
// document.write(a)
// document.write("<br><br>")

// var a=10;
// var b=20;
// var c=a+b;
// document.write("C="+c);
// document.write("<br><br>");

// function m(){
// window.value=100;}

// function n(){
// alert(window.value);}

// m();
// n();

// // function abc(){var x=100;
// document.write(x)}


var modal = document.getElementById("ageModal");
        window.onload = function() {
            modal.style.display = "block";
        }

        document.getElementById("verifyAge").onclick = function() {
            var age = document.getElementById("ageInput").value;
            if (age > 18) {
                modal.style.display = "none";
            } else {
                alert("You must be 18+ to access this site.");
                window.location.href = "https://www.imdb.com/title/tt0944947/";
            }
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


//document.write("<br/>screen.width: " + screen.width);
//document.write("<br/>screen.height: " + screen.height);
