document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')

	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg', 'padding-bg')
		} else {
			nav.classList.remove('shadow-bg', 'padding-bg')
		}
	}

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
})

