document.addEventListener("DOMContentLoaded", function () {
	let count = 0;
	const countDiv = document.getElementById("count");
	const incrementBtn = document.getElementById("increment-btn");
	const decrementBtn = document.getElementById("decrement-btn");

	function updateDisplay() {
		if (countDiv) countDiv.textContent = count;
	}
	function increment() {
		++count;
		updateDisplay();
	}
	function decrement() {
		--count;
		updateDisplay();
	}

	if (incrementBtn) {
		incrementBtn.addEventListener("click", increment);
	}
	if (decrementBtn) {
		decrementBtn.addEventListener("click", decrement);
	}

	// Initialize display
	updateDisplay();
});
