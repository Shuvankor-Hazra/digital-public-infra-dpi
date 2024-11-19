document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    // Check if tabs and contents are being selected correctly
    console.log('Tabs:', tabs);
    console.log('Contents:', contents);

    // Initial setup: activate the first tab and show its content
    if (tabs.length > 0 && contents.length > 0) {
        tabs[0].classList.add('text-black', 'border-b-8', 'border-[#139cd8]', 'pb-5');
        contents[0].classList.remove('hidden');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Debug to see which tab is clicked
            console.log('Tab clicked:', tab);

            // Remove active class from all tabs and hide all content
            tabs.forEach(t => t.classList.remove('text-black', 'border-b-8', 'border-[#139cd8]', 'pb-5'));
            contents.forEach(content => content.classList.add('hidden'));

            // Add active class to clicked tab and show corresponding content
            tab.classList.add('text-black', 'border-b-8', 'border-[#139cd8]', 'pb-5');
            const contentId = tab.getAttribute('data-tab');
            const contentToShow = document.querySelector(`[data-content="${contentId}"]`);
            
            // Check if the content to show exists
            if (contentToShow) {
                console.log('Content to show:', contentToShow);
                contentToShow.classList.remove('hidden');
            } else {
                console.error('Content not found for tab:', contentId);
            }
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




// Blog Slider Section
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 10 },
      640: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
    },
  });
});






let activeTab = 'discover';

function setActiveTab(tab) {
    activeTab = tab;

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to the clicked tab
    document.querySelectorAll(`[aria-label="${tab}"]`).forEach(label => {
        label.classList.add('active');
    });

    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        content.classList.add('hidden');
    });

    // Show the active tab content
    document.getElementById(tab).classList.add('active');
    document.getElementById(tab).classList.remove('hidden');
}

// Set the initial active tab
setActiveTab(activeTab);



