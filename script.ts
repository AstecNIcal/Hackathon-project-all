const Myskills= document.getElementById('Myskills') as HTMLButtonElement

const skills = document.getElementById('skills') as HTMLElement

Myskills.addEventListener('click',()=>{
if(skills.style.display === 'none'){
skills.style.display = 'block'
}else {
skills.style.display = 'none'
}

});

