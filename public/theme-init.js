;(() => {
  try {
    const stored = localStorage.getItem('theme')
    if (stored !== 'light') {
      document.documentElement.classList.add('dark')
    }
  } catch (_) {
    document.documentElement.classList.add('dark')
  }
})()
