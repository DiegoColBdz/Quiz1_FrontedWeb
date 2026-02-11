let total = 0;
let log = [];

function init() {
  const btnClick = document.getElementById("btnClick");
  const btnReset = document.getElementById("btnReset");

  btnClick.addEventListener("click", addClick);
  btnReset.addEventListener("click", resetAll);

  const footer = document.getElementById("footer");
  const grupo = "B";
  const codigo = "SC01";
  footer.innerText = "Entrega: WEB-01 | Grupo: " + grupo + " | Codigo: " + codigo;

  render();
}

function addClick() {
  total += 1;
  log.push("Click #" + total);
  render();
}

function render() {
  const totalEl = document.getElementById("total");
  const logEl = document.getElementById("log");
  const messageEl = document.getElementById("message");

  totalEl.innerText = "Total: " + total;

  logEl.innerHTML = "";
  const lastFive = log.slice(-5);
  lastFive.forEach(function (item) {
    const li = document.createElement("li");
    li.innerText = item;
    logEl.appendChild(li);
  });

  messageEl.innerText = "";
  messageEl.className = "success";
}

function resetAll() {
  total = 0;
  log = [];
  render();

  const messageEl = document.getElementById("message");
  messageEl.innerText = "Contador reiniciado";
  messageEl.className = "error";
}

init();
