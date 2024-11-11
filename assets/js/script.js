const forms = [
  document.getElementById("form1"),
  document.getElementById("form2"),
  document.getElementById("form3"),
  document.getElementById("form4"),
  document.getElementById("form5"),
  document.getElementById("form6"),
  document.getElementById("form7"),
  document.getElementById("form8"),
];
const steppers = [
  document.getElementById("step1"),
  document.getElementById("step2"),
  document.getElementById("step3"),
  document.getElementById("step4"),
  document.getElementById("step5"),
  document.getElementById("step6"),
  document.getElementById("step7"),
  document.getElementById("step8"),
];
let counterForm = 0;
const Next = () => {
  if (counterForm < forms.length - 1) {
    forms[counterForm].classList.add("hidden");
    steppers[counterForm].classList.remove("bg-gray-900", "text-white");
    steppers[counterForm].classList.add("bg-gray-300", "text-gray-900");
    counterForm++;
    forms[counterForm].classList.remove("hidden");
    steppers[counterForm].classList.add("bg-gray-900", "text-white");
    steppers[counterForm].classList.remove("bg-gray-300", "text-gray-900");
  }
};

const Back = () => {
  if (counterForm > 0) {
    forms[counterForm].classList.add("hidden");
    steppers[counterForm].classList.remove("bg-gray-900", "text-white");
    steppers[counterForm].classList.add("bg-gray-300", "text-gray-900");
    counterForm--;
    forms[counterForm].classList.remove("hidden");
    steppers[counterForm].classList.add("bg-gray-900", "text-white");
    steppers[counterForm].classList.remove("bg-gray-300", "text-gray-900");
  }
};

// dynamique form langage
let formLangagueCounter = 2;
const AddFormLangague = (event) => {
  event.preventDefault();

  const formContainer = document.createElement("div");
  formContainer.className = "w-full lg:w-12/12 px-4";

  formContainer.innerHTML = `
        <hr class="border-t-2 border-gray-300 my-4">

        <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                                Langue
                        </label>
                        <input id="lang${formLangagueCounter}" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre Compétence">
                </div>
        </div>
        <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="language-level">
                                Niveau de langue
                        </label>
                        <select id="niv${formLangagueCounter}" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                <option value="A1">A1 - Débutant</option>
                                <option value="A2">A2 - Élémentaire</option>
                                <option value="B1">B1 - Intermédiaire</option>
                                <option value="B2">B2 - Intermédiaire avancé</option>
                                <option value="C1">C1 - Avancé</option>
                                <option value="C2">C2 - Maîtrise</option>
                        </select>
                </div>
        </div>
        <button onclick="DeleteFormLangague(this)" class="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            -
        </button>
    `;

  document.getElementById("parent-lang").appendChild(formContainer);
  formLangagueCounter++;
};
const DeleteFormLangague = (button) => {
  const formContainer = button.parentElement;
  formContainer.remove();
};

// dynamique form competence
let formCompetenceCounter = 2;
const AddFormCompetence = (event) => {
  event.preventDefault();

  const formContainer = document.createElement("div");
  formContainer.className = "w-full lg:w-12/12 px-4";

  formContainer.innerHTML = `
    <hr class="border-t-2 border-gray-300 my-4">
    <div class="relative w-full mb-3">
        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
            Compétence
        </label>
        <input id="competence${formCompetenceCounter}" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre competence">
    </div>
    <button onclick="DeleteFormCompetence(this)" class="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
        -
    </button>
    `;

  document.getElementById("parent-compt").appendChild(formContainer);
  formCompetenceCounter++;
};
const DeleteFormCompetence = (button) => {
  const formContainer = button.parentElement;
  formContainer.remove();
};

