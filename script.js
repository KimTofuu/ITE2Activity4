document.getElementById('profileBtn').onclick = function() {
    var profile = document.getElementById('profile');
    profile.style.display = 'block';
    setTimeout(function() {
        profile.classList.add('show');
    }, 10);
    document.getElementById('profileBtn').style.display = 'none';
};

document.getElementById('viewMore').onclick = function() {
    var moreDeets = document.getElementById('moreDeets');
    moreDeets.style.display = 'flex';
    setTimeout(function() {
        moreDeets.classList.add('show');
    }, 10);
    document.getElementById('viewMore').style.display = 'none';
};