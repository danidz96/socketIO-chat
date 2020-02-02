const generateMessage = (text) => ({ text, createdAt: new Date().getTime() });

const generateLocationMessage = (username, url) => ({ username, url, createdAt: new Date().getTime() });

module.exports = {
	generateMessage,
	generateLocationMessage
};
