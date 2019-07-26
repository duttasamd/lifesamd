var totalimages = 44;

let pathtoimg = "../assets/img/instafit/";
let pathtoloadingicon = "http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif";

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	pathtoimg = "../assets/img/instamobi/"
}
const pathtofullimg = "../assets/img/instagram/"


var imgcount = 1;
var rowcount = 0;

for(imgcount = 1; imgcount <= totalimages; imgcount++) {

	if(imgcount % 3 === 1) {
		rowcount++;
		$(".albumcontainer").append('<div class="row imgrow" id="' + rowcount +'">');
	} else if(totalimages % imgcount === 3) {
		$(".albumcontainer").append('</div>');
	}

	var rowID = "#" + rowcount + "";
	$(rowID).append('<div class="col-4 imgcol loading"><img class="postimg img-fluid" object-fit="cover" id="insta_'+ imgcount +'" src="' + pathtoimg + "insta_" + imgcount + '.jpg' + '"></div>');
}

$('img').on('load', function(){
   $(this).css('background','none');
});

$('.postimg').click(
	function(){
		console.log("show modal: " + $(this).attr('id'));
		var imgsrc = pathtofullimg + $(this).attr('id') + "-.jpg";
		// $("#showcasepic").attr("src", imgsrc);
		// $("#showcase").modal('show');

		var modal = document.getElementById("showcase");
		modal.style.display = "flex";
		var modalImg = document.getElementById("showcasepic");
  		modalImg.src = imgsrc;

  		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modalImg.src = pathtoloadingicon;
		  	modal.style.display = "none";
		}
	}
);

// $('#showcase').on('show.bs.modal', function () {
// 	$('.modal-content').css('height',$( window ).height()*0.8);
// });
