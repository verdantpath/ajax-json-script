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

});