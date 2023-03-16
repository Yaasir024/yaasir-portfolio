export function scrollTo(id) {
  const el = document.getElementById(id)
  const yOffset = -40 // adjust this value as needed
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: 'smooth' })
}
