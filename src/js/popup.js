function generate_qr(content,width = 200, height = 200) {
	var qrcode = new QRCode({
		content: content,
		container: 'svg',
		width: width,
		height: height,
		join: true
	})
	document.getElementById("qr").innerHTML = qrcode.svg();
}

browser.tabs.query({currentWindow: true, active: true})
	.then((tabs) => {
		if (tabs[0].url.substring(0,4) === 'http') {
			generate_qr(tabs[0].url)
		}
	})
