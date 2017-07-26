// Saves options to chrome.storage
function save_options() {
	var time = document.getElementById("time").checked;
	chrome.storage.sync.set({
		displayTime: time
	}, function() {
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});
}

// Restores previous settings
// that have been stored in chrome.storage object
function restore_options() {
	chrome.storage.sync.get({
		// default value for displayTime
		displayTime: false
	}, function(items) {
		document.getElementById("time").checked = items.displayTime;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);