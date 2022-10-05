const dropdown = (() => {
  function dropdowns() {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    return dropdownMenus;
  }

  function setListeners() {
    dropdowns().forEach(menu => {
      menu.menuContent = menu.querySelector('.dropdown-content');
      menu.addEventListener('mouseover', openMenu);
      menu.addEventListener('mouseout', closeMenu);
    })
  }

  function openMenu() {
    this.menuContent.classList.add('open-menu');
  }

  function closeMenu(e) {
    this.menuContent.classList.remove('open-menu');
  }

  function setup() {
    setListeners();
  }

  return { setup };
})();

export { dropdown };
