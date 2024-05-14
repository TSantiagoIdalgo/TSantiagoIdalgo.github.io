const imageUrl = [
    {
        url: '../../../assets/icon/menu/pc.webp',
        title: 'PC'
    },
    {
        url: '../../../assets/icon/menu/ps.webp',
        title: 'PlayStation'
    },
    {
        url: '../../../assets/icon/menu/xbox.webp',
        title: 'Xbox'
    },
    {
        url: '../../../assets/icon/menu/nintendo.webp',
        title: 'Nintendo'
    }
]

window.addEventListener('DOMContentLoaded', () => {
    loadComponent('../src/components/navbar/navbar.html', 'navbar-container')
      .then(_res => {
        renderImages(imageUrl, 'product_menu_scroll')
        const container = document.getElementById('product_menu_scroll')
        const div = document.createElement('div')
        div.className = 'search';
        div.id = 'search-button';
        container.appendChild(div)

        const searchButton = document.getElementById('search-button')
        const input = document.createElement('input')
        input.type = 'text';
        input.placeholder = 'Minecraft, Call Of Duty, battlefield';
        input.id = 'search-input';
        input.typeof = 'checkbox';
        searchButton.appendChild(input)

        const img = document.createElement('img')
        img.className = 'search_icon';
        img.id = 'search-icon';
        img.src = '../../../assets/icon/menu/search-regular-240.png'
        img.alt = 'search icon'

        searchButton.appendChild(img)

      })
      .then(_res => {
        const searchButton = document.getElementById('search-button')
        const icon = document.getElementById('search-icon')
        if (searchButton && icon) {
            icon.addEventListener('click', () => {
                if (searchButton.classList.contains('search')) {
                    searchButton.classList.remove('search');
                    searchButton.classList.add('search_active');
                } else {
                    searchButton.classList.remove('search_active');
                    searchButton.classList.add('search');
                }
            })
        }
        const input = document.getElementById('search-input')
        input.addEventListener('input', (event) => {
            if (event.target.value.length > 0 && event.target.value.length <= 1) {
                window.location.href = '#section-container';
            }
            gamesSubject.notify(event.target.value)
        })
      })
      .catch(err => console.error(err))
})