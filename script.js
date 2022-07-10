const backgroundFeatures = document.getElementById('shutdown-features');
const backgroundCompany = document.getElementById('shutdown-company');
const toggleFeatures = document.getElementById('toggle-features');
const toggleCompany = document.getElementById('toggle-company');

const toggleSider = document.getElementById('toggle-navbar');
let root = document.documentElement;


backgroundFeatures.addEventListener('click', () => {
    toggleFeatures.checked = false;
})

backgroundCompany.addEventListener('click', () => {
    toggleCompany.checked = false;
})

toggleSider.addEventListener('change', () => {
    if (toggleSider.checked) {
        root.style.setProperty('--sider-open', "100%")
    } else {
        root.style.setProperty('--sider-open', "0")
    }
})