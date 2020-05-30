var input_name_node=document.getElementById("input_name");
var input_age_node=document.getElementById("input_age");
var input_country_node=document.getElementById("input_country");
var input_horsepower_node=document.getElementById("input_horsepower");
var input_button_node=document.getElementById("press_calculate");
var output_line_node=document.getElementById("output_line");
var cost = 0;
var input_error = false;



function calculateInsurance(){
    input_error = false
    input_name_node.style.backgroundColor = "#FFFFFF";
    input_age_node.style.backgroundColor = "#FFFFFF";
    input_horsepower_node.style.backgroundColor = "#FFFFFF";
    output_line_node.style.visibility = "hidden";
    cost = 0;



   switch(true) {
        case input_country.value == "Austria":
            cost = Number(input_horsepower_node.value) * 100 / Number(input_age_node.value) + 50;
            break;
        case input_country.value == "Hungary":
            cost = Number(input_horsepower_node.value) * 120 / Number(input_age_node.value) + 100;
            break;
        case input_country.value == "Greece":
            cost = Number(input_horsepower_node.value) * 150 / (Number(input_age_node.value)+3) + 50;
            break;
        default:
            cost = "ERROR";
      }
      cost = Math.ceil(cost);
      



      if(input_name_node.value == ""){
        input_name_node.style.backgroundColor = "red";
        input_error = true;
      }

      if(input_age_node.value == "" || isNaN(input_age_node.value)){
        input_age_node.style.backgroundColor = "red";
        input_error = true;
      }

      if(input_horsepower_node.value == "" || isNaN(input_horsepower_node.value)){
        input_horsepower_node.style.backgroundColor = "red";
        input_error = true;
      }

      if(!input_error){
        output_line_node.style.visibility = "visible";
        output_line_node.innerHTML = input_name_node.value + ", your insurance costs " + cost + "€";
      }
 
    
      
}

input_button_node.addEventListener("click", calculateInsurance, false);

