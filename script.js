document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Sticky Navbar
  window.onscroll = function () { stickyNavbar(); };

  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;

  function stickyNavbar() {
      if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
      } else {
          navbar.classList.remove("sticky");
      }
  }

  // Initialize Chart.js Pie Chart
  const ctx = document.getElementById('calorieChart').getContext('2d');
  const calorieChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Protein', 'Carbs', 'Fats'],
          datasets: [{
              data: [30, 50, 20], // Example Data
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
              }
          }
      }
  });
});
