const birthday = new Date(new Date().getFullYear(), 11, 25);
// const birthday = new Date(new Date().getTime() + 60 * 1000);

if (new Date() > birthday) {
  birthday.setFullYear(birthday.getFullYear() + 1);
}

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;
  // const diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  if (diff <= 0) {
    clearInterval(countdownInterval);
    window.location.href = "ucapan.html";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
