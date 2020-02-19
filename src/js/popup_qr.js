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
