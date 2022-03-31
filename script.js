const APIURL = "https://api.github.com/users/";

const form = document.querySelector("#form");
const search = document.querySelector("#search");
const main = document.querySelector("#main");

getUser("jumorroni");

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  console.log(resp);
  const respUser = await resp.json();
  console.log(respUser);
  createUserCard(respUser);
  //   getRepos(username);
}
async function getRepos(username) {
  const resp = await fetch(APIURL + username + "/repos");
  console.log(resp);
  const respUser = await resp.json();
  console.log(respUser);
}

function createUserCard(user) {
  console.log(user.name);
  const { name, avatar_url, bio, followers, following, public_repos } = user;
  const card = `
  <div class="card">
      <div>
          <img class="card__avatar" src="${avatar_url}" alt="${name}" />
      </div>
      <div class="user-info">
          <h2>${name}</h2>
          <p>${bio}</p>

          <ul class="info">
              <li>${followers}<strong>Followers</strong></li>
              <li>${following}<strong>Following</strong></li>
              <li>${public_repos}<strong>Repos</strong></li>
          </ul>

          <div id="repos"></div>
      </div>
  </div>
`;
  main.innerHTML = card;
}
