import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import styles from './App.module.css'


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
      <main>
        <img src={require('./assets/background.png')} alt="background" />
        <a href="https://www.google.com">
            <div className={styles.fixedDiv} id="div1"></div>
        </a>
        <a href="https://www.light-work.info/Lightwork-ef4f4806229e451aa702981751081228">
            <div className={styles.fixeвDiv} id="div2"></div>
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
