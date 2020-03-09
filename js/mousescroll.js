// window.scroll({
//   top: 2500, 
//   left: 0, 
//   behavior: 'smooth'
// });

// // Scroll certain amounts from current position 
// window.scrollBy({ 
//   top: 100, // could be negative value
//   left: 0, 
//   behavior: 'smooth' 
// });

// // Scroll to a certain element
// document.querySelector('.hello').scrollIntoView({ 
//   behavior: 'smooth' 
// });
function yoxla(a){
	if($(a).val().length>7){
		$(a).val(($(a).val().substr(0,7)));
	}
}