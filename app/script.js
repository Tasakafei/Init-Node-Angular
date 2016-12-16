
function update (restriction, endOnly) {
	interact("#drag-me")
		.draggable({
			inertia: true,
			restrict: {
				restriction: restriction,
				endOnly: endOnly,
				elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
			},
			onmove: dragMoveListener,
		})
}

update("#table", true);

var isin = false;


function firstContainsSecond(r1, r2) {
	if (r2.x < r1.x || r2.y < r1.y)
		return false;

	r1.width += r1.x;
	r2.width += r2.x;
	if (r2.width <= r2.x) {
		if (r1.width >= r1.x || r2.width > r1.width)
			return false;
	} else {
		if (r1.width >= r1.x && r2.width > r1.width)
			return false;
	}
	r1.height += r1.y;
	r2.height += r2.y;
	if (r2.height <= r2.y) {
		if (r1.height >= r1.y || r2.height >= r1.height)
			return false;
	} else {
		if (r1.height >= r1.y && r2.height > r1.height)
			return false;
	}
	return true;
}

function dragMoveListener (event) {
	var target = event.target;
	var centralZone = $("#central-zone");
	var table = $("#table");

	// keep the dragged position in the data-x/data-y attributes
	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
		y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	var r1 = {x: 0, y: 0, height: table.height(), width: table.width()};
	var r2 = {x: x, y: y, height: $(target).height(), width: $(target).width()};

	if (!firstContainsSecond(r1, r2)) {
		return;
	}
	// translate the element
	target.style.webkitTransform =
		target.style.transform =
			'translate(' + x + 'px, ' + y + 'px)';

	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}


interact('#central-zone').dropzone({
	// only accept elements matching this CSS selector
	accept: '#drag-me',
	overlap: 1,

	ondragenter: function (event) {
		var elem = $("#central-zone");
		var pos = elem.offset();

		update({ x:pos.left, y:pos.top, width:elem.width(), height:elem.height() }, true);
	},
});