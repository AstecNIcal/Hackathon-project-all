"use strict";
const Myskills = document.getElementById('Myskills');
const skills = document.getElementById('skills');
Myskills.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
