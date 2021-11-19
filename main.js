const btnJob = document.getElementById('btn-job');
const candidat = { isProgrammer:true, 
                   isCool:true,
                };

btnJob.addEventListener('click', applyToJob);

function applyToJob(){
    console.log('La décision est en cours...');
    const result = startDecisionProcess();
    console.log('Result', result);
}

function startDecisionProcess(){
    return new Promise((resolve, reject) => {
        console.log(`Recruteur - pendant ce temps je recois d'autres candidats`) 
        setTimeout(() => {
            if(candidat.isProgrammer && candidat.isCool){
                console.log('avant resolve')
                resolve(`Recruteur - Bienvenue dans notre entreprise !`)
    
            }else{
                console.log('avant reject')
                reject(`Recruteur - Malgré tous l'inrérêt de votre candidature, nous sommes au regret...blablabla`)
            }
        }, 2000);

        
    });
}

console.log('Après la fonction applyToJob');