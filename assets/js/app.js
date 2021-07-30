
let inputPrenom = document.getElementById('prenom');
let inputNationaliteDuPere = document.getElementById('nationalite-du-pere');
let inputNationaliteDeLaMere = document.getElementById('nationalite-du-la-mere');
let inputNationaliteIndiv = document.getElementById('nationalite-individuel');

const btnTest = document.getElementById('btn-test');
const popUpContainer = document.querySelector('.pop-up-container');

const btnQuitter = document.getElementById('btn-quitter');
const btnFermer = document.getElementById('btn-fermer');

const notificationContainer = document.querySelector('.notification-container');

const completName = document.getElementById('complet-prenom');
const textNotification = document.getElementById('text-notification');

const btnFermerNotif = document.getElementById('btn-fermer-notif');


//Notification d'avertissement en Pop-Up

setTimeout(() => {
    popUpContainer.classList.add('show')
}, 2000);

//fermer et quitter l'application

btnQuitter.addEventListener('click', closeWindow);
function closeWindow() {
    fenetre = window.close();
}


//fermer la notification et continuer
btnFermer.addEventListener('click', ()=>{
    popUpContainer.classList.remove('show')
})

btnFermerNotif.addEventListener('click', ()=>{
    notificationContainer.classList.remove('show');
})



btnTest.addEventListener('click', function(){
    notificationContainer.classList.add('show');
    completName.textContent = inputPrenom.value;

    // Cas où l'utilisateur n'a pas rempli les champs d'un formulaire    
    if (inputNationaliteDuPere.value == "" || inputNationaliteDeLaMere.value == "" || inputNationaliteIndiv.value == "" ) {

        textNotification.innerHTML = `Veillez remplir tous les champs svp`

    // Cas de parents étrangers et le corncerné étranger
    }else if(inputNationaliteDuPere.value != "congo_rdc" && inputNationaliteDeLaMere.value != "congo_rdc" && inputNationaliteIndiv.value != "congo_rdc") {
        textNotification.innerHTML = 
        
        `Vu la constitution actuelle de la RDC, vous n'êtes pas congolais et vous n'êtes pas non plus éligible à la magistrature suprème`;

    // Cas d'un parent congolais et le corncerné de nationalité congolaise
    }else if(inputNationaliteDuPere.value == "congo_rdc" && inputNationaliteDeLaMere.value == "congo_rdc" && inputNationaliteIndiv.value == "congo_rdc") {
        textNotification.innerHTML = 
        
        `Vu la constitution actuelle de la RDC, vous êtes congolais par vos deux parents et votre nationalité actuelle est congolaise, vous êtes éligible à la magistrature suprème`;

    // Cas d'un parent congolais et le corncerné de nationalité étrangère
    }else if(inputNationaliteDuPere.value == "congo_rdc" && inputNationaliteDeLaMere.value == "congo_rdc" && inputNationaliteIndiv.value != "congo_rdc") {
        textNotification.innerHTML = 
        
        `Vu la constitution actuelle de la RDC, vous êtes congolais par un de vos parents mais comme vous avez opté pour la nationalité ${inputNationaliteIndiv}, vous n'êtes pas éligible à la magistrature suprème`;

    // Cas d'un parents congolais et le corncerné congolais de nationalité
    }else if(inputNationaliteDuPere.value == "congo_rdc" || inputNationaliteDeLaMere.value == "congo_rdc" && inputNationaliteIndiv.value == "congo_rdc") {
        textNotification.innerHTML = 
        
        `Vu la constitution actuelle de la RDC, vous êtes congolais par un de vos parents mais comme vous avez opté pour la nationalité congolaise, vous êtes éligible à la magistrature suprème`;

    // Cas des parents étrangers et le corncerné congolais de nationalité
    }else if(inputNationaliteDuPere.value == "congo_rdc" || inputNationaliteDeLaMere.value == "congo_rdc" && inputNationaliteIndiv.value != "congo_rdc") {
        textNotification.innerHTML = 
        
        `Vu la constitution actuelle de la RDC, vous êtes congolais par un de vos parents mais comme vous avez opté pour une autre nationalité que la nationalité congolaise, vous n'êtes pas éligible à la magistrature suprème`;

    // Cas des parents étrangers et le corncerné congolais de nationalité
    }else if(inputNationaliteDuPere.value == "congo_rdc" && inputNationaliteDeLaMere.value != "congo_rdc" && inputNationaliteIndiv.value != "congo_rdc") {
        textNotification.innerHTML = 
        
        `Vu la constitution actuelle de la RDC, vous êtes congolais par un de vos parents mais comme vous avez opté pour une autre nationalité que la nationalité congolaise, vous n'êtes pas éligible à la magistrature suprème`;

    // Cas des parents étrangers et le corncerné congolais de nationalité
    }else if(inputNationaliteDuPere.value != "congo_rdc" && inputNationaliteDeLaMere.value != "congo_rdc" && inputNationaliteIndiv.value == "congo_rdc") {
        textNotification.innerHTML = 
        
        `Vu la constitution actuelle de la RDC, vous êtes congolais par acquisition individuelle, vous êtes éligible à la magistrature suprème`;

    }else {
        `humm Nous étudierons votre cas`;
    }
})


