import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import "./Page.css";
import { useEffect, useState } from "react";

export const Page = ({ element }) => {
  const [hideBackground, setHideBackground] = useState(false);

  useEffect(() => {
    const getShouldHideBackground = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
      const isMac = /Macintosh/.test(userAgent);
      return isMobile || isIOS || isMac;
    };

    setHideBackground(getShouldHideBackground());
  }, [setHideBackground]);

  return (
    <div className={"page" + (hideBackground ? " page-background-hidden" : "")}>
      <Header />
      <div className="page-content">{element}</div>
      <Footer />
      <div className={"page-background"}>
        {/* <div className='page-background-emojis'>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>🌌</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>☄️</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>📘</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>🦾</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>🛰️</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>🥼</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>🔭</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>💻</div>
					</div>
				</div>
				<div className='page-background-emoji-stars'>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
				</div> */}
      </div>
    </div>
  );
};
