function filterProducts (filter) {
  return ProductsAPI.filter(filter)
}

class GamesSubject extends Subject {
  constructor () {
    super()
    this.text = ""
    this.products = []
  }

  notify (text, platform = "") {
    this.text = text
    this.products = filterProducts((product) => {
      return product.name.toLowerCase().includes(this.text.toLowerCase()) &&
      product.platform.includes(platform)
    })
    super.notify(this)
  }
}

class GamesObserver {
  update(subject) {
    loadComponent('../src/components/sections/sections.html', 'section-container')
      .then(_res => {
        const container = document.getElementById('section-container')
        const title = container.querySelector('.title')
        title.innerHTML = 'Games'

        const cards = container.querySelector('.trends_cards')
        cards.id = 'section-container-games'

        const section = document.getElementById('section-container-games')

        subject.products.slice(0, 9).forEach(product => {
          section.innerHTML += `
            <figure class="card">
              <a href="#" class="card_url">
              <img src="${product.short_screenshot}" alt="${product.name}" class="card_img"/>
              <video preload='none' loop autoplay playsinline muted class="card_video">
                <source src=${product.clip.clips[320]} type='video/webm'/>
              </video>
              </a>
              <div class="card_title">
                <h2>${product.name}</h2>
              </div>
            </figure>
          `
        })
      })
      .then(_res => {
        let index = ProductsAPI.length - 1;
        const main = document.getElementById('banner-extra');
        main.style.backgroundImage = `url(${ProductsAPI[index].background_image})`;

        setInterval(() => {
          main.style.backgroundImage = `url(${ProductsAPI[index].background_image})`;
          index = index === 0 ? ProductsAPI.length - 1 : index -= 1
        }, 15000)
      })
      .catch(err => console.log(err))
  }
}

const gamesSubject = new GamesSubject()
const gamesObserver = new GamesObserver()
gamesSubject.attach(gamesObserver)

window.addEventListener('DOMContentLoaded', () => {
  gamesSubject.notify("")
})