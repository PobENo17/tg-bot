document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe.user;

    // Display user info
    document.getElementById('user-avatar').src = user.photo_url || 'default-avatar.png';
    document.getElementById('user-name').textContent = user.username || 'Unknown User';
    document.getElementById('profile-username').textContent = user.username || 'Unknown User';

    // Initialize with Home Page
    showPage('home');
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    });
}

function buy(accountType) {
    alert(`You selected to buy a ${accountType} account.`);
    // Implement purchase logic here
}
