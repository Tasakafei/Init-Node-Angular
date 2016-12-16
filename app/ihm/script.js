
function update (restriction) {
	interact("#drag-me")
	.draggable({
		inertia: true,
		restrict: {
			restriction: restriction,
			endOnly: true,
			elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		},
		onmove: dragMoveListener,
	})
}

update("#table");

var isin = false;
	
function dragMoveListener (event) {
    var target = event.target,
	// keep the dragged position in the data-x/data-y attributes
	x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
	y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

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
	
	update({ x:pos.left, y:pos.top, width:elem.width(), height:elem.height() });
  },
});
