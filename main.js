const btnJob = document.getElementById('btn-job');
const githubForm = document.getElementById('github-form');
console.log('githubForm :', githubForm);
const githubResult = document.getElementById('github-result');



const candidat = { isProgrammer:true, 
                   isCool:true,
                };

btnJob.addEventListener('click', applyToJob);
githubForm.addEventListener('submit', searchGithub());

// function applyToJob(){
//     console.log('La décision est en cours...');
//     startDecisionProcess()
//     .then(result => {
//         console.log('Result :', result);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     console.log('Juste après startDecisionProcess()');
// }


async function applyToJob(){
    console.log('La décision est en cours...');
    try {
        const result = await startDecisionProcess();
        console.log(result); 
    } catch (error) {
        console.log(error);
    }
    console.log('Juste après startDecisionProcess()');
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

// function searchGithub(e) {
//     e.preventDefault(); //To avoid to refresh all page
//     const account = githubForm.elements[0].value;
//     console.log('account : ', account);
//     fetch(`https://api.github.com/users/${account}`)
//     .then(data => data.json())
//     .then(jsonData => {
//         console.log('jsonData:', jsonData)
//         githubResult.innerHTML = `<pre><code>${JSON.stringify(jsonData, null, 4)}</code></pre>`
//     });
// }

async function searchGithub(e) {
    //e.preventDefault(); //To avoid to refresh all page
    const account = githubForm.elements[0].value;
    console.log('account : ', account);
    const data = await fetch(`https://api.github.com/users/${account}`)
    const jsonData = await data.json(); 
    githubResult.innerHTML = `<pre><code>${JSON.stringify(jsonData, null, 4)}</code></pre>`

}