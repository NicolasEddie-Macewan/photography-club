function validUsername(username) {
	if (username.trim() === "") {
		return false;
	} else {
		return true;
	}
}

function validEmail(email) {
	const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
	return emailRegex.test(email.trim());
}

function validPassword(password) {
	if (password.trim().length < 8) {
		return false;
	} else {
		return true;
	}
}

function displayError(spanID, errorMessage) {
	let span = document.querySelector(spanID);
	span.textContent = errorMessage;
	span.style.display = "inline";
}

function clearError(span) {
	span.textContent = '';
	span.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
	const fields = document.querySelectorAll("#username, #email, #password");
	for (let field of fields) {
		field.addEventListener("focus", function() {
			this.style.backgroundColor = '#fffae0';
			clearError(this.nextElementSibling);
			this.classList.remove("error-border");
		});
		field.addEventListener("blur", function() {
			this.style.backgroundColor = '';
		});
	}

	document.querySelector("#terms").addEventListener("change", function() {
		if (this.checked) {
			clearError(this.parentElement.nextElementSibling);
			this.parentElement.classList.remove("error-border");
		}
	})

	document.querySelector("#signup-form").addEventListener("submit", function(e) {
		e.preventDefault();
		let valid = true;

		if (!validUsername(document.querySelector("#username").value)) {
			displayError("#error-username", "Username is required");
			document.querySelector("#username").classList.add("error-border");
			valid = false;
		}
		if (!validEmail(document.querySelector("#email").value)) {
			displayError("#error-email", "Enter a valid email address");
			document.querySelector("#email").classList.add("error-border");
			valid = false;
		}
		if (!validUsername(document.querySelector("#password").value)) {
			displayError("#error-password", "Password must be at least 8 characters");
			document.querySelector("#password").classList.add("error-border");
			valid = false;
		}
		let checkbox = document.querySelector("#terms");
		if (!checkbox.checked) {
			displayError("#error-terms", "You must accept the terms");
			document.querySelector("#terms").parentElement.classList.add("error-border");
			valid = false;
		}

		if (valid) {
			alert("Form submitted successfully!");
			this.submit();
		}
	});
});