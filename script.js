document.getElementById('profileBtn').onclick = function() {
    var profile = document.getElementById('profile');
    profile.style.display = 'block';
    setTimeout(function() {
        profile.classList.add('show');
    }, 10);
    document.getElementById('proceed').style.display = 'none';
};
