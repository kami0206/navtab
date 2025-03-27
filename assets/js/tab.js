function Tab({ tabButtonItem, tabContentItem } = {}) {

    const tabButtons = document.querySelectorAll(`${tabButtonItem} .nav-link`);
    const tabContents = document.querySelectorAll(`${tabContentItem} .tab-pane`);

    if (tabButtons.length === 0 || tabContents.length === 0) {
        console.error(`Tab elements not found for: ${tabButtonItem}, ${tabContentItem}`);
        return null;
    }

    function clearActive() {
        tabButtons.forEach(element => element.classList.remove('active'));
        tabContents.forEach(element => element.classList.remove('active'));
    }

    function defaultActive(index) {
        clearActive();
        if (index >= 0 && index < tabButtons.length) {
            tabButtons[index].classList.add('active');
            tabContents[index].classList.add('active');
        }
    }

    function handleClick() {  
        tabButtons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                defaultActive(index);
                
            });
        });
    }

    function init() {
        handleClick();
        if (!document.querySelector(`${tabButtonItem} .nav-link.active`)) {
            defaultActive(0);
        }
    }

    return { init, defaultActive };
}

document.addEventListener('DOMContentLoaded', () => {
    const tab1 = Tab({ tabButtonItem: '.js-tab-button', tabContentItem: '.js-tab-content' });
    tab1.init();
    tab1.defaultActive(2); 
    const tab2 = Tab({ tabButtonItem: '.js-tab-button-2', tabContentItem: '.js-tab-content-2' });
    tab2.init();
    tab2.defaultActive(1); 
    
});
