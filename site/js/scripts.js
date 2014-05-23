;(function ($, window, undefined) {

  	console.log("ready to roll!");
// typewriter by roXon - expanded by Harry //
	
var typewriter = function (element) {
	var txt = $(element).text();
	var timeOut;
	var txtLen = txt.length;
	var char = 0;
	$(element).text('|');
	(function typeIt() {   
		var humanize = Math.round(Math.random() * (200 - 30)) + 5;
		timeOut = setTimeout(function() {
			char++;
			var type = txt.substring(0, char);
			$(element).text(type + '|');
			typeIt();
	
			if (char == txtLen) {
				$(element).text($(element).text().slice(0, -1)); // remove the '|'
				clearTimeout(timeOut);
			}
	
		}, humanize);
	}());
};

typewriter('h1');
//after the typing, the stuff comes out
$('#content, footer').hide();
setTimeout(function(){
	$('#content, footer').show();
},6000);

  var Modernizr = window.Modernizr;

  //$('input, textarea').placeholder();

  // mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);