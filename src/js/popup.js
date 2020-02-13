browser.tabs.query({currentWindow: true, active: true})
	.then((tabs) => {
		if (tabs[0].url.substring(0,4) === 'http') {
			var qrcode = new QRCode({
				content: tabs[0].url,
				container: "svg",
				width:200,
				height:200,
				join: true
			})
			document.getElementById("qr").innerHTML = qrcode.svg();
		} else {
			document.getElementById("qr").innerHTML = "<p>Invalid Window</p>";
		}
	})
