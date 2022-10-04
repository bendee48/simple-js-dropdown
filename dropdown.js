const dropdown = (() => {
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  console.log('I am working');
  dropdownMenus.forEach(menu => {
    menu.menuContent = menu.querySelector('.dropdown-content');
    menu.addEventListener('mouseover', openMenu);
    menu.addEventListener('mouseout', closeMenu);
  })

  function openMenu() {
    this.menuContent.classList.add('open-menu');
  }

  function closeMenu(e) {
    this.menuContent.classList.remove('open-menu');
  }
})();
