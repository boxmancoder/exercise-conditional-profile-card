import "../style/index.css";

function render(variables = {}) {
  const {
    background,
    includeCover,
    avatarURL,
    name,
    lastname,
    role,
    city,
    country,
    twitter,
    github,
    linkedin,
    instagram,
    socialMediaPosition
  } = variables;

  const cover = includeCover
    ? `<div class="cover"><img src="${background}" /></div>`
    : "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${avatarURL}" class="photo" />
      <h1>${name} ${lastname}</h1>
      <h2>${role}</h2>
      <h3>${city}, ${country}</h3>
      <ul class="${socialMediaPosition}">
        <li><a href="https://twitter.com/${twitter ||
          ""}"><i class="fa fa-twitter"></i></a></li>
        <li><a href="https://github.com/${github ||
          ""}"><i class="fa fa-github"></i></a></li>
        <li><a href="https://linkedin.com/${linkedin ||
          ""}"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="https://instagram.com/${instagram ||
          ""}"><i class="fa fa-instagram"></i></a></li>
      </ul>
    </div>
  `;
}

window.onload = function() {
  window.variables = {
    // Defaulting the cover to true. Change to false if you prefer no cover by default.
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let value = e.target.value;

      if (value === "true" || value === "false") {
        value = value === "true";
      }

      window.variables[attribute] = value === "" ? null : value;
      render(window.variables);
    });
  });
};
