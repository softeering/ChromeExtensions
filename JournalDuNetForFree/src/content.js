const debug = true;

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', cleanPage);
} else {
	cleanPage();
}

function cleanPage() {
	consoleLog("Document is ready... updating JournalDuNet");

	document.querySelector("div.reg_wall").remove();
	document.querySelector("div.layout_right").remove();
	document.querySelector("div.layout--offcanvas").classList.remove("layout--offcanvas");
	document.querySelector("div.layout_main").style.width = "99%";
	var articleDiv = document.querySelector("div.entry_reg_wall");
	articleDiv.style.height = "1000px";
	articleDiv.style.overflowY = "auto";
}

function consoleLog(text) {
	if (debug && text) {
		console.log(text);
	}
}
