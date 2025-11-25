      
        // Add this script to your existing JavaScript section
// document.addEventListener('DOMContentLoaded', function() {
//     const toggleBtn = document.getElementById('accessibilityToggle');
//     const controlsContainer = document.getElementById('accessibilityControls');
//     const closeBtn = document.getElementById('closeAccessibilityPanel');

//     // Function to show the panel
//     function showPanel() {
//         controlsContainer.classList.add('active');
//         controlsContainer.classList.remove('hidden');
//     }

//     // Function to hide the panel
//     function hidePanel() {
//         controlsContainer.classList.remove('active');
//         // Delay hiding to allow for smooth transition
//         setTimeout(() => {
//             if (!controlsContainer.classList.contains('active')) {
//                 controlsContainer.classList.add('hidden');
//             }
//         }, 300); // Match the transition duration
//     }

//     // Toggle visibility on button click
//     toggleBtn.addEventListener('click', function(e) {
//         e.stopPropagation(); // Prevent event bubbling
//         if (controlsContainer.classList.contains('hidden') || !controlsContainer.classList.contains('active')) {
//             showPanel();
//         } else {
//             hidePanel();
//         }
//     });

//     // Close panel when close button is clicked (for mobile/small screens)
//     if (closeBtn) {
//         closeBtn.addEventListener('click', function(e) {
//             e.stopPropagation();
//             hidePanel();
//         });
//     }

//     // Close panel when clicking outside of it
//     document.addEventListener('click', function(e) {
//         if (!controlsContainer.contains(e.target) && !toggleBtn.contains(e.target)) {
//             hidePanel();
//         }
//     });

//     // Optional: Close panel on escape key press
//     document.addEventListener('keydown', function(e) {
//         if (e.key === 'Escape' && !controlsContainer.classList.contains('hidden') && controlsContainer.classList.contains('active')) {
//             hidePanel();
//         }
//     });
// });


// let currentPage = 'home';
//         let currentTestimonial = 0;
//         let scrolled = false;
//         let activeHeroImage = 0;
//        let heroImages = [
//     'faan_hero.jpg', // Index 0
//     'faan_hero3.jpg', // Index 1
//     'faan_hero2.jpeg', // Index 2
//     // Add more URLs if you have more .hero-image divs
// ];
//         let textFontSize = 'text-base';
//         let currentLanguage = 'en';

//         // DOM Elements
//         const header = document.getElementById('header');
//         const mobileMenuButton = document.getElementById('mobile-menu-button');
//         const mobileMenu = document.getElementById('mobile-menu');
//         const testimonialContainer = document.getElementById('testimonial-container');
//         const heroImagesElements = document.querySelectorAll('.hero-image');

//         // Initialize the page
//         document.addEventListener('DOMContentLoaded', function() {
//             // Set up scroll event listener
//             window.addEventListener('scroll', handleScroll);
            
//             // Set up testimonial rotation
//             setInterval(rotateTestimonials, 5000);
            
//             // Set up hero image rotation
//             setInterval(rotateHeroImages, 4000);
            
//             // Set initial testimonial
//             updateTestimonialDisplay();
            
//             // Set initial hero image
//             updateHeroImageDisplay();
            
//             // Set up mobile menu toggle
//             mobileMenuButton.addEventListener('click', toggleMobileMenu);
//         });

//         // Handle scroll effects
//         function handleScroll() {
//             scrolled = window.scrollY > 50;
//             header.classList.toggle('scroll-header', scrolled);
//         }

//         // Toggle mobile menu
//         function toggleMobileMenu() {
//             mobileMenu.classList.toggle('active');
//         }

