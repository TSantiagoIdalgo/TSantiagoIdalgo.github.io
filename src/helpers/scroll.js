const useScroll = () => {
  const scrollY = window.scrollY;
  const header = document.getElementById('header-scroll');
  const trendings = document.getElementById('trendings-scroll')
  const productMenu = document.getElementById('product_menu_scroll')
  if (scrollY >= 100) {
        header.classList.remove('header');
        header.classList.add('header_scroll');

        trendings.classList.remove('trendings');
        trendings.classList.add('trendings_scroll');

        productMenu.classList.remove('product_menu');
        productMenu.classList.add('product_menu_scroll');

    } else if (scrollY <= 80){
        header.classList.remove('header_scroll');
        header.classList.add('header');


        trendings.classList.remove('trendings_scroll');
        trendings.classList.add('trendings');

        productMenu.classList.remove('product_menu_scroll');
        productMenu.classList.add('product_menu');
    }
}
window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
      useScroll()
    });

    window.removeEventListener('scroll', () => {
      useScroll()
    });
})
