import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.05
});

scroll.on('scroll', () => {
  ScrollTrigger.update();
});

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop(value) {
    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector('[data-scroll-container]').style.transform ? 'transform' : 'fixed'
});

ScrollTrigger.defaults({
  scroller: '[data-scroll-container]'
});

ScrollTrigger.addEventListener('refresh', () => scroll.update());

ScrollTrigger.refresh();

document.addEventListener('DOMContentLoaded', () => {
  // Animação do header
  gsap.from('header', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power3.out'
  });

  // Animação das seções
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Animação do footer
  gsap.from('footer', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation for the "Sobre Nós" section
  gsap.from('.sobre-nos', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.sobre-nos',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation for the "Blog" section
  gsap.from('.blog', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.blog',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation for the "Serviços" section
  gsap.from('.servicos', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.servicos',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation for the "Contato" section
  gsap.from('.contato', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contato',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation for the banner section
  gsap.from('.banner', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.banner',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
});