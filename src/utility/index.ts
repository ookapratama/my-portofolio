export const trueManUtility = {
  preloader(): void {
    // Add 'is-animating' class to the 'html' element
    document.documentElement.classList.add("is-animating");

    // Select the element with the class 'trm-scroll-container'
    var scrollContainer = document.querySelector(
      ".trm-scroll-container"
    ) as HTMLElement | null;

    if (!scrollContainer) {
      return;
    }

    // Set initial opacity to 0
    scrollContainer.style.opacity = "0";
    scrollContainer.style.transition = "opacity 0.6s";

    // Remove 'is-animating' class and set opacity back to 1 after 1 second
    setTimeout(function () {
      document.documentElement.classList.remove("is-animating");
      if (!scrollContainer) return;
      scrollContainer.style.opacity = "1";
    }, 1000);
  },
  scrollAnimation(): void {
    // @ts-ignore
    import("locomotive-scroll").then((locomotiveModule) => {
      const scroll = new locomotiveModule.default({
        el: document.querySelector("#trm-scroll-container") as HTMLElement,
        smooth: true,
        lerp: 0.1,
      });
    });
  },
};
