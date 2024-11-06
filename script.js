function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeString = `${hours}:${minutes} ${ampm}`;
    document.getElementById('time').textContent = timeString;
}

function toggleWindow(windowClass) {
    const windowElement = document.querySelector(`.${windowClass}`);
    windowElement.classList.toggle('hidden');
  }
  
  // Event listeners for menu items
  document.querySelector('.menu-item-projects').addEventListener('click', () => toggleWindow('projects-window'));
  document.querySelector('.menu-item-experiences').addEventListener('click', () => toggleWindow('experiences-window'));
  document.querySelector('.menu-item-contact').addEventListener('click', () => toggleWindow('contact-window'));
  

updateTime();

setInterval(updateTime, 1000);