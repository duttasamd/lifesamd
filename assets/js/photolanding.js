var totalimages = 44;

const pathtoimg = "../assets/img/instafit/";
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
		var imgsrc = pathtofullimg + $(this).attr('id') + ".jpg";
		$("#showcasepic").attr("src", imgsrc);
		$("#showcase").modal('show');
	}
);

$('#showcase').on('show.bs.modal', function () {
	$('.modal-content').css('height',$( window ).height()*0.8);
});
