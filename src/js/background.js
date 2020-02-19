browser.contextMenus.create({
	id: "link-to-qr",
	title: "Make QR with link",
	contexts: ["link"],
})

browser.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "link-to-qr") {
		const safeURL = escapeHTML(info.linkUrl)
		browser.tabs.create({url: "/qr.html"}).then(() => {
			browser.tabs.executeScript({
				code: 'generate_qr("' + safeURL + '", 300, 300);'
			})
		})
	}
})

function escapeHTML(str) {
	return String(str)
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;").replace(/'/g, "&#39;")
		.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}


