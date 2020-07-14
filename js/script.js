var containerTranslateEmoji = document.querySelector(".container-translate-emoji");
var inputTranslateEmoji = document.querySelector(".input-translate-emoji");
var translate = document.querySelector(".translate");
var containerResultTranslate = document.querySelector(".container-result-translate");




var url = "https://emoji-api.com/emojis?access_key=0dc25633b3d2a84459dbea58c33c31546bc5ac69"

var urlt = "https://emoji-api.com/emojis/"
/*var apiKey = "?access_key=47768909f997dcfca37045591a7854fd6207e53e"*/
var apiKey = "?access_key=0dc25633b3d2a84459dbea58c33c31546bc5ac69"

var dataEmoji = []

translate.addEventListener("click", function(){
	containerResultTranslate.innerHTML = ""
	var inputTranslateEmojiValue = inputTranslateEmoji.value
	var newInputValue = inputTranslateEmojiValue.replace(/ /gi, '-')

	var query = urlt + newInputValue + apiKey

/*	 var xhrEmoji = new XMLHttpRequest()
		xhrEmoji.open("GET", url)
 		xhrEmoji.responseType = "json"
 		xhrEmoji.onload = () => {
 			var data = xhrEmoji["response"]
 			console.log(data)
 		}
 		xhrEmoji.send()*/

 	var xhrEmoji = new XMLHttpRequest()
		xhrEmoji.open("GET", query)
 		xhrEmoji.responseType = "json"
 		xhrEmoji.onload = () => {
 			var data = xhrEmoji["response"]
 			var emoji = data[0]["character"]
 			dataEmoji.push(emoji)	
			for(var i = 0; i < dataEmoji.length; i++){
 				var emojiPicture = document.createElement("div")
 				emojiPicture.classList.add("emoji-picture")
 				containerResultTranslate.appendChild(emojiPicture)
 				emojiPicture.innerHTML = dataEmoji[i]
 			}
 			
 			console.log(emojiPicture)
 		}

 	

 	
 	xhrEmoji.send()
})