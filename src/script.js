document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    // Set the first tab and content as active
    tabs[0].classList.add('text-black', 'border-b-8', 'border-[#139cd8]','pb-5');
    contents[0].classList.remove('hidden');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and hide all content
            tabs.forEach(t => t.classList.remove('text-black', 'border-b-8', 'border-[#139cd8]'));
            contents.forEach(content => content.classList.add('hidden'));

            // Add active class to clicked tab and show corresponding content
            tab.classList.add('text-black', 'border-b-8', 'border-[#139cd8]','pb-5');
            const contentId = tab.getAttribute('data-tab');
            document.querySelector(`[data-content="${contentId}"]`).classList.remove('hidden');
        });
    });
});



// Mobile Menu Toggle
const hamburgerButton = document.getElementById("hamburgerButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeButton = document.getElementById("closeButton");

// Show Mobile Menu
hamburgerButton.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});

// Close Mobile Menu
closeButton.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

// Close menu when clicking outside the menu
document.addEventListener("click", (event) => {
  if (!mobileMenu.contains(event.target) && event.target !== hamburgerButton) {
    mobileMenu.style.display = "none";
  }
});





// Blog 
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3, // Default for large screens (desktop)
    spaceBetween: 20, // Adjust the space between slides
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Scrollbar (if needed)
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
      // Mobile (screen width less than 640px)
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // Tablet (screen width between 640px and 1024px)
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      // Desktop (screen width 1024px and above)
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  });
});
