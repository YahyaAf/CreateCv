const forms = [
    document.getElementById('form1'),
    document.getElementById('form2'),
    document.getElementById('form3'),
    document.getElementById('form4'),
    document.getElementById('form5'),
    document.getElementById('form6'),
    document.getElementById('form7')
];
let counterForm = 0;

const Next = () => {
    if (counterForm < forms.length - 1) {  
        forms[counterForm].classList.add('hidden');  
        counterForm++;  
        forms[counterForm].classList.remove('hidden');
    }
};

const Back = () => {
    if (counterForm > 0) {  
        forms[counterForm].classList.add('hidden'); 
        counterForm--;  
        forms[counterForm].classList.remove('hidden');
    }
};