let card = document.querySelector('.firstimg');

document.addEventListener('mousemove', function(e) {
  let dx = e.pageX - window.innerWidth / 2
  let dy = e.pageY - window.innerHeight / 2
  let angleX = 20 * dx / window.innerWidth / 2
  let angleY = 20 * dy / window.innerHeight / 2
  card.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`
})


document.addEventListener('DOMContentLoaded', function() {
    // Вибираємо всі елементи з класами youthebest-1, youthebest-2, youthebest-3
    const elements = document.querySelectorAll('.youthebest-1, .youthebest-2, .youthebest-3');

    // Додаємо обробник подій на кожен з них
    elements.forEach((element, index) => {
        element.addEventListener('click', function() {
            // Можна додати різний текст для кожного елемента, або зробити його однаковим
            switch(index) {
                case 0:
                    this.textContent = "найсміливіший!";
                    break;
                case 1:
                    this.textContent = "найрозумніший!";
                    break;
                case 2:
                    this.textContent = "найпрацьовитіший!";
                    break;
            }
        });
    });
});