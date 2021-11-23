<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
$(document).ready(function() {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop:[1000,3],
    itemsDesktopSmall:[979,2],
    itemsTablet:[768, 2],
    itemsMobile:[650, 1],
    pagination: true,
    autoPlay: true
  });
});

// const owl = () => {
//     const func = () => {
        
//             ("#testimonial-slider").owlCarousel({
//               items: 3,
//             //   itemsDesktop:[1000,3],
//             //   itemsDesktopSmall:[979,2],
//             //   itemsTablet:[768, 2],
//             //   itemsMobile:[650, 1],
//               pagination: true,
//               autoPlay: true
//             });
//     }

//     return (  
//         func()
//       );
// }

 
// export default owl;