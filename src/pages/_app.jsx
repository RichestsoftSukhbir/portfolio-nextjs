import { spaceMono } from '@/utils/fonts';

// styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/global.css';

import Header from '@/components/header/header';
import Footer from "@/components/footer/footer";
// import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   let headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .logo-text');
  //   headings.forEach((e) => {
  //     e.classList.add(prompt.className);
  //   });
  // });

  return (
    <div className={spaceMono.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}