document.querySelector(".form").addEventListener("submit", function (event) {
	event.preventDefault();

	const username = document.querySelector('input[name="username"]').value;
	const tel = document.querySelector('input[name="tel"]').value;
	const mail = document.querySelector('input[name="mail"]').value;
	const feedback = document.querySelector('textarea[name="feedback"]').value;
	const unsubscribe = document.querySelector('input[name="unsubscribe"]').checked;

	const submitTime = new Date();

	const formData = {
		username: username,
		tel: tel,
		mail: mail,
		feedback: feedback,
		unsubscribe: unsubscribe,
		submitTime: submitTime,
	};

	alert(
		"Ім'я: " +
			username +
			"\n" +
			"Телефон: " +
			tel +
			"\n" +
			"Пошта: " +
			mail +
			"\n" +
			"Коментар: " +
			feedback +
			"\n" +
			"Погоджуюся з розсилкою: " +
			unsubscribe +
			"\n" +
			"Час відправлення: " +
			submitTime,
	);
	console.log(formData);
});
