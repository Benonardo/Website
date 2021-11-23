function copyIP() {
	var before = document.getElementById("ip").innerText;
	var ip = document.getElementById("ip");
	var range = document.createRange();
	range.selectNode(ip);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	
	ip.innerText = ip_copied;
	setTimeout(
	function() {
		ip.innerText = before;
	}, 900);
}

window.onload = function() {
	// MC API
	const status_message = document.querySelector('.server-status')
	const status_container = document.querySelector('.server-status-container')
	MinecraftAPI.getServerStatus(server_ip, {
		port: server_port
	}, function (err, status) {
		if (err) {
			status_container.innerHTML = "Status von <span class='info'>" + server_ip + "</span> kann nicht abgefragt werden<br><span class='info' style='color: #ff4545; font-size: .5em;'>" + err
		} else if (status.online == false) {
			// If status.last_online returns "undefined". That means the API hasn't accessed your server yet so it doesn't know when it was last online
			status_container.innerHTML = "Server ist <span class='info' style='color:#ff4545'>offline</span>. Letzte Überprüfung " + (status.last_online / 60)
		} else {
			status_message.innerText = status.players.now;
		}
	});
}

$(document).ready(function() {
	$.firefly({images: ['img/firefly.jpg'], total: firefly_count});
});
