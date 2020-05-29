var input_name_node=document.getElementById("input_name");
var input_age_node=document.getElementById("input_age");
var input_country_node=document.getElementById("input_country");
var input_horespower_node=document.getElementById("input_horsepower");
var input_button_node=document.getElementById("press_calculate");
var output_line_node=document.getElementById("output_line");
var cost = 0;


function calculateInsurance(){
   switch(true) {
        case input_country.value == "Austria":
            cost = Number(input_horespower_node.value) * 100 / Number(input_age_node.value) + 50;
            break;
        case input_country.value == "Hungary":
            cost = Number(input_horespower_node.value) * 120 / Number(input_age_node.value) + 100;
            break;
        case input_country.value == "Greece":
            cost = Number(input_horespower_node.value) * 150 / (Number(input_age_node.value)+3) + 50;
            break;
        default:
            cost = "ERROR";
      }
      cost = Math.ceil(cost);
      output_line_node.style.visibility = "visible";
      output_line_node.innerHTML = input_name_node.value + ", your insurance costs " + cost + "€"; 
      
}

input_button_node.addEventListener("click", calculateInsurance, false);