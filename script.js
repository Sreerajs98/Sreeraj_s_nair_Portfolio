$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
      "Fullstack Developer",
      "Software Developer",
      "DotNet Developer",
      " Web Developer"
     
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Fullstack Developer",
      "Software Developer",
      "DotNet Developer",
      " Web Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  //  Owl Carousel  //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;
        clearErrors();

        // Name validation
        if (name === '') {
            setError('name', 'Please enter your name.');
            isValid = false;
        } else if (name.length < 2) {
            setError('name', 'Name should be at least 2 characters long.');
            isValid = false;
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            setError('name', 'Name can only contain letters and spaces.');
            isValid = false;
        }

        // Email validation
        if (email === '') {
            setError('email', 'Please enter your email.');
            isValid = false;
        } else if (!validateEmail(email)) {
            setError('email', 'Please enter a valid email address.');
            isValid = false;
        }

        // Subject validation
        if (subject === '') {
            setError('subject', 'Please enter a subject.');
            isValid = false;
        }

        // Message validation
        if (message === '') {
            setError('message', 'Please enter your message.');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function setError(field, message) {
        const errorElement = document.getElementById(`${field}Error`);
        errorElement.textContent = message;
    }

    function clearErrors() {
        document.querySelectorAll('.error').forEach(el => el.textContent = '');
    }
});