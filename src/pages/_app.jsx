import { spaceMono } from '@/utils/fonts';

// styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/global.css';

import Header from '@/components/header/header';
import Footer from "@/components/footer/footer";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

export default function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   let headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .logo-text');
  //   headings.forEach((e) => {
  //     e.classList.add(prompt.className);
  //   });
  // });

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    let links = document.querySelectorAll(".link");

    links.forEach(function (e) {
      let innerText = e.innerText;
      e.innerText = "";

      let textContainer = document.createElement("div");
      textContainer.className = "block";

      for (let letters of innerText) {
        let span = document.createElement("span");
        span.innerText = letters.trim() === "" ? "\xa0" : letters;
        span.className = "letters";
        textContainer.appendChild(span);
      }

      e.appendChild(textContainer);
      e.appendChild(textContainer.cloneNode(true));
    });

    let blocks = document.querySelectorAll(".block");
    blocks.forEach(function (el) {
      let j = 0;
      for (let i = 0; i < el.children.length; i++) {
        el.children[i].style.transitionDelay = `${j}s`;
        j += 0.03;
      }
    });
  }, []);

  return (
    <div className={spaceMono.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}