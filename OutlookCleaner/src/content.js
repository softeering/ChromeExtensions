const debug = true;

$(document).ready(function () {
    consoleLog("Document is ready... updating Outlook.com");
	setTimeout(() => {
		consoleLog("Removing ads div...");
		$('a[href*="ad-free-outlook"]').parent().parent().parent().parent().remove();
	}, 10000);
});

function consoleLog(text) {
    if (debug && text) {
        console.log(text);
	}
}
