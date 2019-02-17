 $(document).ready(function () {
       var owl = $('.owl-carousel');
     owl.owlCarousel({
         responsive: {
             0: {
                 items: 1
             },
             480: {
                 items: 2
             },
             992: {
                 items: 3
             },
             1200: {
                 items: 3
             }
         },
         loop: true,
         margin: 50,
         autoplay: true,
         autoplayTimeout: 2000,
         autoplayHoverPause: true
     });
     
     
//     var owl = $('#owl-carousel-1');
//     owl.owlCarousel({
//         responsive: {
//             0: {
//                 items: 1
//             },
//             480: {
//                 items: 2
//             },
//             992: {
//                 items: 3
//             },
//             1200: {
//                 items: 3
//             }
//         },
//         loop: true,
//         margin: 50,
//         autoplay: false,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true,
//         nav: true
//     });
//
//     var owl = $('#owl-carousel-2');
//     owl.owlCarousel({
//         responsive: {
//             0: {
//                 items: 1
//             },
//             480: {
//                 items: 2
//             },
//             992: {
//                 items: 3
//             },
//             1200: {
//                 items: 6
//             }
//         },
//         loop: true,
//         margin: 50,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true
//     });
 });
