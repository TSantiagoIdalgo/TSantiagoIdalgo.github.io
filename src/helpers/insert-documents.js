function loadComponent(url, containerId) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const container = document.getElementById(containerId);
                    if (container) {
                        container.innerHTML = xhr.responseText;
                        resolve();
                    } else {
                        reject(`Container with ID ${containerId} not found`);
                    }
                } else {
                    reject(`Failed to load component from ${url}`);
                }
            }
        };
        xhr.send();
    });
}