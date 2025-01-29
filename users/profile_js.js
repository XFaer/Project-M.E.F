
class Roles{
    constructor(name, background_color, description, secret){
        this.name = name
        this.background_color = background_color
        this.description = description
        this.secret = secret
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }


window.addEventListener("load", function() {
if (getCookie("authorization_code") != "1") {
    for (let i = 0; i < roles.length; i++){
        if(roles[i].secret){
            roles[i].description = "[SECRET]"
        }
    }
    }

    for (let i = 0; i < roles.length; i++){
        document.querySelector(".roles").innerHTML += `
        <div class="role"> 
           <div class="role-insaid" data-tooltip="${roles[i].description}">
                <p> <div class="circle" style="background-color: ${roles[i].background_color};"></div>${roles[i].name}</p>
           </div
        </div>
            `
    }

})

