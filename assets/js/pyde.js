var editor = CodeMirror(document.getElementById("codeeditor"), { lineNumbers : true });

$(".execute").click(function() {
	var script = editor.getValue("");
	// console.log(script + "\n");
	// alert(script.replace("\n", ""));

	var apiendpoint;
	$.get("../../config.xml", function(data){
		// console.log(data);
	    apiendpoint = $(data).find("apiendpoint").get(0)["innerHTML"];


	    // var regEx = new RegExp("\/\/(.*)\\n", "g");
	    // script = script.replace(regEx, "");
	    // script = script.trim();
	    console.log(script);
	    if(script != null && script != "") {
	    	script = encodeURI(script);

		    var queryurl = apiendpoint + "/url?pystring=" + script;

		    $.ajax({url: queryurl, success: function(result){
			    // console.log(result);

			    if(result.err != null) {
			    	console.log(result);
			    	var error = result.err;

			    	if(result.err.traceback != null) {
			    		$(".output").html(result.err.traceback.replace("\n", "<br/>"));
			    	} else {
			    		$(".output").html(result.err);
			    	}

			    	$(".output").addClass("error");
			    } else {
			    	$("#outputlabel").text(result.res);
			    	$(".output").removeClass("error");
			    }
		  	}});
	    }

		console.log("end");
	});
});
