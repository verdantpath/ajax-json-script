$(function() {
	var times;
	$.ajax({
		beforeSend: function(xhr) {
			if (xhr.overrideMimeType) {
				xhr.overrideMimeType("application/json");
			}
		}
	});

	// FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
	function loadTimetable() {
		$.getJSON('data/example.json')
		.done(function(data) {
			times = data;
		}).fail(function() {
			$('#event').html('Sorry! We could not load the timetable at the moment');
		});
	}

	loadTimetable();

	// CLICK ON THE EVENT TO LOAD A TIMETABLE
	$('#content').on('click', '#event a', function(e) {
		e.preventDefault();
		var loc = this.id.toUpperCase();

		var newContent = '';
		for (var i = 0; i < times[loc].length; i++) {
			newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
			newContent += '<a href="descriptions.html#';
			newContent += times[loc][i].title.replace(/ /g, '-') + '">';
			newContent += times[loc][i].title + '</a></li>';
		}

		$('#sessions').html('<ul>' + newContent + '</ul>');

		$('#event a.current').removeClass('current');
		$(this).addClass('current');

		$('#details').text('');
	});

});