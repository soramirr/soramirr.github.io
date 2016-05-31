var canClick = false;

$(document).ready(function() {
	//Hide text
	$('.animation').hide();
	$('.web').hide();
	$('.software').hide();
	$('.about').hide();
	$('.quicknav').hide();
	$('.back').hide();

  var length,
  	  t1side1Timeline = new TimelineMax(),
  	  t1side2Timeline = new TimelineMax(),
  	  t1side3TopTimeline = new TimelineMax(),
  	  t1side3BottomTimeline = new TimelineMax();
  	  t2side1Timeline = new TimelineMax(),
  	  t2side2Timeline = new TimelineMax(),
  	  t2side3TopTimeline = new TimelineMax(),
  	  t2side3BottomTimeline = new TimelineMax(),
  	  square1Timeline = new TimelineMax(),
  	  square2Timeline = new TimelineMax(),
  	  square3Timeline = new TimelineMax(),
  	  square4Timeline = new TimelineMax();

  //the function for the "control" animation that doesn't change and has no curviness
  function populateTimelines() {
  	//Top edge
	t1side1Timeline.to($(".t1-side1"), 1, {
		bezier: {
			type: "thru",
			values: [{x: -5.3, y: 0}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
		t1side1Timeline.to($(".t1-side1"), 2, {
		bezier: {
			type: "thru",
			values: [{x: -60, y: -27.3}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	//Left edge top half
	t1side3TopTimeline.to($(".t1-side3-top"), 1, {
		rotation: 116.5,
		bezier: {
			type: "thru",
			values: [{x: -5.3, y: 0}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	t1side3TopTimeline.to($(".t1-side3-top"), 2, {
		bezier: {
			type: "thru",
			values: [{x: -60, y: -27.3}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	//Bottom edge
	t1side2Timeline.to($(".t1-side2"), 1, {
		bezier: {
			type: "thru",
			values: [{x: -5, y: 0}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	t1side2Timeline.to($(".t1-side2"), 2, {
		bezier: {
			type: "thru",
			values: [{x: -60, y: 27.7}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	//Left edge bottom half
	t1side3BottomTimeline.to($(".t1-side3-bottom"), 1, {
		rotation: -116.5,
		transformOrigin:"bottom 50%",
		bezier: {
			type: "thru",
			values: [{x: -5, y: 0}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	t1side3BottomTimeline.to($(".t1-side3-bottom"), 2, {
		bezier: {
			type: "thru",
			values: [{x: -60, y: 27.7}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});

	//Right triangle
  	//Top edge
	t2side1Timeline.to($(".t2-side1"), 1, {
		bezier: {
			type: "thru",
			values: [{x: 5.7, y: 0}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	t2side1Timeline.to($(".t2-side1"), 2, {
		bezier: {
			type: "thru",
			values: [{x: 60, y: -26.8}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	//Left edge top half
	t2side3TopTimeline.to($(".t2-side3-top"), 1, {
		rotation: -116.5,
		bezier: {
			type: "thru",
			values: [{x: 5.7, y: 0}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	t2side3TopTimeline.to($(".t2-side3-top"), 2, {
		bezier: {
			type: "thru",
			values: [{x: 60, y: -26.8}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	//Bottom edge
	t2side2Timeline.to($(".t2-side2"), 1, {
		bezier: {
			type: "thru",
			values: [{x: 5.7, y: 0}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	t2side2Timeline.to($(".t2-side2"), 2, {
		bezier: {
			type: "thru",
			values: [{x: 60, y: 27.5}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	//Left edge bottom half
	t2side3BottomTimeline.to($(".t2-side3-bottom"), 1, {
		rotation: 116.5,
		transformOrigin: "bottom 50%",
		bezier: {
			type: "thru",
			values: [{x: 5.7, y: 0}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});
	t2side3BottomTimeline.to($(".t2-side3-bottom"), 2, {
		bezier: {
			type: "thru",
			values: [{x: 60, y: 27.5}],
			curviness: 0
		},
		ease: Power1.easeInOut
	});

	setTimeout(function() {
		//Square1
		square1Timeline.to($(".square1"), 2, {
			strokeDashoffset: 180
		});
		square1Timeline.to($(".square1"), 1, {
			transformOrigin: "50% 50%",
			rotation: 57,
			strokeDashoffset: 0,
			scale: "1.25",
			scaleX: "0.375",
			skewX: 30
		});
		square1Timeline.to($(".square1"), 1, {
			bezier: {
				type: "thru",
				values: [{x:-11.5, y:25}],
				curviness: 0
			},
			fill: "black"
		});
		//Square2
		square2Timeline.to($(".square2"), 2, {
			strokeDashoffset: 180
		});
		square2Timeline.to($(".square2"), 1, {
			transformOrigin: "50% 50%",
			rotation: 57,
			strokeDashoffset: 0,
			scale: "1.25",
			scaleX: "0.375",
			skewX: 30
		});
		square2Timeline.to($(".square2"), 1, {
			bezier: {
				type: "thru",
				values: [{x:-15, y:0}],
				curviness: 0
			},
			fill: "black"
		});
		//Square3
		square3Timeline.to($(".square3"), 2, {
			strokeDashoffset: 180
		});
		square3Timeline.to($(".square3"), 1, {
			transformOrigin: "50% 50%",
			rotation: 57,
			strokeDashoffset: 0,
			scale: "1.25",
			scaleX: "0.375",
			skewX: 30
		});
		square3Timeline.to($(".square3"), 1, {
			bezier: {
				type: "thru",
				values: [{x:11.95, y:-25.2}],
				curviness: 0
			},
			fill: "black"
		});
		//Square4
		square4Timeline.to($(".square4"), 2, {
			strokeDashoffset: 180
		});
		square4Timeline.to($(".square4"), 1, {
			transformOrigin: "50% 50%",
			rotation: 57,
			strokeDashoffset: 0,
			scale: "1.25",
			scaleX: "0.375",
			skewX: 30
		});
		square4Timeline.to($(".square4"), 1, {
			bezier: {
				type: "thru",
				values: [{x:15, y:0.5}],
				curviness: 0
			},
			fill: "black"
			// fill: "url(#square1-img)"
		});

		//Give squares idle animation and make them clickable
		setTimeout(function() {
			for(i=0; i<4; i++) {
				document.getElementsByClassName("square")[i].style.animation = "square-idle 5s linear infinite";
				document.getElementsByClassName("square-anchor")[i].style.cursor = "pointer";
				document.getElementsByClassName("square-text")[i].style.animation = "fade-svg-text-in 2s linear 1";
			}
			document.getElementsByClassName("square-text")[4].style.animation = "fade-svg-text-in 2s linear 1";
			canClick = true;
			setTimeout(function() {
				for(i=0; i<5; i++) {
					document.getElementsByClassName("square-text")[i].style.fill = "white";
				}
			}, 2000);
		}, 4000);
	}, 1000);
  }

  //Uncomment in final product
   setTimeout(populateTimelines, 1500);
  //populateTimelines();

});

checkClick = function(toshow) {
	if(canClick) {
		//Populate quicknav
		for(i=0; i<$(toshow+'-header').size(); i++) {
			//If item is a subheader
			if($(toshow+'-header')[i].className.indexOf('-subheader') > -1) {
				$('.quicknav').append("<a href='#' onclick='return quicknavScroll(\"" + toshow + "-header\", " + i + ", \"" + toshow + "\")' class='quicknav-item quicknav-subitem'><p class='quicknav-item-p quicknav-subitem-p'>" + $(toshow+'-header')[i].innerHTML + "</p></a>");
				//Find parent item
				var j = i;
				while($(toshow+'-header')[j].className.indexOf('-subheader') > -1) {
					j--;
				}
				//Add a plus to the parent item
				$('.quicknav-item')[j].innerHTML = "<a href='#' onclick='return expandQuicknav(" + j + ")' class='quicknav-plus'>+</a> " + $(toshow+'-header')[j].innerHTML;
			//If item is not a subheader
			} else {
				$('.quicknav').append("<a href='#' onclick='return quicknavScroll(\"" + toshow + "-header\", " + i + ", \"" + toshow + "\")' class='quicknav-item'><p class='quicknav-item-p'>" + $(toshow+'-header')[i].innerHTML + "</p></a>");
			}
		}

		$('.quicknav-subitem').hide();

		//Disable scrolling when plus/minus is clicked
		$('.quicknav-plus').click(function(e) {
			e.stopPropagation();
		});

		//Hide squares
		$('.square').hide("slow");
		$('.square-text').hide("slow");
		//Show appropriate text
		setTimeout(function() {
			$(toshow).show("slow");
			$('.quicknav').show("slow");
			$('.back').show("slow");
		}, 1200);

		//Return true
		return true;
	} else {
		return false;
	}
}

quicknavScroll = function(target, i, parent) {
	var p = document.querySelectorAll(target)[i].offsetTop;
	$(parent).animate({scrollTop: p});
	return true;
}

expandQuicknav = function(i) {
	//Rotate and change sign
	$target = $('.quicknav-item')[i].children[0];
	if($target.innerHTML == "+") {
		$target.className = "quicknav-plus rotate";
		setTimeout(function() {
			$target.innerHTML = "-";
		}, 250);

		//Show child elements
		var j = i + 1;
		while($('.quicknav-item')[j].className.indexOf('-subitem') > -1) {
			j++;
		}
		var n = i;
		$('.quicknav-item').each(function() {
			if(n < j) {
				$(this).show();
			}
		});
	} else {
		$target.className = "quicknav-plus rotate2";
		setTimeout(function() {
			$target.innerHTML = "+";
		}, 250);

		//Hide child elements
		var j = i + 1;
		while($('.quicknav-item')[j].className.indexOf('-subitem') > -1) {
			j++;
		}
		var n = i;
		$('.quicknav-item').each(function(index) {
			if(index < j && index > i) {
				$(this).hide();
			}
		});
	}

	return true;
}

$('.back-text').click(function() {
	//Hide text
	$('.animation').hide("slow");
	$('.web').hide("slow");
	$('.software').hide("slow");
	$('.about').hide("slow");
	$('.quicknav').hide("slow");
	$('.back').hide("slow");

	//Show squares
	setTimeout(function() {
		$('.square').show("slow");
		$('.square-text').show("slow");
	}, 1200);

	//Empty quicknav
	$('.quicknav').empty();
});
