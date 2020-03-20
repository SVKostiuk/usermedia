window.onload = () => {
  /**
   * @returns {Element}
   */
  const p = success => {
    let color;
    switch (success) {
      case true:
        color = 'darkgreen';
        break;
      case false:
        color = 'tomato';
        break;
      default:
        color = 'black';
    }

    const el = document.createElement('p');
    el.style.color = color;
    document.body.appendChild(el);
    return el;
  }

  const devMedia = typeof (navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  const navMedia = typeof (navigator.getUserMedia);

  p().innerHTML = `navigator.mediaDevices.getUserMedia: ${devMedia} <br /> navigator.getUserMedia: ${navMedia}`;

  if (devMedia === 'function') {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => p(true).innerHTML = 'navigator.mediaDevices.getUserMedia -> AUDIO SUCCESS')
      .catch(({ name }) => p(false).innerHTML = 'navigator.mediaDevices.getUserMedia -> AUDIO ' + name);

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => p(true).innerHTML = 'navigator.mediaDevices.getUserMedia -> VIDEO SUCCESS')
      .catch(({ name }) => p(false).innerHTML = 'navigator.mediaDevices.getUserMedia -> VIDEO ' + name);
  }

  if (navMedia === 'function') {
    const wrapper = options => {
      return new Promise((resolve, reject) => navigator.getUserMedia(options, resolve, reject));
    };

    wrapper({ audio: true })
      .then(() => p(true).innerHTML = 'navigator.getUserMedia -> AUDIO SUCCESS')
      .catch(({ name }) => p(false).innerHTML = 'navigator.getUserMedia -> AUDIO ' + name);

    wrapper({ video: true })
      .then(() => p(true).innerHTML = 'navigator.getUserMedia -> VIDEO SUCCESS')
      .catch(({ name }) => p(false).innerHTML = 'navigator.getUserMedia -> VIDEO ' + name);
  }
}