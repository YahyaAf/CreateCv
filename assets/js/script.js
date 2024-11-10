const forms = [
    document.getElementById('form1'),
    document.getElementById('form2'),
    document.getElementById('form3'),
    document.getElementById('form4'),
    document.getElementById('form5'),
    document.getElementById('form6'),
    document.getElementById('form7')
];
const steppers = [
    document.getElementById('step1'),
    document.getElementById('step2'),
    document.getElementById('step3'),
    document.getElementById('step4'),
    document.getElementById('step5'),
    document.getElementById('step6'),
    document.getElementById('step7')
]
let counterForm = 0;
const Next = () => {
    if (counterForm < forms.length - 1) {  
        forms[counterForm].classList.add('hidden');
        steppers[counterForm].classList.remove('bg-gray-900','text-white');  
        steppers[counterForm].classList.add('bg-gray-300','text-gray-900');  
        counterForm++;  
        forms[counterForm].classList.remove('hidden');
        steppers[counterForm].classList.add('bg-gray-900','text-white');  
        steppers[counterForm].classList.remove('bg-gray-300','text-gray-900');
    }
};

const Back = () => {
    if (counterForm > 0) {  
        forms[counterForm].classList.add('hidden');
        steppers[counterForm].classList.remove('bg-gray-900','text-white'); 
        steppers[counterForm].classList.add('bg-gray-300','text-gray-900'); 
        counterForm--;  
        forms[counterForm].classList.remove('hidden');
        steppers[counterForm].classList.add('bg-gray-900','text-white');  
        steppers[counterForm].classList.remove('bg-gray-300','text-gray-900');
    }
};

// dynamique form langage
let formLangagueCounter = 2;
const AddFormLangague = (event) => {
    event.preventDefault();
    
    const formContainer = document.createElement("div");
    formContainer.className = "w-full lg:w-12/12 px-4";

    formContainer.innerHTML=`
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

}
const DeleteFormLangague = (button)  => {
    const formContainer = button.parentElement;
    formContainer.remove();
}

// dynamique form competence
let formCompetenceCounter = 2;
const AddFormCompetence = (event) => {
    event.preventDefault();

    const formContainer = document.createElement("div");
    formContainer.className = "w-full lg:w-12/12 px-4";

    formContainer.innerHTML=`
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

}
const DeleteFormCompetence = (button)  => {
    const formContainer = button.parentElement;
    formContainer.remove();
}