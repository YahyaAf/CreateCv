const forms = [
  document.getElementById("form1"),
  document.getElementById("form2"),
  document.getElementById("form3"),
  document.getElementById("form4"),
  document.getElementById("form5"),
  document.getElementById("form6"),
  document.getElementById("form7"),
];
const steppers = [
  document.getElementById("step1"),
  document.getElementById("step2"),
  document.getElementById("step3"),
  document.getElementById("step4"),
  document.getElementById("step5"),
  document.getElementById("step6"),
  document.getElementById("step7"),
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
  
