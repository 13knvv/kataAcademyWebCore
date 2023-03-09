import { initSwiper } from './js/init-swiper'
import './styles/styles.scss'
import { btnShowMore } from './js/btn-show-more'
import { modals } from './js/modals'

btnShowMore()
initSwiper()
window.addEventListener('resize', initSwiper)
modals()
