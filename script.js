let infoBtn = document.getElementById("infoBtn");
let ulTag = document.createElement("ul");
document.body.appendChild(ulTag);

function infoFun() {
  let infoPrompt = prompt("შეიყვანეთ ინფორმაცია");
  if (infoPrompt.length > 0) {
    // Create elements

    let liTag = document.createElement("li");
    ulTag.appendChild(liTag);
    liTag.textContent = infoPrompt;

    let liBtn = document.createElement("button");
    liTag.appendChild(liBtn);

    // style side
    liBtn.textContent = "Remove";
    // klasis saxelebs ar vimchnevt mainc satestoa :ddd
    ulTag.classList.add("js-ul")
    liTag.classList.add("js-li")
    liBtn.classList.add("btn")

    // functions

    liBtn.addEventListener("click", () => {
        if(liTag.childNodes[0].length > 0){
            liTag.childNodes[0].remove();
        }else{
            alert("ტექსტი აღარ გაქ შეეეშვიიი")
       }
    });
  } else {
    alert("შეიყვანე ინფორმაცია");
  }
}
infoBtn.addEventListener("click", infoFun);
