customSelect('select');
const cstSel = document.querySelector('select').customSelect

cstSel.container.addEventListener('custom-select:open',
 (e) => { document.querySelector('.sortig-group').style.backgroundColor = "rgba(255, 255, 255)"; });

cstSel.container.addEventListener('custom-select:close',
 (e) => { document.querySelector('.sortig-group').style.backgroundColor = "rgba(255, 255, 255, 0.2)"; });
