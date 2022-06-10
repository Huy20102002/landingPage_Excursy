AOS.init();

$(document).ready(function(){
let toggle = $('#toggle');
toggle.click(function (e) { 
        e.preventDefault();
        let menu = $('.menu');
        menu.toggleClass('menuResponsive');
        toggle.toggleClass('toggleblock');
    });
});

// close.click(function(e){
//   console.log(close);
//   
// });
// if(menuResponsive){
//     toggle.html(``);
// }