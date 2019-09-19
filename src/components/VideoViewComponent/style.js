import styled from 'styled-components'

export const StyledVideoView = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .share-btns {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #323332;
    height: 80px;
  }

  .sb-soundplayer-btn {
    display: inline-block;
    background-color: transparent;
    color: #fc561e;
    font-size: 1em;
    padding: 16px;
    padding: 1rem;
    margin: 0;
    height: auto;
    vertical-align: middle;
    border-radius: 3px;
    text-decoration: none;
    border: 0;
    outline: none;
    cursor: pointer;
    -webkit-transition: 0.05s ease, -webkit-transform, -webkit-box-shadow;
    transition: 0.05s ease, -webkit-transform, -webkit-box-shadow;
    transition: transform, box-shadow, 0.05s ease;
    transition: transform, box-shadow, 0.05s ease, -webkit-transform,
      -webkit-box-shadow;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
  }
  .sb-soundplayer-btn:hover {
    -webkit-transform: scale(1.0625);
    transform: scale(1.0625);
  }
  .sb-soundplayer-btn:focus {
    -webkit-transform: scale(0.9375);
    transform: scale(0.9375);
  }
  .sb-soundplayer-btn:active {
    -webkit-box-shadow: inset 0 0 0 2px #fc561e;
    box-shadow: inset 0 0 0 2px #fc561e;
  }
  .sb-soundplayer-btn:hover,
  .sb-soundplayer-btn:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .sb-soundplayer-volume {
    position: relative;
  }
  .sb-soundplayer-volume:hover div {
    width: 80px;
  }
  .sb-soundplayer-volume div {
    overflow: hidden;
    width: 0;
    -webkit-transition: width 0.2s ease-out;
    transition: width 0.2s ease-out;
    position: relative;
  }
  .sb-soundplayer-volume-range {
    -webkit-appearance: none;
    width: 98%;
  }
  .sb-soundplayer-volume-range:focus {
    outline: none;
  }
  /* track */
  .sb-soundplayer-volume-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.2em;
    cursor: pointer;
    animate: 0.2s;
    background: #ddd;
    border-radius: 1.3px;
  }
  .sb-soundplayer-volume-range::-moz-range-track {
    width: 100%;
    height: 0.2em;
    cursor: pointer;
    animate: 0.2s;
    background: #ddd;
    border-radius: 1.3px;
  }
  .sb-soundplayer-volume-range::-ms-track {
    width: 100%;
    height: 0.2em;
    cursor: pointer;
    animate: 0.2s;
    background: #ddd;
    border-radius: 1.3px;
  }
  /* thumb dial */
  .sb-soundplayer-volume-range::-moz-range-thumb {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #fc561e;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4em;
  }
  .sb-soundplayer-volume-range::-webkit-slider-thumb {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #fc561e;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4em;
  }
  .sb-soundplayer-volume-range::-ms-thumb {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #fc561e;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4em;
  }
  /* progress fill */
  .sb-soundplayer-volume-range::-ms-fill-lower {
    background: #fc561e;
  }

  .sb-soundplayer-cover {
    color: #fff;
    background-color: #f5f5f5;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 30px 30px 20px 30px;
    margin-bottom: 20px;
    height: 440px;
    position: relative;
    overflow: hidden;
    cursor: default;
    border-radius: 2px;
  }
  .sb-soundplayer-cover:after {
    content: '';
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.05)),
      to(rgba(0, 0, 0, 0.35))
    );
    background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.35));
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .sb-soundplayer-cover .sb-soundplayer-info-box {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 5px 10px;
    margin-bottom: 5px;
    border-radius: 1px;
  }
  .sb-soundplayer-cover .sb-soundplayer-track {
    font-weight: 600;
    font-size: 24px;
  }
  .sb-soundplayer-cover .sb-soundplayer-artist {
    font-size: 18px;
  }
  .sb-soundplayer-cover-logo {
    color: rgba(255, 255, 255, 0.9);
    width: 100px;
    height: 14px;
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 2;
  }

  .sb-soundplayer-icon {
    width: 1em;
    height: 1em;
    position: relative;
    vertical-align: middle;
  }

  .sb-soundplayer-progress-container {
    background-color: #ddd;
    width: 100%;
    height: 10px;
    overflow: hidden;
    cursor: pointer;
  }

  .sb-soundplayer-progress-inner {
    background-color: #fc561e;
    height: 100%;
    -webkit-transition: width 0.2s ease-in;
    transition: width 0.2s ease-in;
  }
`
