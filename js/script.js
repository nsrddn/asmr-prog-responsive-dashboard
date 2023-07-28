const sideMenu = document.querySelector('aside');
const btnMenu = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const darkMode = document.querySelector('.dark-mode');

closeBtn.addEventListener('click', function() {
    sideMenu.style.display = 'none';
})

btnMenu.addEventListener('click', function() {
    sideMenu.style.display = 'block';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-var');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


Orders.forEach(o => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${o.productName}</td>
        <td>${o.productNumber}</td>
        <td>${o.paymentStatus}</td>
        <td class="${o.status === 'Declined' ? 'danger' : o.status === 'Pending' ? 'warning' : 'primary'}">${o.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})