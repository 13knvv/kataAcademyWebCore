import { initSwiper } from './js/init-swiper'
import './styles/styles.scss'
import { btnShowMore } from './js/btn-show-more'
import { aside } from './js/aside'
import { modal } from './js/modal'

aside()
btnShowMore()
initSwiper()
window.addEventListener('resize', initSwiper)
modal()
