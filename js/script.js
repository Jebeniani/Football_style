import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import './js/cart.js';

const firebaseConfig = {
  apiKey: "AIzaSyBiWllx10e1WGdN4t4GfnLCXKYsbPennp4",
  authDomain: "football-style.firebaseapp.com",
  projectId: "football-style",
  storageBucket: "football-style.appspot.com",
  messagingSenderId: "517497642481",
  appId: "1:517497642481:web:b3eb9c42eb49ec32a27850",
  measurementId: "G-C5BFWG8T5C"
};



(function ($) {
  'use strict';

  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '<div class="slick-control-prev"><i class="tf-ion-android-arrow-back"></i></div>',
    nextArrow: '<div class="slick-control-next"><i class="tf-ion-android-arrow-forward"></i></div>'
  });

  $('.widget-categories .has-children').on('click', function () {
    $('.widget-categories .has-children').removeClass('expanded');
    $(this).addClass('expanded');
  });

  // Count Down JS
  $('#simple-timer').syotimer({
    year: 2023,
    month: 9,
    day: 29,
    hour: 8,
    minute: 15
  });

  // bootstrap slider range
  $('.range-track').slider({});
  $('.range-track').on('slide', function (slideEvt) {
    $('.value').text('$' + slideEvt.value[0] + ' - ' + '$' + slideEvt.value[1]);
  });

  // overlay search
  $('.search_toggle').on('click', function (e) {
    e.preventDefault();
    $('.search_toggle').toggleClass('active');
    $('.overlay').toggleClass('open');
    setTimeout(function () {
      $('.search-form .form-control').focus();
    }, 400);
  });

  // Initialize Firestore (make sure you've configured Firebase in your project)
  const app = initializeApp(firebaseConfig);

  const cartIcon = document.querySelector("fas fa-shopping-cart");
  cartIcon.addEventListener('click', addToCart);


  function addToCart(productName, price) {

    const product = {
      name: productName,
      price: price,
  };
    // Get product details from the clicked element or any other source
    const productId = 'real_home';
    const productName = 'Real Madrid Home Kit';
    const productPrice = 120.00;

    cart.push(product);

    db.collection('cart').doc(productId).set({
      name: productName,
      price: productPrice,
    });

    updateCartCount(cart.length);
    updateCartCountFromFirestore();

  }

  function updateCartCountFromFirestore() {
    db.collection('cart').get().then((querySnapshot) => {
      const count = querySnapshot.size;
      updateCartCount(count);
    });
  }

  function updateCartCount(count) {
    const cartCountElement = document.getElementById('real_home');
    cartCountElement.textContent = count;
  }


})(jQuery);

