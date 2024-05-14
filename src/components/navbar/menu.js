function renderImages(imageUrls, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found`);
        return;
    }

    imageUrls.forEach(url => {
        const imgElement = document.createElement('a');
        imgElement.className = 'icons'
        const img = document.createElement('img');
        const imgRow = document.createElement('img');
        const h2 = document.createElement('h2');

        const imgIcon = imgElement.appendChild(img)
        const imgTittle = imgElement.appendChild(h2)
        const imgRowIcon = imgElement.appendChild(imgRow)

        imgIcon.src = url.url;
        imgIcon.alt = 'icon';
        imgIcon.className = 'icons';
        imgElement.href = '#section-container'
        imgElement.addEventListener('click', () => {
            gamesSubject.notify("", url.title)
        })

        imgTittle.innerText = url.title;

        imgRowIcon.src = '../../../public/assets/icon/row-to-bottom.png';
        imgRowIcon.alt = 'row to bottom';

        container.appendChild(imgElement);
    });
}