//         // Change page content
        function changePage(page) {
            // Hide all pages
            document.getElementById('home-page').classList.add('hidden');
            document.getElementById('faq-page').classList.add('hidden');
            document.getElementById('privacy-page').classList.add('hidden');
            document.getElementById('terms-page').classList.add('hidden');
            
            // Update navigation
            document.querySelectorAll('nav button').forEach(btn => {
                btn.classList.remove('current-page');
            });
            
            // Show selected page
            if (page === 'home') {
                document.getElementById('home-page').classList.remove('hidden');
                document.querySelector('nav button[onclick="changePage(\'home\')"]').classList.add('current-page');
            } else if (page === 'faqs') {
                document.getElementById('faq-page').classList.remove('hidden');
                document.querySelector('nav button[onclick="changePage(\'faqs\')"]').classList.add('current-page');
            } else if (page === 'privacy') {
                document.getElementById('privacy-page').classList.remove('hidden');
            } else if (page === 'terms') {
                document.getElementById('terms-page').classList.remove('hidden');
            }
            
            currentPage = page;
        }

//         // Rotate testimonials
//         function rotateTestimonials() {
//             currentTestimonial = (currentTestimonial + 1) % 3;
//             updateTestimonialDisplay();
//         }

//         // Update testimonial display
//         function updateTestimonialDisplay() {
//             const slides = document.querySelectorAll('.testimonial-slide');
//             slides.forEach((slide, index) => {
//                 if (index === currentTestimonial) {
//                     slide.classList.add('active');
//                 } else {
//                     slide.classList.remove('active');
//                 }
//             });
            
//             // Update indicators
//             const indicators = document.querySelectorAll('.testimonial-indicator');
//             indicators.forEach((indicator, index) => {
//                 if (index === currentTestimonial) {
//                     indicator.classList.add('active');
//                 } else {
//                     indicator.classList.remove('active');
//                 }
//             });
//         }

//         // Change testimonial
//         function changeTestimonial(index) {
//             currentTestimonial = index;
//             updateTestimonialDisplay();
//         }

//         // Rotate hero images
//         function rotateHeroImages() {
//             activeHeroImage = (activeHeroImage + 1) % heroImages.length;
//             updateHeroImageDisplay();
//         }

    
//         function updateHeroImageDisplay() {
//             heroImagesElements.forEach((img, index) => {
//                 if (index === activeHeroImage) {
//                     img.classList.add('active');
//                     // Apply enhanced image effects when active
//                     img.style.filter = 'brightness(1.15) contrast(1.15) saturate(1.15)';
//                 } else {
//                     img.classList.remove('active');
//                     img.style.filter = '';
//                 }
//             });
//         }

    // Toggle FAQ
    function toggleFAQ(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
    }


// function changeTextSize(size) {
//                 const sizes = {
//                     'small': 'text-sm',
//                     'normal': 'text-base',
//                     'large': 'text-lg',
//                     'xlarge': 'text-xl',
//                     'xxlarge': 'text-2xl'
//                 };
//                 // Remove any existing size classes from the body
//                 const currentClasses = document.body.className.split(' ');
//                 const filteredClasses = currentClasses.filter(cls => !cls.startsWith('text-') || cls === 'text-base'); // Keep 'text-base' if it's the default
//                 document.body.className = filteredClasses.join(' ');

//                 // Add the new size class
//                 if (sizes[size]) {
//                     document.body.classList.add(sizes[size]);
//                 }

//                 // Update active button (assuming event is available)
//                 if (event) {
//                     document.querySelectorAll('.text-size-btn').forEach(btn => {
//                         btn.classList.remove('active');
//                     });
//                     event.target.classList.add('active');
//                 }

//                 // Save the selected text size to localStorage for persistence
//                 localStorage.setItem('selectedTextSize', size);
//             }

//             // --- PRODUCTION: Load Text Size on Page Load ---
//             document.addEventListener('DOMContentLoaded', function() {
//                 // Check if a text size was previously selected
//                 const savedTextSize = localStorage.getItem('selectedTextSize');
//                 if (savedTextSize) {
//                     // If a saved size exists, apply it
//                     changeTextSize(savedTextSize);
//                 }
//             });