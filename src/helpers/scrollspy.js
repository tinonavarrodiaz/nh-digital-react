const 
  w = window,
  q = document.querySelector.bind(document),
  all = document.querySelectorAll.bind(document);

const scrollActive = (idSec) => {
  const scrollElems = Array.from(all('.scroll'))
  let addClass = q(`[href='#${idSec}']`)
  scrollElems.map(el => el.classList.remove('active'))
  if(addClass) addClass.classList.add('active')
}
export const scrollSpy = () => {
  const sections = [...all('section[data-scroll-spy]')]
  let sofSet = sections.map(el => el.offsetTop)
  w.addEventListener('resize', () => sofSet = sections.map(el => el.offsetTop))
  w.addEventListener('scroll', (e) => {
    let scrollTop = w.scrollY
    if (scrollTop >= sofSet[0] && scrollTop < sofSet[1]) scrollActive('inicio')
    if (scrollTop >= sofSet[1] && scrollTop < sofSet[2]) scrollActive('nosotros')
    if (scrollTop >= sofSet[2] && scrollTop < sofSet[3]) scrollActive('servicios')
    if (scrollTop >= sofSet[3] && scrollTop < sofSet[4]) scrollActive('portafolio')
    if (scrollTop >= sofSet[4]) scrollActive('contacto')
  })
}
