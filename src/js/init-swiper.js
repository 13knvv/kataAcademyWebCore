import Swiper, {Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export function initSwiper() {
  const width = document.documentElement.clientWidth

  const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
    observer: true,
    slidesPerView: 'auto',
    speed: 400,
    spaceBetween: 16,

    breakpoints: {
      768: {
        spaceBetween: 0,
      },
    }
  })

  if (width >= 768) {
    swiper.destroy( true , true )
    swiper.disable()
  }
}
