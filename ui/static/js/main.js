var navLinks = document.querySelectorAll("nav a");
for (var i = 0; i < navLinks.length; i++) {
	var link = navLinks[i]
	if (link.getAttribute('href') == window.location.pathname) {
		link.classList.add("live");
		break;
	}
}

class AppToast extends HTMLElement {
	constructor() {
		super();
		var shadow = this.attachShadow({ mode: "open" });
		var message = this.getAttribute("message") || "";

		shadow.innerHTML = `
			<style>
				:host {
					position: fixed;
					top: 20px;
					right: 20px;
					z-index: 1000;
				}
				.toast {
					display: flex;
					align-items: center;
					gap: 12px;
					background-color: #34495e;
					color: #ffffff;
					font-weight: bold;
					padding: 12px 16px;
					border-radius: 3px;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
					max-width: min(420px, calc(100vw - 40px));
				}
				button {
					background: transparent;
					border: 1px solid #ffffff;
					border-radius: 3px;
					color: #ffffff;
					cursor: pointer;
					padding: 2px 8px;
					font-size: 16px;
					line-height: 1.2;
				}
			</style>
			<div class="toast" role="status" aria-live="polite">
				<span></span>
				<button type="button" aria-label="Close toast">×</button>
			</div>
		`;

		var messageElement = shadow.querySelector("span");
		if (messageElement) {
			messageElement.textContent = message;
		}

		var closeButton = shadow.querySelector("button");
		if (closeButton) {
			closeButton.addEventListener("click", () => {
				this.remove();
			});
		}
	}
}

customElements.define("app-toast", AppToast);
