const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  const transitionTop = panel.querySelectorAll("p:nth-child(1)");
  const textUpSize = panel.querySelectorAll("p:nth-child(2)");
  const transitionBot = panel.querySelectorAll("p:nth-child(3)");

  panel.addEventListener("click", () => {
    panel.classList.toggle("grow");
    transitionTop.forEach((element) => {
      element.classList.toggle("slide-in-top");
    });
    transitionBot.forEach((element) => {
      element.classList.toggle("slide-in-bottom");
    });
    textUpSize.forEach((element) => {
      element.classList.toggle("textUpSize");
    });
  });
});
