import { initSwiper } from './js/init-swiper'
import './styles/styles.scss'
import { btnShowMore } from './js/btn-show-more'
import { modalFeedback } from './js/modal-feedback'
import { modalAside } from './js/modal-aside'

btnShowMore()
initSwiper()
window.addEventListener('resize', initSwiper)
modalFeedback()
modalAside()
