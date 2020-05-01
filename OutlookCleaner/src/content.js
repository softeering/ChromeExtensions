const debug = true;

$(document).ready(function () {
    consoleLog("Document is ready... updating Outlook.com");

	consoleLog("Removing ads div...");
	$("div._3_hHr3kfEhbNYRFM5YJxH9").remove();
});

function consoleLog(text) {
    if (debug && text) {
        console.log(text);
	}
}
