document.getElementById('profileBtn').onclick = function() {
    var profile = document.getElementById('profile');
    profile.style.display = 'block';
    setTimeout(function() {
        profile.classList.add('show');
    }, 10);
    document.getElementById('proceed').style.display = 'none';
  setDynamicGreeting();
  updateTime();
};

function setDynamicGreeting() {
  const greetingEl = document.getElementById('greeting');
  if (!greetingEl) return;
  const now = new Date();
  const hour = now.getHours();
  let greeting = '';
  if (hour < 12) {
    greeting = 'Good Morning!';
  } else if (hour < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }
  greetingEl.textContent = greeting;
}

function updateTime() {
  const timeEl = document.getElementById('time');
  if (!timeEl) return;
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  timeEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  setTimeout(updateTime, 1000);
}

const beam = document.getElementById("beam");
const beamBtn = document.getElementById("beamBtn");
const beamSound = document.getElementById("beamSound");

beamSound.volume = 0.5; // 50% volume

beamBtn.addEventListener("click", () => {
  // Play sound
  beamSound.currentTime = 0;
  beamSound.play();

  // Trigger beam animation
  beam.style.animation = "beamSweep 1.5s ease-out forwards";
  
  // Reset animation after it finishes
  beam.addEventListener("animationend", function() {
    beam.style.animation = "none";
  }, { once: true });
});