const input = document.querySelector(".username");
const nombre = document.querySelector(".js-user-name");
const localidad = document.querySelector(".js-user-location");
const reposPublicos = document.querySelector(".js-user-repos");
const seguidores = document.querySelector(".js-user-followers");
const fotoPerfil = document.querySelector(".profile-pic");
const card = document.querySelector(".user-wrapper");
const usuario = document.querySelector(".js-login");
const boton = document.querySelector(".search");
const horror = document.querySelector(".error")

boton.addEventListener("click", getData);

async function getData() {
  let userName = input.value;
  let responseData = await fetch(`https://api.github.com/users/${userName}`);
  let userData = await responseData.json();
  if (userData.message && userData.message=="Not Found") {
    horror.style.display = "flex";
    horror.classList.add("show");
    card.style.display = "none";
  } else {
    input.value = null;
    horror.style.display = "none";
    card.style.display = "block";
    usuario.innerHTML = userData.login;
    nombre.innerHTML = userData.name;
    localidad.innerHTML = userData.location;
    reposPublicos.innerHTML = userData.public_repos;
    seguidores.innerHTML = userData.followers;
    fotoPerfil.src = userData.avatar_url;
    showPicture ()
  }
}

function showPicture() {
    fotoPerfil.style.display = "block";
}
