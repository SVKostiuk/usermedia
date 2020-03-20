window.onload = () => {
  /**
   * @type {Element}
   */
  const el = document.getElementById('root');

  const MD = navigator.mediaDevices;
  const MDuserMedia = MD && MD.getUserMedia;
  const NuserMedia = navigator.getUserMedia

  el.innerHTML = `
    navigator.mediaDevices: ${typeof MD} <br />
    navigator.mediaDevices.getUserMedia: ${typeof MDuserMedia} <br />
    navigator.getUserMedia: ${typeof NuserMedia}
    `
}