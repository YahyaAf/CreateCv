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

const getCompetenceValues = () => {
    const competenceValues = [];
    const inputs = document.querySelectorAll("#parent-compt input[id^='competence']");
    
    inputs.forEach((input) => {
      competenceValues.push(input.value);
    });
  
    console.log(competenceValues); // Check stored values
    return competenceValues; // Return the array if needed
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

// show value of radio
const showValue = () => {
    var selectedRate = document.querySelector('input[name="rate"]:checked');
    return selectedRate ? selectedRate.value : null;
}

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
    // condition
        let condition = showValue();
    // image
    const imgInput = document.getElementById('imgCv');
    let imageURL = '';
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageURL = e.target.result;
        };
        reader.readAsDataURL(imgInput.files[0]);
    }
    console.log(imageURL)
    // competenceDynamique
    let compDyn= getCompetenceValues();
    let afficheDynamiqueCompetence = compDyn.map(e => `<li>${e}</li>`).join("");

   

    let classic = document.getElementById('classic');
    let modern = document.getElementById('modern');
    let parentStep = document.getElementById('parent-step');
    let parentSection = document.getElementById('parent-section');

    parentStep.classList.add("hidden");
    parentSection.classList.add("hidden");

    if(condition === "classic"){
        classic.innerHTML=`
            <div class="bg-gray-100 font-sans">
                <div class="container mx-auto py-8 px-4">
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <div style="gap: 10px;" class="flex">
                            <div>
                                <img id="imageClassic" src="${imageURL}" alt="Image Preview" style="width: 200px; height: auto;">
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
                                <img style="width: 100px;" src="./1094-1727859809.jfif" alt="">
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
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600">
                                            <i class="fas fa-circle"></i>
                                        </a>
                                        <div class="ml-2">${competence1}</div>
                                    </div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600"
                                            aria-label="Visit TrendyMinds YouTube" href="" target="_blank">
                                            <i class="fas fa-circle"></i>
                                        </a>
                                        <div class="ml-2">${competence1}</div>
                                    </div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600"
                                            aria-label="Visit TrendyMinds Facebook" href="" target="_blank">
                                            <i class="fas fa-circle"></i>
                                        </a>
                                        <div class="ml-2">${competence1}</div>
                                    </div>
                                    <div class="flex items-center my-1">
                                        <a class="w-6 text-gray-700 hover:text-orange-600"
                                            aria-label="Visit TrendyMinds Twitter" href="" target="_blank">
                                            <i class="fas fa-circle"></i>
                                        </a>
                                        <div class="ml-2">${competence1}</div>
                                    </div>
        
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
                                    <div class="flex flex-col">
                                        <p class="font-semibold text-xs text-gray-700">2017</p>
                                        <p class="text-sm font-medium"><span class="text-green-700">HSC</span>, RAJARSHI SHAHU
                                            COLLEGE, LATUR.</p>
                                        <p class="font-bold text-xs text-gray-700 mb-2">Percentage: 80.77</p>
                                    </div>
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
        
                                </div>
        
                            </div>
        
                            <!-- Projects -->
                            <div class="py-3">
                                <h2 class="text-lg font-poppins font-bold text-top-color">Projects</h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>
        
                                <div class="flex flex-col">
        
                                    <div class="flex flex-col">
                                        <p class="text-lg font-semibold text-gray-700">${titreProjet1}</p>
                                        <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
                                            ${descriptionProjet1}
                                        </p>
                                    </div>
                                </div>
        
                            </div>
                            
                            <!-- Langues -->
                            <div class="py-3">
                                <h2 class="text-lg font-poppins font-bold text-top-color">Langages</h2>
                                <div class="border-2 w-20 border-top-color my-3"></div>
        
                                <div class="flex flex-col">
        
                                    <div class="flex flex-col">
                                        <p class="text-lg font-semibold text-gray-700">${lang1}</p>
                                        <p class="font-normal text-sm text-gray-700 mb-1 pl-2">${niv1}</p>
                                    </div>
                                    <div class="flex flex-col">
                                        <p class="text-lg font-semibold text-gray-700">${lang1}</p>
                                        <p class="font-normal text-sm text-gray-700 mb-1 pl-2">${niv1}</p>
                                    </div>
        
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

  
