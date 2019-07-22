var totalimages = 49;

const pathtoimg = "../assets/img/instafit/"


var imgcount = 1;
var rowcount = 0;

for(imgcount = 1; imgcount <= totalimages; imgcount++) {

	if(imgcount % 3 === 1) {
		rowcount++;
		$(".albumcontainer").append('<div class="row imgrow" id="' + rowcount +'">');
	} else if(totalimages % imgcount === 3) {
		console.log(rowcount);
		console.log("rem3" + imgcount);
		$(".albumcontainer").append('</div>');
	}
	console.log("No div" + imgcount);

	var rowID = "#" + rowcount + "";
	$(rowID).append('<div class="col-4 imgcol"><img class="postimg img-fluid" object-fit="cover" src="' + pathtoimg + "insta_" + imgcount + '.jpg' + '"></div>');
}

