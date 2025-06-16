const routes = {
  "/": "<h1>Home</h1><p>Welcome to our homepage!</p>",
  "/services": "<h1>Services</h1><p>Here are our services.</p>",
  "/contact": "<h1>Contact</h1><p>Contact us at sumit123@gmail.com</p>"
};

function router() {
  const hash = window.location.hash || "#/";
  const route = hash.replace("#", "");
  const content = routes[route] || "<h1>404 - Page Not Found</h1>";
  document.getElementById("app").innerHTML = content;
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
