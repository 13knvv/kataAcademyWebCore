import { initSwiper } from './js/init-swiper'
import './styles/styles.scss'
import { btnShowMore } from './js/btn-show-more'
import { aside } from './js/aside'

aside()
btnShowMore()
initSwiper()
window.addEventListener('resize', initSwiper)
