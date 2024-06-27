


const scriptsInEvents = {

	async Gamecode_Event41_Act9(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://twitter.com/zillion_ton';
		var linkText = "follow X";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '30px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '77%';
		div.style.left = '50%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		div.appendChild(link);
		document.body.appendChild(div);
		
	},

	async Gamecode_Event47_Act12(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://t.me/zillion_ton';
		var linkText = "join Group";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '30px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '79%';
		div.style.left = '50%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		div.appendChild(link);
		document.body.appendChild(div);
		
	},

	async Gamecode_Event53_Act9(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://x.com/zillion_ton/status/1805832340024770707';
		var linkText = "RT Post X";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '30px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '81%';
		div.style.left = '50%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		div.appendChild(link);
		document.body.appendChild(div);
		
	},

	async Gamecode_Event114_Act1(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://twitter.com/zillion_ton';
		var linkText = "go to X";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '30px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '33%';
		div.style.left = '41%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		setTimeout(function() {
		    document.body.removeChild(div);
		}, 2000);
		
	},

	async Menucode_Event63_Act1(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://twitter.com/zillion_ton';
		var linkText = "go to X";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '30px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '15%';
		div.style.left = '56%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		setTimeout(function() {
		    document.body.removeChild(div);
		}, 2000);
		
	},

	async Menucode_Event63_Act2(runtime, localVars)
	{
		
	},

	async Menucode_Event64_Act1(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://t.me/zillion_ton';
		var linkText = "go Chat";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '25px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '15%';
		div.style.left = '56%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		setTimeout(function() {
		    document.body.removeChild(div);
		}, 2000);
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

