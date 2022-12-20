const COLOR_THEME_KEY = 'color-theme';
const LIGHT_MODE_VALUE = 'light';
const DARK_MODE_VALUE = 'dark';

const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (
	localStorage.getItem('color-theme') === 'dark' ||
	(!('color-theme' in localStorage) &&
		window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
	// Show light icon
	themeToggleLightIcon.classList.remove('hidden');
} else {
	themeToggleDarkIcon.classList.remove('hidden');
}

function toggleMode() {
	// Toggle icon
	themeToggleDarkIcon.classList.toggle('hidden');
	themeToggleLightIcon.classList.toggle('hidden');

	// If is set in localStorage
	if (localStorage.getItem(COLOR_THEME_KEY)) {
		// If light, make dark and save in localstorage
		if (localStorage.getItem(COLOR_THEME_KEY) === LIGHT_MODE_VALUE) {
			// HTML document
			document.documentElement.classList.add(DARK_MODE_VALUE);
			localStorage.setItem(COLOR_THEME_KEY, DARK_MODE_VALUE);
		} else {
			document.documentElement.classList.remove(DARK_MODE_VALUE);
			localStorage.setItem(COLOR_THEME_KEY, LIGHT_MODE_VALUE);
		}
	} else {
		// If not in localstorage
		if (document.documentElement.classList.contains(DARK_MODE_VALUE)) {
			document.documentElement.classList.remove(DARK_MODE_VALUE);
			localStorage.setItem(COLOR_THEME_KEY, LIGHT_MODE_VALUE);
		} else {
			document.documentElement.classList.add(DARK_MODE_VALUE);
			localStorage.setItem(COLOR_THEME_KEY, DARK_MODE_VALUE);
		}
	}
}

// Listen for toggle button click
themeToggleBtn.addEventListener('click', toggleMode);
