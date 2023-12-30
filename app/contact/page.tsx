import FinalFooter from '../footer';
import '../resourcescss/contact.css'
export default function Contact() {
return (
  <main>
    <div className="slider flex min-h-screen flex-col items-center justify-between">
      <div className="youtube-container">
        <iframe
          // src="https://www.youtube.com/embed/lFkEHsiMJY8?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&start=34"
          src="https://www.youtube.com/embed/mbSKDPkxRLE?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
      </div>

      <div className="slider-container">
        <h1>Contact Your Website Developer</h1>
        <p>Let's build cool and functional website!</p>
        <div className="cta">
          <a href="https://www.facebook.com/deocodetech" target="_blank" rel="noopener noreferrer">
            Contact Me
          </a>
        </div>
      </div>
      <div className="footer">
        <FinalFooter />
      </div>
    </div>
  </main>
);
}
