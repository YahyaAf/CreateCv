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
    }else{
        document.getElementById('save').classList.remove("hidden");
    }
};

const Back = () => {
  if (counterForm > 0) {
    forms[counterForm].classList.add("hidden");
    steppers[counterForm].classList.remove("bg-gray-900", "text-white");
    steppers[counterForm].classList.add("bg-gray-300", "text-gray-900");
    document.getElementById('save').classList.add("hidden");
    counterForm--;
    forms[counterForm].classList.remove("hidden");
    steppers[counterForm].classList.add("bg-gray-900", "text-white");
    steppers[counterForm].classList.remove("bg-gray-300", "text-gray-900");
    document.getElementById('save').classList.add("hidden");
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

const getLangueValues = () => {
    const languesValues = [];
    const parentLang = document.querySelectorAll("#parent-lang > .w-full");
  
    parentLang.forEach((container) => {
      const langInput = container.querySelector("input[id^='lang']");
      const nivSelect = container.querySelector("select[id^='niv']");
  
      if (langInput && nivSelect) {
        languesValues.push({
          lang: langInput.value,
          niv: nivSelect.value
        });
      }
    });
  
    return languesValues;
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

const getCompetenceValues = () => {
    const competenceValues = [];
    const inputs = document.querySelectorAll("#parent-compt input[id^='competence']");
    
    inputs.forEach((input) => {
      competenceValues.push(input.value);
    });
    return competenceValues; 
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

const getExperienceValues = () => {
    const ExperienceValues = [];
    const parentExperience = document.querySelectorAll("#parent-exp > .w-full");
  
    parentExperience.forEach((container) => {
      const titlePost = container.querySelector("input[id^='post']");
      const nomEntreprise = container.querySelector("input[id^='entreprise']");
      const typeExp = container.querySelector("input[id^='type']");
      const villeExp = container.querySelector("input[id^='villeExp']");
      const debutExp = container.querySelector("input[id^='debutExp']");
      const finExp = container.querySelector("input[id^='finExp']");
  
      if (titlePost && nomEntreprise && typeExp && villeExp && debutExp && finExp) {
        ExperienceValues.push({
          post: titlePost.value,
          entreprise: nomEntreprise.value,
          type: typeExp.value,
          ville: villeExp.value,
          debut: debutExp.value,
          fin: finExp.value,
        });
      }
    });
    return ExperienceValues;
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

const getProjetValues = () => {
    const ProjetValues = [];
    const parentLang = document.querySelectorAll("#parent-projet > .w-full");
  
    parentLang.forEach((container) => {
      const projetInput = container.querySelector("input[id^='titreProjet']");
      const descriptionProjet = container.querySelector("textarea[id^='descriptionProjet']");
  
      if (projetInput && descriptionProjet) {
        ProjetValues.push({
          projet: projetInput.value,
          description: descriptionProjet.value
        });
      }
    });

    return ProjetValues;
};

// dynamique form education
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
                    <input id="educationGenerale" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre type et spécialisation">
                </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Lieu d'étude
                    </label>
                    <input id="lieuEtude" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre lieu d'etude">
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Ville
                    </label>
                    <input id="villeEtude" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Votre ville">
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Date d'Ebut
                    </label>
                    <input id="debutEtude" type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">
                        Date Fin
                    </label>
                    <input id="finEtude" type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                </div>
            </div>
        </div>
        <button onclick="DeleteFormEducation(this)" class="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            -
        </button>
    `;

  document.getElementById("parent-education").appendChild(formContainer);

};

const DeleteFormEducation = (button) => {
    const formContainer = button.parentElement;
    formContainer.remove();
};

const getEducationValues = () => {
    const EducationValues = [];
    const parentEducation = document.querySelectorAll("#parent-education > .w-full");
  
    parentEducation.forEach((container) => {
      const educationGene = container.querySelector("input[id^='educationGenerale']");
      const etudeLieu = container.querySelector("input[id^='lieuEtude']");
      const villeEtude = container.querySelector("input[id^='villeEtude']");
      const debutEtude = container.querySelector("input[id^='debutEtude']");
      const finEtude = container.querySelector("input[id^='finEtude']");
  
      if (educationGene && etudeLieu && villeEtude && debutEtude && finEtude) {
        EducationValues.push({
          etude: educationGene.value,
          lieu: etudeLieu.value,
          ville: villeEtude.value,
          debut: debutEtude.value,
          fin: finEtude.value,
        });
      }
    });
  
    return EducationValues;
};

// show value of radio
const showValue = () => {
    var selectedRate = document.querySelector('input[name="rate"]:checked');
    return selectedRate ? selectedRate.value : null;
}



// Validation de formulaire
const Validation = () => {
    let condition = true; 

    // information personelle
    const nomComplet = document.getElementById('nom');
    const email = document.getElementById('email');
    const titleCv = document.getElementById('titleCv');
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');
    const numero = document.getElementById('numero');
    // profile
    let descriptionProfile = document.getElementById('descriptionProfile');
    // condition
    let conditionRadio = showValue();

    if (nomComplet.value.trim() === '' || nomComplet.value.length > 100) {
        nomComplet.style.border = '2px solid red';
        condition = false;
    } else {
        nomComplet.style.border = '2px solid green';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.style.border = '2px solid red';
        condition = false;
    } else {
        email.style.border = '2px solid green';
    }

    const numeroRegex = /^06\d{8}$/;
    if (!numeroRegex.test(numero.value)) {
        numero.style.border = '2px solid red';
        condition = false;
    } else {
        numero.style.border = '2px solid green';
    }

    [titleCv, linkedin, github].forEach(field => {
        if (field.value.trim() === '') {
            field.style.border = '2px solid red';
            condition = false;
        } else {
            field.style.border = '2px solid green';
        }
    });

    if (descriptionProfile.value.trim() === '' || descriptionProfile.value.length > 500) {
        descriptionProfile.style.border = '2px solid red';
        condition = false;
    } else {
        descriptionProfile.style.border = '2px solid green';
    }

    if(!conditionRadio){
        alert("No validation Verifier All the fomulaire")
        condition = false;
    }

    return condition; 

}



// Save data dans le Cv
const Save = (event) => {
    event.preventDefault();
    if(Validation()){
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
        let compDyn= getCompetenceValues();
        let afficheDynamiqueCompetence = compDyn.map(e => `<li>${e}</li>`).join("");
    // experience
        let post1 = document.getElementById('post1').value
        let entreprise1 = document.getElementById('entreprise1').value
        let type1 = document.getElementById('type1').value
        let villeExp1 = document.getElementById('villeExp1').value
        let debutExp1 = document.getElementById('debutExp1').value
        let finExp1 = document.getElementById('finExp1').value
        let experienceDyn = getExperienceValues()
        let afficheDynamiqueExperience = experienceDyn.map(e => `
            <div class="mb-4">
                <h3 class=" font-semibold">${e.post}, ${e.entreprise}</h3>
                <p class="text-gray-700">
                    ${e.type}
                </p>
                <p class="text-gray-600">${e.debut} - ${e.fin} - ${e.ville}</p>
            </div>
       `).join("");
    // projet
        let projetDyn = getProjetValues();
        let afficheDynamiqueProjets = projetDyn.map(e=>`
                <h3 class="font-semibold">${e.projet}</h3>
                <p class="text-gray-700">${e.description}</p>
            `).join("")
    // Education
        let educationGenerale1 = document.getElementById('educationGenerale').value
        let lieuEtude1 = document.getElementById('lieuEtude').value
        let villeEtude1 = document.getElementById('villeEtude').value
        let debutEtude1 = document.getElementById('debutEtude').value
        let finEtude1 = document.getElementById('finEtude').value
        let educationDyn = getEducationValues()
        let afficheDynamiqueEducations = educationDyn.map(e => `
            <div class="mb-4">
               <h3 class="font-semibold">${e.etude}</h3>
               <p class="text-gray-700">${e.lieu}</p>
               <p class="text-gray-600">${e.debut} - ${e.fin} - ${e.ville}</p>
           </div>
       `).join("");
    // Langues
        let langueDyn = getLangueValues()
        let afficheDynamiqueLangues = langueDyn.map(e => `
            <h3 class="font-semibold">${e.lang}</h3>
            <p class="text-gray-700">${e.niv}</p>
        `).join("");
    // condition
        let condition = showValue();
    // image
    let inputPhotosUrl = document.querySelector("#imgCv").files[0];
    inputPhoto = URL.createObjectURL(inputPhotosUrl);
    

    let classic = document.getElementById('classic');
    let modern = document.getElementById('modern');
    let parentStep = document.getElementById('parent-step');
    let parentSection = document.getElementById('parent-section');

    parentStep.classList.add("hidden");
    parentSection.classList.add("hidden");

    if(condition === "classic"){
        document.getElementById('btndwlond').classList.remove("hidden");
        document.getElementById('btndwlond').classList.add("flex");
    }else if(condition === "modern"){
        document.getElementById('btndwlondModern').classList.remove("hidden");
        document.getElementById('btndwlondModern').classList.add("flex");
    }
    

    if(condition === "classic"){
        classic.innerHTML=`
            <div class="bg-gray-100 font-sans">
                <div class="container mx-auto py-8 px-4">
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <div style="gap: 10px;" class="flex">
                            <div>
                                <img id="imageClassic" src="${inputPhoto}" alt="Image Preview" style="width: 100px;" height: auto;">
                            </div>
                            <div>
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
                            </div>
                        </div>
            
                        <hr class="my-4">
            
                        <h2 class="text-xl font-semibold mb-2">Profile</h2>
                        <p class="text-gray-700">Experienced web developer with a passion for creating responsive and user-friendly
                            ${descriptionProfile}
                        </p>
                        
                        <hr class="my-4">
                        
                        <h2 class="text-xl font-semibold mt-4 mb-2">Competences</h2>
                        <div style="width: 9%;" class="border-2 border-top-color my-2"></div>
                        <ul class="list-disc list-inside text-gray-700">
                            ${afficheDynamiqueCompetence}
                        </ul>
                        <hr class="my-4">
                        

                        <h2 class="text-xl font-semibold mt-4 mb-2">Projets</h2>
                        <div style="width: 5%;" class="border-2 w-20 border-top-color my-3"></div>
                        <div class="mb-4">
                            ${afficheDynamiqueProjets}
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
                        ${afficheDynamiqueExperience}

                        <hr class="my-4">
                        
                        <h2 class="text-xl font-semibold mt-4 mb-2">Education</h2>
                        <div style="width: 7.1%;" class="border-2 w-20 border-top-color my-3"></div>
                        <div class="mb-4">
                            <h3 class="font-semibold">${educationGenerale1}</h3>
                            <p class="text-gray-700">${lieuEtude1}</p>
                            <p class="text-gray-600">${debutEtude1} - ${finEtude1} - ${villeEtude1}</p>
                        </div>
                        ${afficheDynamiqueEducations}
                        
                        <hr class="my-4">

                        <h2 class="text-xl font-semibold mt-4 mb-2">Langages</h2>
                        <div class="border-2 w-20 border-top-color my-3"></div>
                        ${afficheDynamiqueLangues}
                    </div>
                </div>
            
            </div>
            `;
    }else if(condition === "modern"){
        modern.innerHTML=`
        <div class="bg-gray-100 p-4">
            <div class="border-1 shadow-lg shadow-gray-700 rounded-lg">
                <!-- main content -->
                <div class="p-5">
                    
                    <div class="flex flex-col sm:flex-row sm:mt-10">
                            
                        <div class="flex flex-col sm:w-1/3">
                            <!-- My contact -->
                            <div style="gap: 10px;" class="flex">
                                <img style="width: 100px;" src="${inputPhoto}" alt="">
                                <div style="margin-top: 20px;">
                                    <h3 class="font-bold">${nomComplet}</h3>
                                    <h4 class="">${titleCv}</h4>
                                </div>
                            </div>
                            <div class="py-3 sm:order-none order-3">
                                <h2 class="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>
        
                                <div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600">
                                            <i class="fab fa-linkedin" style="font-size: 16px;"></i>
                                        </a>
                                        <div class="ml-2 truncate">${linkedin}</div>
                                    </div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600"
                                            aria-label="Visit TrendyMinds YouTube" href="" target="_blank">
                                            <i class="fas fa-phone" style="font-size: 16px;"></i>
                                        </a>
                                        <div>${numero}</div>
                                    </div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600"
                                            aria-label="Visit TrendyMinds Facebook" href="" target="_blank">
                                            <i class="fas fa-envelope"></i>
                                        </a>
                                        <div>${email}</div>
                                    </div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600"
                                            aria-label="Visit TrendyMinds Twitter" href="" target="_blank">
                                            <i class="fab fa-github"></i>
                                        </a>
                                        <div>${github}</div>
                                    </div>
        
                                </div>
                            </div>
                            <!-- Skills -->
                            <div class="py-3 sm:order-none order-2">
                                <h2 class="text-lg font-poppins font-bold text-top-color">Skills</h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>
        
                                <div>
                                    
                                    ${compDyn.map(e => `
                                        <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600">
                                            <i class="fas fa-circle"></i>
                                        </a>
                                        <div class="ml-2">${e}</div>
                                        </div>`).join("")
                                    }
                                </div>
                            </div>
                            <!-- Education Background -->
                            <div class="py-3 sm:order-none order-1">
                                <h2 class="text-lg font-poppins font-bold text-top-color">Education Background</h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>
        
                                <div class="flex flex-col space-y-1">
        
                                    <div class="flex flex-col">
                                        <p class="font-semibold text-xs text-gray-700">${debutEtude1} - ${finEtude1},${villeEtude1}</p>
                                        <p class="text-sm font-medium">
                                            ${educationGenerale1}
                                        </p>
                                        <p class="font-bold text-xs text-gray-700 mb-2">${lieuEtude1}</p>
                                    </div>
                                    ${educationDyn.map(e => `
                                        <div class="flex flex-col">
                                            <p class="font-semibold text-xs text-gray-700">${e.debut} - ${e.fin},${e.ville}</p>
                                            <p class="text-sm font-medium">
                                                ${e.etude}
                                            </p>
                                            <p class="font-bold text-xs text-gray-700 mb-2">${e.lieu}</p>
                                        </div>
                                   `).join("")}
                                   
                                </div>
                            </div>
        
                        </div>
        
        
                        <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
        
                            <!-- About me -->
                            <div class="py-3">
                                <h2 class="text-lg font-poppins font-bold text-top-color">About Me</h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>
                                <p>
                                    ${descriptionProfile}
                                </p>
                            </div>
                            <!-- Professional Experience -->
                            <div class="py-3">
                                <h2 class="text-lg font-poppins font-bold text-top-color">Professional Experience</h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>
        
                                <div class="flex flex-col">
        
                                    <div class="flex flex-col">
                                        <p class="text-lg font-bold text-gray-700">${post1} | ${entreprise1}</p>
                                        <p class="font-semibold text-sm text-gray-700">${debutExp1} - ${finExp1},${villeExp1}</p>
                                        <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">${type1}</p>
                                    </div>
                                    ${experienceDyn.map(e => `
                                        <div class="flex flex-col">
                                            <p class="text-lg font-bold text-gray-700">${e.post} | ${e.entreprise}</p>
                                            <p class="font-semibold text-sm text-gray-700">${e.debut} - ${e.fin},${e.ville}</p>
                                            <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">${e.type}</p>
                                        </div>
                                   `).join("")}
        
                                </div>
        
                            </div>
        
                            <!-- Projects -->
                            <div class="py-3">
                                <h2 class="text-lg font-poppins font-bold text-top-color">Projects</h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>
        
                                <div class="flex flex-col">
                                    ${projetDyn.map(e=>`
                                        <div class="flex flex-col">
                                            <p class="text-lg font-semibold text-gray-700">${e.projet}</p>
                                            <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
                                                ${e.description}
                                            </p>
                                        </div>
                                    `).join("")}    
                                </div>
        
                            </div>
                            
                            <!-- Langues -->
                            <div class="py-3">
                                <h2 class="text-lg font-poppins font-bold text-top-color">Langages</h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>
        

                                <div class="flex flex-col">
                                    ${langueDyn.map(e => `
                                        <p class="text-lg font-semibold text-gray-700">${e.lang}</p>
                                        <p class="font-normal text-sm text-gray-700 mb-1 pl-2">${e.niv}</p>
                                    `).join("")}
                                   
        
                                </div>
        
                            </div>
        
                        </div>
                    </div>
        
                </div>
        
            </div>
        
        </div>
        `;
    }   
    }
}


// doawnload Cv 
let Cv1 = document.getElementById('classic');
let Cv2 = document.getElementById('modern');

let btndwlond = document.getElementById('btndwlond');
let btndwlondModern = document.getElementById('btndwlondModern');


btndwlond.addEventListener("click", async function () {

    const filename = "my-cv.pdf";
  
    const options = {
      margin: 0,
      filename: filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    try {
      await html2pdf().set(options).from(Cv1).save();
    } catch (error) {
      console.error("false:", error.message);
    }
});

btndwlondModern.addEventListener("click", async function () {

    const filename = "my-cv.pdf";
  
    const options = {
      margin: 0,
      filename: filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    try {
      await html2pdf().set(options).from(Cv2).save();
    } catch (error) {
      console.error("false:", error.message);
    }
});
