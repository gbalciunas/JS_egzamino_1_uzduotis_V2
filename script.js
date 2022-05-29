let button = document.getElementById('btn');

button.addEventListener("click", function(){
    const kilo = parseInt(document.getElementById("kilograms").value);
    const type = document.getElementById("type").value;

    if(kilo === '' || isNaN(kilo)){
        document.getElementById('kilograms').focus();
        document.getElementById('error').innerHTML = 'Įveskite reikšmę skaičiais';
        document.getElementById('output').innerHTML = '';
    }else{
        document.getElementById('error').innerHTML = '';
        switch(type){
            case 'Pounds':
                convert_pounds(kilo);
                break;
            case'Grams':
                convert_grams(kilo);   
                break; 
            case'Ounces':
                convert_ounces(kilo);   
                break; 
            default:
                 alert('Error');
        }

        function convert_pounds(kilo){
        let rate = 2.2046, pounds;
        pounds = kilo * rate;
        document.getElementById('output').innerHTML = kilo + " kilogramai(ų) = " + pounds.toFixed(2) + ' svarai(ų).';
        }

        function convert_grams(kilo){
        let rate = 0.0010, grams;
        grams = kilo / rate;
        document.getElementById('output').innerHTML = kilo + " kilogramai(ų) = " + grams.toFixed(2) + ' gramai(ų).';
        }

        function convert_ounces(kilo){
        let rate = 35.274, ounces;
        ounces = kilo * rate;
        document.getElementById('output').innerHTML = kilo + " kilogramai(ų) = " + ounces.toFixed(2) + ' uncijos(ų).';
        }
    }
});