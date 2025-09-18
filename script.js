document.getElementById('profileBtn').onclick = function() {
    var profile = document.getElementById('profile');
    profile.style.display = 'block';
    setTimeout(function() {
        profile.classList.add('show');
    }, 10);
    document.getElementById('proceed').style.display = 'none';
};

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