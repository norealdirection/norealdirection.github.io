/**
* Wraps a string around each character/letter
*
* @param {string} str The string to transform
* @param {string} tmpl Template that gets interpolated
* @returns {string} The given input as splitted by chars/letters
*/
function wrapChars(str, tmpl) {
	return str.replace(/\w/g, tmpl || "<span>$&</span>");
}

/**
* Wraps a string around each word
*
* @param {string} str The string to transform
* @param {string} tmpl Template that gets interpolated
* @returns {string} The given input splitted by words
*/
function wrapWords(str, tmpl) {
	return str.replace(/\S+/g, tmpl || "<span>$&</span>");
	// return str.replace(/\w+/g, tmpl || "<span>$&</span>");
}

/**
* Wraps a string around each line
*
* @param {string} str The string to transform
* @param {string} tmpl Template that gets interpolated
* @returns {string} The given input splitted by lines
*/
function wrapLines(str, tmpl) {
	return str.replace(/.+$/gm, tmpl || "<span>$&</span>");
}

// all explicitly tagged iih's
var iih = document.getElementsByClassName('iih');

for (let i = 0; i < iih.length; i++) {
	var element = iih[i];
	element.innerHTML = wrapWords( element.innerText );
}

// all strong tags
iih = document.getElementsByTagName('strong');

for (let i = 0; i < iih.length; i++) {
	var element = iih[i];
	element.innerHTML = wrapWords( element.innerText );
}


// carousel/slideshow
var mySwiper = new Swiper('.swiper-container', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: true,
	},

	loop: true,
	
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
 
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	}
 })


// scroll dir
// var lastScrollTop = 0;

// window.addEventListener("scroll", function(){
// 	// Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    var st = window.pageYOffset || document.documentElement.scrollTop; 
//    if (st > lastScrollTop){
// 		// downscroll code
// 		document.documentElement.setAttribute('data-scrolldir', 'down');
//    } else {
//       // upscroll code
// 		document.documentElement.setAttribute('data-scrolldir', 'up');
//    }
//    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);