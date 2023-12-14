let menu = document.getElementById("menu");
let photo= document.getElementById("photo-profile")
photo.addEventListener("click", () => {
  if(menu.className.includes('hidden')){
    menu.classList.remove('hidden');
  }else{
    menu.className += " hidden";
  }
});
