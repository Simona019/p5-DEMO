function projectSelected() {
    const projectsSelect = document.getElementById('projects')

    if (projectsSelect.value === 'bouncables') {
        setupScript = setupBouncables;
        drawScript = drawBouncables;

    }

    setupScript();
}