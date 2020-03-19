var user = 'Visitor';
var salutation = 'Welcome, ';
var greeting = salutation + user + '! Here is our salad menu.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;


            var myIndex = 0;
            autoslide();

            function autoslide() {
              var i;
              var x = document.getElementsByClassName("slideshow");
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
              }
              myIndex++;
              if (myIndex > x.length) {myIndex = 1}    
              x[myIndex-1].style.display = "block";  
              setTimeout(autoslide, 2500);
            }