/*Condense Navbar to Hamburger Menu*/
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
navMenu.classList.toggle('hide');
});

/*Announcment Board*/ 
let currentScenario = 1;
let changeTimeout;

/*Changes the scenario*/
function changeScenario(offset) {
    clearTimeout(changeTimeout);

    const totalScenarios = 3;
    currentScenario += offset;

    if (currentScenario > totalScenarios) {
        currentScenario = 1;
    } else if (currentScenario < 1) {
        currentScenario = totalScenarios;
    }

    updateScenario();

    //Sets change after 6 seconds
    changeTimeout= setTimeout(() => {
        changeScenario(1);
    },6000)

}

/*Updates Scenario or Message that is seen*/
function updateScenario() {
    const contents = document.querySelectorAll('.Announcement');
    contents.forEach(content => content.classList.remove('active'));

    const currentContent = document.querySelector(`.Announcement[data-scenario="${currentScenario}"]`);
    currentContent.classList.add('active');
}

/*Initial setup*/
updateScenario();

// Initial timeout for automatic change after 6 seconds
changeTimeout = setTimeout(() => {
    changeScenario(1);
}, 6000);
