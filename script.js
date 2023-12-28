const textRespond = document.querySelector(".text-respond");
const buttons = document.querySelectorAll(".button");
const pickBtn = document.querySelector(".pick-btn");
const respondContainer = document.querySelector(".respond-container");

const mangoFloat = [
  {
    class: "cheap",
    innerText: "Ikaw na bahala assemble ana. Daku naka. 😊",
    img: [
      "images/condensed-milk.webp",
      "images/grahams-cracker.webp",
      "images/grahams-powder.webp",
      "images/mango.webp",
    ],
  },
  {
    class: "regular",
    innerText: "Wieee! Here's your Regular Mango Float. Hope you like it! 🥰",
    img: ["images/regular.webp"],
  },
  {
    class: "premium",
    innerText:
      "Charannnnn! Here's your Premium Mango Float. 🤩 Enjoy while it lasts, bai!",
    img: ["images/premium.webp"],
  },
];

for (const button of buttons) {
  button.addEventListener("click", () => {
    pickBtn.classList.add("active");

    for (const btn of buttons) {
      btn.classList.remove("clicked");
    }

    button.classList.add("clicked");
  });
}

pickBtn.addEventListener("click", () => {
  for (const button of buttons) {
    if (button.classList.contains("clicked")) {
      const pickedChoice = mangoFloat.filter(
        (arr) => button.id == arr["class"]
      );

      let imageElements = pickedChoice[0].img.map((imageSource) => {
        return `<img src=${imageSource} alt="">`;
      });

      respondContainer.innerHTML = `
        <p class="text-respond">${pickedChoice[0].innerText}</p>
        <div class="img-container">
          ${imageElements.join("")}
        </div>`;
      button.classList.remove("clicked");
    }
  }
  pickBtn.classList.remove("active");
});

document.addEventListener("click", function (event) {
  const isClickedOutsideChoices = () => {
    for (const button of buttons) {
      if (button.contains(event.target)) {
        return false;
      }
    }
    return true;
  };

  if (isClickedOutsideChoices()) {
    for (const button of buttons) {
      button.classList.remove("clicked");
    }
    pickBtn.classList.remove("active");
  }
});
