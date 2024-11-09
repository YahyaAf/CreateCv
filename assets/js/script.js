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