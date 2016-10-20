console.log('js is linked');

$(function(){

 let sideNav = $('#sideNav');

// function disintegrate () {
//   var greetingPage = $('#firstPage');
//   greetingPage.on('click', function(e){
//     greetingPage
//       .hide();
//       off();

//   })
// }
// disintegrate();

// function showNav() {
//   sideNav.style.width = '250px';
// }

// function hideNav() {
//   sideNav.style.width = '250px';
// }

sideNav.hover(function(){
  sideNav.css('width', '250px')
})

sideNav.mouseout(function(){
  sideNav.css('width', '114px')
})
})
