		const responseObj = {
			你好: "你好，我是最强人工智能ChatGPT，我能回答你所有问题，快来和我聊天吧！",
			五块钱怎么花三天: "坐公交回去找妈妈",				
			你是小黑子吗: "不，我不是小黑子。我是OpenAI的聊天机器人模型ChatGPT",
			你为什么和我聊天: "只因你太美",
			嘿: "嘿！ 这是怎么回事",
			今天几号: new Date().toDateString(),
			几点了: new Date().toLocaleTimeString(),
		};
		const chatBody = document.querySelector(".chat-body");
		const txtInput = document.querySelector("#txtInput");
		const send = document.querySelector(".send");
		send.addEventListener("click", () => renderUserMessage());
		txtInput.addEventListener("keyup", (event) => {
			if (event.keyCode === 13) {
				renderUserMessage();
			}
		});
		const renderUserMessage = () => {
			const userInput = txtInput.value;
			renderMessageEle(userInput, "user");
			txtInput.value = "";
			setTimeout(() => {
				renderChatbotResponse(userInput);
				setScrollPosition();
			}, 600);
		};
		const renderChatbotResponse = (userInput) => {
			const res = getChatbotResponse(userInput);
			renderMessageEle(res);
		};
		const renderMessageEle = (txt, type) => {
			let className = "user-message";
			if (type !== "user") {
				className = "chatbot-message";
			}
			const messageEle = document.createElement("div");
			const txtNode = document.createTextNode(txt);
			messageEle.classList.add(className);
			messageEle.append(txtNode);
			chatBody.append(messageEle);
		};
		const getChatbotResponse = (userInput) => {
			return responseObj[userInput] == undefined ?
				"听不太懂呢试试输点别的" :
				responseObj[userInput];
		};
		const setScrollPosition = () => {
			if (chatBody.scrollHeight > 0) {
				chatBody.scrollTop = chatBody.scrollHeight;
			}
		};

	