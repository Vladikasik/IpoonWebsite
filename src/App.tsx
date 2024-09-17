import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Helmet } from 'react-helmet';
import styles from './App.module.css'
import previewImage from '../src/assets/link-preview.png'

function App() {
  const userAgent = navigator.userAgent;

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows NT|Macintosh|Linux/i.test(userAgent)) {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    document.body.innerHTML = '';
    const messageBox = document.createElement('div');
    messageBox.style.position = 'absolute';
    messageBox.style.top = '50%';
    messageBox.style.left = '50%';
    messageBox.style.transform = 'translate(-50%, -50%)';
    messageBox.style.background = 'none';
    messageBox.style.padding = '20px';
    messageBox.style.fontSize = '36px';
    messageBox.style.fontWeight = 'bold';
    messageBox.innerHTML = 'Please access the site using a computer or mobile device.';
    document.body.appendChild(messageBox);
  }


  const handleLinkClick = (url: string) => {
    window.location.href = url;
  };


  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <title>Lightwork Labs</title>
        <meta name="description" content="Community driven consumer startup incubator"/>
        <meta property="og:title" content="Lightwork Labs"/>
        <meta property="og:description" content="Community driven consumer startup incubator"/>
        <meta property="og:image" content="https://for-vlad.vercel.app/build/static/media/link-preview.png" className="nextHead"/>
        <meta property="og:url" content={'https://for-vlad.vercel.app' + window.location.pathname + window.location.search}/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="og:site_name" content="Lightwork"/>
        <meta name="twitter:image" content="https://for-vlad.vercel.app/build/static/media/link-preview.png" />
        <meta property="twitter:title" content="Lightwork Labs"/>
        <meta property="twitter:description" content="Community driven consumer startup incubator"/>
      </Helmet>
      <main>
        <img src={require('./assets/background.png')} alt="background" />
        <a href="https://www.google.com">
            <div className={styles.fixedDiv} id="div1"></div>
        </a>
        <a href="https://www.light-work.info/Lightwork-ef4f4806229e451aa702981751081228">
            <div className={styles.fixeDiv} id="div2"></div>
        </a>
      </main>
      <footer>
        <button onClick={() => handleLinkClick('https://t.me/vladislav_ain')}>
            <img src={require('./assets/telegram.png')} alt="telegram" />
        </button>
        <button onClick={() => handleLinkClick('https://x.com/lightworkdao')}>
            <img src={require('./assets/twitterx.png')} alt="twitter" />
        </button>
        <button onClick={() => handleLinkClick('https://www.linkedin.com/company/light-work-labs')}>
            <img src={require('./assets/linkedin.png')} alt="linkedin" />
        </button>
        <Analytics />
        <SpeedInsights />
    </footer>
    </>
  );
}

export default App;