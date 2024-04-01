const startTime = Date.now(); 

document.addEventListener('DOMContentLoaded', function () {
    const endTime = Date.now();
    var loadTime = endTime - startTime;

    var footer = document.querySelector('.footer');
    var loadTimeElement = document.createElement('p');
    loadTimeElement.textContent = `Время загрузки страницы: ${loadTime} мс.`;
    footer.appendChild(loadTimeElement);
}); 