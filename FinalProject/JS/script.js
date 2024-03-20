document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
    });

    let currentScenario = 1;
    let changeTimeout;

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

        // Set change after 6 seconds
        changeTimeout = setTimeout(() => {
            changeScenario(1);
        }, 6000);
    }

    function updateScenario() {
        const contents = document.querySelectorAll('.Announcement');
        contents.forEach(content => {
            const scenario = parseInt(content.dataset.scenario);
            if (scenario === currentScenario) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    updateScenario();

    // Initial timeout for automatic change after 6 seconds
    changeTimeout = setTimeout(() => {
        changeScenario(1);
    }, 6000);
});
