const videoBtn = document.querySelector("[data-video-button]");
const videoWrapper = document.querySelector("[data-video-wrapper]");
const player = document.querySelector("[data-player]");

const trunOffOverlay = () => {
  videoWrapper.classList.add("video__videoWrapper--noOverlay");
  videoBtn.classList.add("video__playButton--hide");
  player.src += "?autoplay=1;start=0";
};

videoBtn.addEventListener("click", trunOffOverlay);
