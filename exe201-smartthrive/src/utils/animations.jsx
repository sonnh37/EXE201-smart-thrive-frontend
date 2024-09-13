import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const animteWithGsap = (target) => {
  gsap.fromTo(
    target,
    {
      y: 20,
      opacity: 0,
      translateY: 20,
    },
    {
      y: 0,
      opacity: 1,
      translateY: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: target,
        toggleActions: "restart reverse restart reverse",
        start: "top 95%",
      },
    }
  );
};
