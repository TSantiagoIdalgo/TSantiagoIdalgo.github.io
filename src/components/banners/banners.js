window.addEventListener('DOMContentLoaded', () => {
    loadComponent('../src/components/banners/banners.html', 'main-container')
      .then(_res => {
        let index = 0;
        const main = document.getElementById('main');
        const h2 = document.getElementById('banner-title');
        main.style.backgroundImage = `url(${ProductsAPI[index].background_image})`;
        h2.innerText = ProductsAPI[index].name;
        setInterval(() => {
          main.style.backgroundImage = `url(${ProductsAPI[index].background_image})`;
          h2.innerText = ProductsAPI[index].name;
          index = index === ProductsAPI.length - 1 ? 0 : index += 1

        }, 15000)
      })
      .catch(err => console.error(err))
})