// dynamique form experience
let formExperienceCounter = 2;
const AddFormExperience = (event) => {
  event.preventDefault();

  const formContainer = document.createElement("div");
  formContainer.className = "w-full lg:w-12/12 px-4";

  formContainer.innerHTML = `
        <hr class="border-t-2 border-gray-300 my-4">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Titre du Poste
                    </label>
                    <input id="post${formExperienceCounter}" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre titre de poste">
                </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Entreprise
                    </label>
                    <input id="entreprise${formExperienceCounter}" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nom d'Entreprise">
                </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Type d'Expérience
                    </label>
                    <input id="type${formExperienceCounter}" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre type d'expérience">
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Ville
                    </label>
                    <input id="villeExp${formExperienceCounter}" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre ville">
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Date d'Ebut
                    </label>
                    <input id="debutExp${formExperienceCounter}" type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Date Fin
                    </label>
                    <input id="finExp${formExperienceCounter}" type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
            </div>
        </div>
        <button onclick="DeleteFormExperience(this)" class="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            -
        </button>
    `;

  document.getElementById("parent-exp").appendChild(formContainer);
  formExperienceCounter++;
};
const DeleteFormExperience = (button) => {
    const formContainer = button.parentElement;
    formContainer.remove();
};


// dynamique form projet
let formProjetCounter = 2;
const AddFormProjet = (event) => {
  event.preventDefault();

  const formContainer = document.createElement("div");
  formContainer.className = "w-full lg:w-12/12 px-4";

  formContainer.innerHTML = `
        <hr class="border-t-2 border-gray-300 my-4">
        <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                    Titre De Projet
                </label>
                <input id="titreProjet${formProjetCounter}" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre Compétence">
            </div>
        </div>
        <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                    Description
                </label>
                <textarea id="descriptionProjet${formProjetCounter}" placeholder="Votre description sur le projet" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"></textarea>
            </div>
        </div>
        <button onclick="DeleteFormProjet(this)" class="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            -
        </button>
    `;

  document.getElementById("parent-projet").appendChild(formContainer);
  formProjetCounter++;
};

const DeleteFormProjet = (button) => {
    const formContainer = button.parentElement;
    formContainer.remove();
};

// dynamique form education
let formEducationCounter = 2;
const AddFormEducation = (event) => {
  event.preventDefault();

  const formContainer = document.createElement("div");
  formContainer.className = "w-full lg:w-12/12 px-4";

  formContainer.innerHTML = `
        <hr class="border-t-2 border-gray-300 my-4">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Education générale
                    </label>
                    <input id="educationGenerale${formEducationCounter}" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre type et spécialisation">
                </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Lieu d'étude
                    </label>
                    <input id="lieuEtude${formEducationCounter}" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre lieu d'etude">
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Ville
                    </label>
                    <input id="villeEtude${formEducationCounter}" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre ville">
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Date d'Ebut
                    </label>
                    <input id="debutEtude${formEducationCounter}" type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Date Fin
                    </label>
                    <input id="finEtude${formEducationCounter}" type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
            </div>
        </div>
        <button onclick="DeleteFormEducation(this)" class="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            -
        </button>
    `;

  document.getElementById("parent-education").appendChild(formContainer);
  formEducationCounter++;
};

const DeleteFormEducation = (button) => {
    const formContainer = button.parentElement;
    formContainer.remove();
};


