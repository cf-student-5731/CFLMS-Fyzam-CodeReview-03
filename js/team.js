

class teamMember{
        name = "";
        email = "";
        img = "";
    constructor(name, email, img){
        this.name = name;
        this.email = email;
        this.img = img;

    }
    give_name(){
        return "My name is: " + this.name;
    }

    give_email(){
        return "My e-mail is: " + this.email;
    }    
    
    give_img(){
        return this.img;
    }    
}

var person1 = new teamMember("Hans", "hans@gmail.com", "./img/team/img_01.png");
var person2 = new teamMember("Klaus", "klaus@gmail.com", "./img/team/img_02.png");
var person3 = new teamMember("Maria", "maria@gmail.com", "./img/team/img_03.png");
var person4 = new teamMember("Jane", "jane@gmail.com", "./img/team/img_04.png");


team_members = [person1, person2, person3, person4];


var name_node1 = document.getElementById("name01");
var name_node2 = document.getElementById("name02");
var name_node3 = document.getElementById("name03");
var name_node4 = document.getElementById("name04");

var mail_node1 = document.getElementById("email01");
var mail_node2 = document.getElementById("email02");
var mail_node3 = document.getElementById("email03");
var mail_node4 = document.getElementById("email04");


var img_node1 = document.getElementById("image_01");
var img_node2 = document.getElementById("image_02");
var img_node3 = document.getElementById("image_03");
var img_node4 = document.getElementById("image_04");

name_nodes = [name_node1, name_node2, name_node3, name_node4];
mail_nodes = [mail_node1, mail_node2, mail_node3, mail_node4];
img_nodes = [img_node1, img_node2, img_node3, img_node4]



for (i=0; i<team_members.length; i++){
    name_nodes[i].innerHTML = team_members[i].give_name();
    mail_nodes[i].innerHTML = team_members[i].give_email();
    img_nodes[i].src = team_members[i].give_img();
}















