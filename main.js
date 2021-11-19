console.log('Coucou JS');

const btnJob = document.getElementById('btn-job');

btnJob.addEventListener('click', applyToJob);

function applyToJob(){
    console.log('La décision est en cours...');
    setTimeout(() => {
        console.log('Vous avez le job');
    }, 2000);
    console.log(`Recruteur - pendant ce temps je recois d'autres candidats`) 
}

console.log('Après la fonction applyToJob');