// Save data dans le Cv
const Save = (event) => {
    event.preventDefault();
    // information personelle
    let nomComplet = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let titleCv = document.getElementById('titleCv').value;
    let linkedin = document.getElementById('linkedin').value;
    let github = document.getElementById('github').value;
    let numero = document.getElementById('numero').value;
    // profile
    let descriptionProfile = document.getElementById('descriptionProfile').value;
    // competence
    let competence1 = document.getElementById('competence1').value
    // experience
    let post1 = document.getElementById('post1').value
    let entreprise1 = document.getElementById('entreprise1').value
    let type1 = document.getElementById('type1').value
    let villeExp1 = document.getElementById('villeExp1').value
    let debutExp1 = document.getElementById('debutExp1').value
    let finExp1 = document.getElementById('finExp1').value
    // projet
    let titreProjet1 = document.getElementById('titreProjet1').value
    let descriptionProjet1 = document.getElementById('descriptionProjet1').value
    // Education
    let educationGenerale1 = document.getElementById('educationGenerale1').value
    let lieuEtude1 = document.getElementById('lieuEtude1').value
    let villeEtude1 = document.getElementById('villeEtude1').value
    let debutEtude1 = document.getElementById('debutEtude1').value
    let finEtude1 = document.getElementById('finEtude1').value
    // Langues
    let lang1 = document.getElementById('lang1').value
    let niv1 = document.getElementById('niv1').value

    let classic = document.getElementById('classic')

    classic.innerHTML=`
    <div class="bg-gray-100 font-sans">

        <div class="container mx-auto py-8 px-4">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h1 class="text-3xl font-semibold">${nomComplet}</h1>
                <p class="text-gray-600 font-semibold text-lg">${titleCv}</p>
                <ul style="list-style: none; gap: 30px;" class="list-disc list-inside text-gray-700 flex mt-3">
                    <li><span class="font-semibold">Email:</span> ${email}</li>
                    <li><span class="font-semibold">LinkedIn: </span><a href="https://www.linkedin.com/in/johndoe"
                            class="text-blue-500 hover:underline">${linkedin}</a></li>
                    <li><span class="font-semibold">Github:</span> <a href="https://www.johndoe.com" class="text-blue-500 hover:underline">${github}</a>
                    <li><span class="font-semibold">Telephone:</span> <a href="https://www.johndoe.com" class="text-blue-500 hover:underline">${numero}</a>
                    </li>
                </ul>
    
                <hr class="my-4">
    
                <h2 class="text-xl font-semibold mb-2">Profile</h2>
                <p class="text-gray-700">Experienced web developer with a passion for creating responsive and user-friendly
                    ${descriptionProfile}
                </p>
                
                <hr class="my-4">
                
                <h2 class="text-xl font-semibold mt-4 mb-2">Competences</h2>
                <div style="width: 9%;" class="border-2 border-top-color my-2"></div>
                <ul class="list-disc list-inside text-gray-700">
                    <li>${competence1}</li>
                </ul>
                <hr class="my-4">
                

                <h2 class="text-xl font-semibold mt-4 mb-2">Projets</h2>
                <div style="width: 5%;" class="border-2 w-20 border-top-color my-3"></div>
                <div class="mb-4">
                    <h3 class="font-semibold">${titreProjet1}</h3>
                    <p class="text-gray-700">${descriptionProjet1}</p>
                </div>


                <hr class="my-4">

                <h2 class="text-xl font-semibold mt-4 mb-2">Experience</h2>
                <div style="width: 7%;" class="border-2 w-20 border-top-color my-3"></div>
                <div class="mb-4">
                    <h3 class=" font-semibold">${post1}, ${entreprise1}</h3>
                    <p class="text-gray-700">
                    ${type1}
                    </p>
                    <p class="text-gray-600">${debutExp1} - ${finExp1} - ${villeExp1}</p>
                </div>

                <hr class="my-4">
                
                <h2 class="text-xl font-semibold mt-4 mb-2">Education</h2>
                <div style="width: 7.1%;" class="border-2 w-20 border-top-color my-3"></div>
                <div class="mb-4">
                    <h3 class="font-semibold">${educationGenerale1}</h3>
                    <p class="text-gray-700">${lieuEtude1}</p>
                    <p class="text-gray-600">${debutEtude1} - ${finEtude1} - ${villeEtude1}</p>
                </div>
                
                <hr class="my-4">

                <h2 class="text-xl font-semibold mt-4 mb-2">Langages</h2>
                <div class="border-2 w-20 border-top-color my-3"></div>
                <h3 class="font-semibold">${lang1}</h3>
                <p class="text-gray-700">${niv1}</p>
            </div>
        </div>
    
    </div>
    `;


    // console.log('-------------------------------information')
    // console.log(nomComplet)
    // console.log(email )
    // console.log(titleCv)
    // console.log(linkedin)
    // console.log(github)
    // console.log(numero)
    // console.log('-----------------------------------profile')
    // console.log(descriptionProfile)
    // console.log('----------------------------------competence')
    // console.log(competence1)
    // console.log('-----------------------------------experience')
    // console.log(post1)
    // console.log(entreprise1)
    // console.log(type1)
    // console.log(villeExp1)
    // console.log(debutExp1)
    // console.log(finExp1)
    // console.log('-----------------------------------------projet')
    // console.log(titreProjet1)
    // console.log(descriptionProjet1)
    // console.log('-----------------------------------------Education')
    // console.log(educationGenerale1)
    // console.log(lieuEtude1)
    // console.log(villeEtude1)
    // console.log(debutEtude1)
    // console.log(finEtude1)
    // console.log('-----------------------------------------Langues')
    // console.log(lang1)
    // console.log(niv1)
    
}

  
