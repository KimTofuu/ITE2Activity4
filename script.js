// Popup modal logic for contact form
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger sidebar toggle
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('sidebarHamburger');
  if (hamburger && sidebar) {
    hamburger.addEventListener('click', function() {
      if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'flex';
      } else {
        sidebar.style.display = 'none';
      }
    });
  }
  const openBtn = document.getElementById('openContactBtn');
  const modal = document.getElementById('contactModal');
  const closeBtn = document.getElementById('closeContactBtn');
  if (openBtn && modal && closeBtn) {
    openBtn.onclick = function() {
      modal.style.display = 'flex';
    };
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    };
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const errorDiv = document.getElementById('formError');
    const successDiv = document.getElementById('formSuccess');
    errorDiv.textContent = '';
    successDiv.textContent = '';
    let error = '';
    if (!name) {
      error = 'Name is required.';
    } else if (!email) {
      error = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      error = 'Please enter a valid email address.';
    } else if (!message) {
      error = 'Message is required.';
    }
    if (error) {
      errorDiv.textContent = error;
      return;
    }
    successDiv.textContent = 'Message sent! Thank you for contacting us.';
    form.reset();
  });
});
document.getElementById('profileBtn').onclick = function() {
  var profile = document.getElementById('profile');
  var sidebar = document.getElementById('sidebar');
  var greetingDiv = document.getElementById('greet');
  var openContact = document.getElementById('openContactBtn');
  if (greetingDiv) greetingDiv.style.display = 'block';
  var hamburger = document.getElementById('sidebarHamburger');
  profile.style.display = 'block';
  if (sidebar) sidebar.style.display = 'flex';
  if (openContact) openContact.style.display = 'block';
  if (hamburger) hamburger.style.display = 'block';
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