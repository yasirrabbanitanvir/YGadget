document.addEventListener('DOMContentLoaded', function () {
    var buyNowButtons = document.querySelectorAll('.btn-danger');

    buyNowButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Item added to the cart!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    function addCompanyDescription() {
        var companyDescriptionElement = document.getElementById('company-description');

        if (companyDescriptionElement) {
            companyDescriptionElement.innerHTML = `
                <h1>Welcome to Yasir Gadget BD</h1>
                <p>
                    Your premier destination for cutting-edge electronics. Explore our curated selection and experience
                    innovation, quality, and affordability.
                </p>
                <p>
                    Contact us at <span class="contact-number">0175-2822254</span> or follow us on 
                    <a href="https://www.facebook.com/yasir" target="_blank">Facebook</a>.
                </p>
            `;

            companyDescriptionElement.style.display = 'none';
        }
    }

    function handleVisitMoreButtonClick() {
        var newWindow = window.open('', '_blank');

        var newWindowContent = `
            <html>
            <head>
                <title>Yasir Gadget BD - Company Description</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f5f5f5;
                        padding: 20px;
                        text-align: center;
                        color: #333;
                    }

                    #company-description {
                        background-color: #fff;
                        border: 1px solid #ddd;
                        border-radius: 10px;
                        padding: 20px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        max-width: 600px;
                        margin: 0 auto;
                    }

                    h1 {
                        color: #d35400;
                    }

                    p {
                        color: #555;
                        line-height: 1.6;
                    }

                    .contact-number {
                        font-weight: bold;
                        font-size: 1.2em;
                        color: #e74c3c;
                    }

                    a {
                        color: #3498db;
                        text-decoration: none;
                    }

                    a:hover {
                        text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <div id="company-description">
                    <h1>Welcome to Yasir Gadget BD</h1>
                    <p>
                        Your premier destination for cutting-edge electronics. Explore our curated selection and experience
                        innovation, quality, and affordability.
                    </p>
                    <p>
                        Contact us at <span class="contact-number">0175-2822254</span> or follow us on 
                        <a href="https://www.facebook.com/yasirrabbanitanvir" target="_blank">Facebook</a>.
                    </p>
                </div>
            </body>
            </html>
        `;

        newWindow.document.write(newWindowContent);
        newWindow.document.close();
    }

    var visitMoreButton = document.querySelector('.btn-info');
    if (visitMoreButton) {
        visitMoreButton.addEventListener('click', function (event) {
            event.preventDefault();
            handleVisitMoreButtonClick();
        });
    }

    addCompanyDescription();
});


  // Wait for the document to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Get all showcase elements
    var showcases = document.querySelectorAll(".showcase");

    // Loop through each showcase
    showcases.forEach(function (showcase) {
      // Add event listeners for mouseenter and mouseleave
      showcase.addEventListener("mouseenter", function () {
        // Change border color and add box shadow on hover
        showcase.style.borderColor = "#3498db"; // Change border color to your desired color
        showcase.style.boxShadow = "0 0 10px rgba(52, 152, 219, 0.5)"; // Add a subtle shadow
      });

      showcase.addEventListener("mouseleave", function () {
       
        showcase.style.borderColor = "#ddd"; 
        showcase.style.boxShadow = "none"; // Remove box shadow
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var countdownDate = new Date("Jan 31, 2024 00:00:00").getTime();

    // Update the countdown every second
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countdownDate - now;

      var hours = Math.floor(distance / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("hours").innerText = formatTime(hours);
      document.getElementById("minutes").innerText = formatTime(minutes);
      document.getElementById("seconds").innerText = formatTime(seconds);

      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
      }
    }, 1000);

    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }
  });

