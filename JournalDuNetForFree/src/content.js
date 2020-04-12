const debug = true;

$(document).ready(function () {
    consoleLog("Document is ready... updating JournalDuNet");

	consoleLog("Removing regwall...");
	$(".reg_wall").remove();
	consoleLog("Removing regwall...");
	$(".entry_reg_wall").css("height", "1200px").css("overflow-y", "auto");
});

function consoleLog(text) {
    if (debug && text) {
        console.log(text);
	}
}
