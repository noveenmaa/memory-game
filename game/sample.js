const onediv = document.getElementById("oneout");
const twodiv = document.getElementById("two");
const threediv = document.getElementById("three");
const fourdiv = document.getElementById("four");
const fivediv = document.getElementById("five");
const sixdiv = document.getElementById("six");

const trigger = document.getElementById("triggerme");

const showdata = document.getElementById("showdiv");

window.addEventListener("load", function () {
  const imagefill = document.querySelectorAll("img");

  const x = setTimeout(() => {
    for (i = 0; i < imagefill.length; i++) {
      imagefill[i].classList.remove("hidden");
    }
  }, 1000);

  setTimeout(() => {
    for (i = 0; i < imagefill.length; i++) {
      imagefill[i].classList.add("hidden");
    }
  }, 5000);
});

onediv.addEventListener("click", () => {
  const firstimg = document.getElementById("mickey");
  firstimg.classList.remove("hidden");

  function cover() {
    firstimg.classList.add("hidden");
  }
  setTimeout(cover, 1000);
});

twodiv.addEventListener("click", () => {
  const firstimg = document.getElementById("squirral");
  firstimg.classList.remove("hidden");

  function cover() {
    firstimg.classList.add("hidden");
  }
  setTimeout(cover, 1000);
});

threediv.addEventListener("click", () => {
  const firstimg = document.getElementById("bird");
  firstimg.classList.remove("hidden");

  function cover() {
    firstimg.classList.add("hidden");
  }
  setTimeout(cover, 1000);
});
fourdiv.addEventListener("click", () => {
  const firstimg = document.getElementById("kunfu");
  firstimg.classList.remove("hidden");

  function cover() {
    firstimg.classList.add("hidden");
  }
  setTimeout(cover, 1000);
});
fivediv.addEventListener("click", () => {
  const firstimg = document.getElementById("penguin");
  firstimg.classList.remove("hidden");

  function cover() {
    firstimg.classList.add("hidden");
  }
  setTimeout(cover, 1000);
});

sixdiv.addEventListener("click", () => {
  const firstimg = document.getElementById("lion");
  firstimg.classList.remove("hidden");

  function cover() {
    firstimg.classList.add("hidden");
  }
  setTimeout(cover, 1000);
});

trigger.addEventListener("click", () => {
  const itemarray = [
    "lion",
    "penguin",
    "kunfu-panda",
    "cutee-bird",
    "mickey-mouse",
    "Squirral",
  ];
  const randomval = itemarray[Math.floor(Math.random() * 6)];

  const poping = document.createElement("h1");

  poping.innerHTML = randomval;
  showdata.appendChild(poping);

  function clear() {
    poping.innerHTML = "";
  }
  setTimeout(clear, 2000);
});
