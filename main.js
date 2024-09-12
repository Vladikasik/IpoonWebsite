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