<template>
  <div class="container">
    <div class="vertial-nav">
      <div class="gradient-division gradient-division-top"></div>
      <div class="arrow-up"><van-icon name="arrow-up" /></div>
      <ul>
        <li v-for="(tab, index) in tabNav" :key="index" @click="changeTabNav(index)">{{ tab.item }}</li>
      </ul>
      <div class="arrow-down"><van-icon name="arrow-down" /></div>
      <div class="gradient-division gradient-division-bottom"></div>
    </div>

    <div style="margin-left: 100px;">
      <div class="wrap">
        <label for="">姓名</label>
        <label for=""><input type="text"></label>
        <label for="">搜索</label>
      </div>

      <div class="form">
        <div>
          <label for="">姓名：</label>
          <input type="text">
        </div>
        <div>
          <label for="">请输入密码：</label>
          <input type="text">
        </div>
      </div>
    </div>

    <div class="text-md" style="margin-left: 100px;">
      <ul class="flex-item icon_container">
        <!-- <li class="icon_container-item">
          <svg xmlns="https://www.w3.org/2000/svg" class="icon huge icon-alarm">
              <g stroke-width=".033333em" stroke-linecap="round" stroke="#444444" fill="none">
                  <circle cx="50%" cy="50%" r="1.25em"></circle>
                  <line x1="50%" y1="1.2em" x2="50%" y2="50%" class="icon-alarm_arms_long"></line>
                  <line x1="50%" y1="1.5em" x2="50%" y2="50%" class="icon-alarm_arms_short"></line>
                  <circle r=".7em" cx="34%" cy="32%" stroke-dasharray="1.2em 3em" stroke-dashoffset="2.1em" class="icon-alarm_bells"></circle>
                  <circle r=".7em" cx="66%" cy="32%" stroke-dasharray="1.2em 3.15em" stroke-dashoffset="1.1em" class="icon-alarm_bells"></circle>
                  <line x1="19%" y1="89%" x2="28%" y2="78%"></line>
                  <line x1="81%" y1="89%" x2="72%" y2="78%"></line>
              </g>
          </svg>
        </li> -->
        <li class="icon_container-item">
          <svg xmlns="https://www.w3.org/2000/svg" class="icon icon-adjustments">
            <g stroke-width=".1em" stroke-linecap="round" stroke="#444444">
              <g class="icon-adjustments_animation">
                <circle cx=".85em" cy=".43em" r=".2em" fill="none"></circle>
                <line x1=".86em" y1=".43em" x2=".86em" y2="3.5em"></line>
              </g>
              <g class="icon-adjustments_animation">
                <circle cx="2em" cy=".43em" r=".2em" fill="none"></circle>
                <line x1="2em" y1=".43em" x2="2em" y2="3.5em"></line>
              </g>
              <g class="icon-adjustments_animation">
                <circle cx="3.15em" cy=".43em" r=".2em" fill="none"></circle>
                <line x1="3.15em" y1=".43em" x2="3.15em" y2="3.5em"></line>
              </g>
            </g>
          </svg>
        </li>
        <li class="icon_container-item">
          <svg xmlns="https://www.w3.org/2000/svg" class="icon icon-alarm">
              <g stroke-width=".1em" stroke-linecap="round" stroke="#444444" fill="none">
                  <circle cx="50%" cy="50%" r="1.45em"></circle>
                  <line x1="50%" y1="1.2em" x2="50%" y2="50%" class="icon-alarm_arms_long"></line>
                  <line x1="50%" y1="1.5em" x2="50%" y2="50%" class="icon-alarm_arms_short"></line>
                  <circle r=".7em" cx="34%" cy="32%" stroke-dasharray="1.2em 3em" stroke-dashoffset="2.1em" class="icon-alarm_bells"></circle>
                  <circle r=".7em" cx="66%" cy="32%" stroke-dasharray="1.2em 3.15em" stroke-dashoffset="1.1em" class="icon-alarm_bells"></circle>
                  <line x1="19%" y1="89%" x2="28%" y2="78%"></line>
                  <line x1="81%" y1="89%" x2="72%" y2="78%"></line>
              </g>
          </svg>
        </li>
        <li class="icon_container-item">
          <svg xmlns="https://www.w3.org/2000/svg" class="icon icon-aperture">
              <defs>
                  <clipPath id="icon-aperture_mask" width="100%" height="100%">
                      <circle cx="50%" cy="50%" r="1.25em"></circle>
                  </clipPath>
              </defs>
              <g stroke-width=".1em" stroke-linecap="round" stroke="#444444" fill="none">
                  <circle fill="none" stroke-miterlimit="10" cx="50%" cy="50%" r="1.25em"></circle>
                  <g clip-path="url(#icon-aperture_mask)" class="icon-aperture_tooths">
                      <circle cx="67%" cy="64%" r="1.65em"></circle>
                      <circle cx="67%" cy="64%" r="1.65em"></circle>
                      <circle cx="67%" cy="64%" r="1.65em"></circle>
                      <circle cx="67%" cy="64%" r="1.65em"></circle>
                      <circle cx="67%" cy="64%" r="1.65em"></circle>
                      <circle cx="67%" cy="64%" r="1.65em"></circle>
                  </g>
              </g>
          </svg>
        </li>
        <li class="icon_container-item">
          <svg xmlns="https://www.w3.org/2000/svg" class="icon icon-geolocation">
              <g stroke-width=".1em" stroke-linecap="round" stroke="#444444" fill="none">
                  <g class="icon-geolocation_marker">
                      <path d="M31.25,12c-8.271,0-15,6.742-15,15.027 c0,12.41,14.001,24.324,14.597,24.826C30.964,51.951,31.108,52,31.25,52c0.142,0,0.283-0.047,0.398-0.142 c0.595-0.493,14.602-12.204,14.602-24.832C46.25,18.742,39.521,12,31.25,12L31.25,12z"></path>
                      <path d="M31.25,19.5c-4.136,0-7.5,3.363-7.5,7.5c0,4.136,3.364,7.5,7.5,7.5 c4.136,0,7.5-3.364,7.5-7.5C38.75,22.863,35.386,19.5,31.25,19.5z"></path>
                  </g>
                  <g stroke-width=".15em" class="icon-geolocation_sparks">
                      <line x1="50%" y1="35%" x2="50%" y2="50%" class="icon-geolocation_sparks-item"></line>
                      <line x1="50%" y1="35%" x2="50%" y2="50%" class="icon-geolocation_sparks-item"></line>
                      <line x1="50%" y1="35%" x2="50%" y2="50%" class="icon-geolocation_sparks-item"></line>
                      <line x1="50%" y1="35%" x2="50%" y2="50%" class="icon-geolocation_sparks-item"></line>
                      <line x1="50%" y1="35%" x2="50%" y2="50%" class="icon-geolocation_sparks-item"></line>
                  </g>
              </g>
          </svg>
        </li>
        <li class="icon_container-item">
          <svg xmlns="https://www.w3.org/2000/svg" class="icon icon-dial">
              <g stroke-width=".1em" stropathke-linecap="round" stroke="#444444" fill="none">
                  <circle r=".05em" cx="50%" cy="50%" class="icon-dial_dot"></circle>
                  <circle r=".05em" cx="50%" cy="50%" class="icon-dial_dot"></circle>
                  <circle r=".05em" cx="50%" cy="50%" class="icon-dial_dot"></circle>
                  <circle r=".05em" cx="50%" cy="50%" class="icon-dial_dot"></circle>
                  <circle r=".05em" cx="50%" cy="50%" class="icon-dial_dot"></circle>
                  <circle r=".05em" cx="50%" cy="50%" class="icon-dial_dot"></circle>
                  <circle r=".05em" cx="50%" cy="50%" class="icon-dial_dot"></circle>
                  <circle r=".05em" cx="50%" cy="50%" class="icon-dial_dot"></circle>
                  <circle r=".35em" cx="50%" cy="50%" class="icon-dial_center"></circle>
                  <path d="M39.138,24.996L32.442,18.3c-0.244-0.244-0.64-0.244-0.884,0 l-6.63,6.63c-3.859,3.859-3.891,10.17-0.07,14.069c1.87,1.908,4.369,2.974,7.042,3.001s5.193-0.987,7.101-2.857 c0-0.001,0.071-0.071,0.072-0.073l0,0C42.931,35.211,42.962,28.9,39.138,24.996z"
                  class="icon-dial_mark"></path>
              </g>
          </svg>
        </li>
        <li class="icon_container-item">
          <svg xmlns="https://www.w3.org/2000/svg" class="icon icon-atom">
              <g stroke-width=".1em" stroke-linecap="round" stroke="#444444" fill="none">
                  <circle r="1.35em" cx="50%" cy="50%" class="icon-atom_orbit"></circle>
                  <circle r="1.35em" cx="50%" cy="50%" class="icon-atom_orbit"></circle>
                  <circle r="1.35em" cx="50%" cy="50%" class="icon-atom_orbit"></circle>
                  <circle r=".25em" cx="50%" cy="50%"></circle>
              </g>
          </svg>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabNav: [
        {item: '垂直'},
        {item: '竖直123'},
        {item: 'world'},
        {item: '垂直world'},
      ]
    }
  },
  methods: {
    changeTabNav (index) {
      
    }
  }
}
</script>

<style lang="less" scoped>
// @import url(http://fonts.googleapis.com/css?family=Open+Sans:700,300);
// html,
// body,
// div,
// span,
// applet,
// object,
// iframe,
// h1,
// h2,
// h3,
// h4,
// h5,
// h6,
// p,
// blockquote,
// pre,
// a,
// abbr,
// acronym,
// address,
// big,
// cite,
// code,
// del,
// dfn,
// em,
// img,
// ins,
// kbd,
// q,
// s,
// samp,
// small,
// strike,
// strong,
// sub,
// sup,
// tt,
// var,
// b,
// u,
// i,
// center,
// dl,
// dt,
// dd,
// ol,
// ul,
// li,
// fieldset,
// form,
// label,
// legend,
// table,
// caption,
// tbody,
// tfoot,
// thead,
// tr,
// th,
// td,
// article,
// aside,
// canvas,
// details,
// embed,
// figure,
// figcaption,
// footer,
// header,
// hgroup,
// menu,
// nav,
// output,
// ruby,
// section,
// summary,
// time,
// mark,
// audio,
// video {
//     margin: 0;
//     padding: 0;
//     border: 0;
//     font: inherit;
//     font-size: 100%;
//     vertical-align: baseline;
// // }
// html {
//     line-height: 1;
// }
// ol,
// ul {
//     list-style: none;
// }
// table {
//     border-collapse: collapse;
//     border-spacing: 0;
// }
// caption,
// th,
// td {
//     text-align: left;
//     font-weight: normal;
//     vertical-align: middle;
// }
// q,
// blockquote {
//     quotes: none;
// }
// q:before,
// q:after,
// blockquote:before,
// blockquote:after {
//     content: "";
//     content: none;
// }
// a img {
//     border: none;
// }
// article,
// aside,
// details,
// figcaption,
// figure,
// footer,
// header,
// hgroup,
// main,
// menu,
// nav,
// section,
// summary {
//     display: block;
// }
// body {
//     font-family: "Open Sans", sans-serif;
//     font-size: 16px;
//     text-align: center;
//     color: #444;
//     background: #d0d0d0;
// // }
// main {
//     margin-bottom: 3em;
// }
// header {
//     margin-bottom: 2em;
// }
// h1 {
//     font-size: 2em;
//     margin: 1.4em 0 1em;
// }
// h2 {
//     margin: 0 auto;
//     width: 16em;
//     line-height: 1.4em;
// }
// strong {
//     font-weight: 700;
// }
// p {
//     line-height: 1.5em;
//     margin-bottom: 1em;
// }
// p:last-child {
//     margin: 0;
// }
// div {
//     position: relative;
// }
// [aria-hidden="true"] {
//     pointer-events: none;
//     position: absolute;
//     z-index: 0;
//     opacity: 0;
// }
.flex-item {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
// [role='link'] {
//     display: inline-block;
//     border-radius: .1em;
//     padding: 1em;
//     cursor: pointer;
//     -webkit-transition: all 0.3s cubic-bezier(0.46, -0.44, 0.43, 1.43);
//     transition: all 0.3s cubic-bezier(0.46, -0.44, 0.43, 1.43);
// }
// [role='link']:hover {
//     background-color: #f5f5f5;
// }
g,
line,
path,
circle {
  transition: all 0.3s cubic-bezier(0.46, -0.44, 0.43, 1.43);
  transform-origin: 2.5em 2.5em;
}
.icon {
  width: 6em;
  height: 6em;
  margin: .5em;
  padding: .5em;
  border-radius: .1em;
  transition: all 0.6s ease-in-out;
}
.icon.huge {
  font-size: 3em;
}
.icon:hover {
  background-color: #f5f5f5;
}
.icon:hover line,
.icon:hover path,
.icon:hover circle {
  stroke: #FF389D;
}
.icon_container {
  width: 40em;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  padding: .5em;
  margin-bottom: 2em;
  background: white;
  border-radius: .1em;
  box-shadow: 0 1em 4em -1em rgba(0, 0, 0, 0.4), 0 2em 5em -2em rgba(0, 0, 0, 0.2);
}

.icon-dial_dot:nth-child(1) {
  -webkit-transform: rotate(0deg) translateY(-1.2em);
  transform: rotate(0deg) translateY(-1.2em);
}
.icon-dial_dot:nth-child(2) {
  -webkit-transform: rotate(45deg) translateY(-1.2em);
  transform: rotate(45deg) translateY(-1.2em);
}
.icon-dial_dot:nth-child(3) {
    -webkit-transform: rotate(90deg) translateY(-1.2em);
    transform: rotate(90deg) translateY(-1.2em);
}
.icon-dial_dot:nth-child(4) {
    -webkit-transform: rotate(135deg) translateY(-1.2em);
    transform: rotate(135deg) translateY(-1.2em);
}
.icon-dial_dot:nth-child(5) {
    -webkit-transform: rotate(180deg) translateY(-1.2em);
    transform: rotate(180deg) translateY(-1.2em);
}
.icon-dial_dot:nth-child(6) {
    -webkit-transform: rotate(225deg) translateY(-1.2em);
    transform: rotate(225deg) translateY(-1.2em);
}
.icon-dial_dot:nth-child(7) {
    -webkit-transform: rotate(270deg) translateY(-1.2em);
    transform: rotate(270deg) translateY(-1.2em);
}
.icon-dial_dot:nth-child(8) {
    -webkit-transform: rotate(315deg) translateY(-1.2em);
    transform: rotate(315deg) translateY(-1.2em);
}
.icon-dial .icon-dial_dot,
.icon-dial .icon-dial_mark,
.icon-dial .icon-dial_center {
    -webkit-transition-duration: 0.6s;
    transition-duration: 0.6s;
}
.icon-dial .icon-dial_mark {
    transform: rotateZ(45deg) translate(.5em, .5em);
}
.icon-dial:hover .icon-dial_mark {
    transform: rotateZ(270deg) translate(.5em, .5em);
}
.icon-atom g {
    -webkit-transition-duration: 1.2s;
    transition-duration: 1.2s;
}
.icon-atom_orbit:nth-of-type(1) {
    -webkit-transform: rotateZ(120deg) rotateY(65deg);
    transform: rotateZ(120deg) rotateY(65deg);
}
.icon-atom_orbit:nth-of-type(2) {
    -webkit-transform: rotateZ(240deg) rotateY(65deg);
    transform: rotateZ(240deg) rotateY(65deg);
}
.icon-atom_orbit:nth-of-type(3) {
    -webkit-transform: rotateZ(360deg) rotateY(65deg);
    transform: rotateZ(360deg) rotateY(65deg);
}
.icon-atom:hover g {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}

.icon-adjustments_animation circle {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
.icon-adjustments_animation line {
    stroke-dasharray: 3em, 1em;
    stroke-dashoffset: 7.5em;
}
.icon-adjustments_animation:nth-child(1) circle {
    -webkit-transform: translateY(2.37em);
    transform: translateY(2.37em);
}
.icon-adjustments_animation:nth-child(1) line {
    stroke-dashoffset: 5.13em;
}
.icon-adjustments_animation:nth-child(2) circle {
    -webkit-transform: translateY(1.29em);
    transform: translateY(1.29em);
}
.icon-adjustments_animation:nth-child(2) line {
    stroke-dashoffset: 6.21em;
}
.icon-adjustments_animation:nth-child(3) circle {
    -webkit-transform: translateY(1.71em);
    transform: translateY(1.71em);
}
.icon-adjustments_animation:nth-child(3) line {
    stroke-dashoffset: 5.79em;
}
.icon-adjustments:hover .icon-adjustments_animation:nth-child(1) circle {
    -webkit-transform: translateY(0.78em);
    transform: translateY(0.78em);
}
.icon-adjustments:hover .icon-adjustments_animation:nth-child(1) line {
    stroke-dashoffset: 6.72em;
}
.icon-adjustments:hover .icon-adjustments_animation:nth-child(2) circle {
    -webkit-transform: translateY(1.86em);
    transform: translateY(1.86em);
}
.icon-adjustments:hover .icon-adjustments_animation:nth-child(2) line {
    stroke-dashoffset: 5.64em;
}
.icon-adjustments:hover .icon-adjustments_animation:nth-child(3) circle {
    -webkit-transform: translateY(0.39em);
    transform: translateY(0.39em);
}
.icon-adjustments:hover .icon-adjustments_animation:nth-child(3) line {
    stroke-dashoffset: 7.11em;
}

.icon-geolocation {
    -webkit-perspective: 90em;
    perspective: 90em;
}
.icon-geolocation_sparks {
    transform: translateY(1.3em) rotateX(70deg) rotateZ(180deg);
}
.icon-geolocation_sparks-item {
    stroke-dasharray: .3em, 1.2em;
    stroke-dashoffset: .9em;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.icon-geolocation_sparks-item:nth-of-type(1) {
    -webkit-transform: rotate(72deg);
    transform: rotate(72deg);
}
.icon-geolocation_sparks-item:nth-of-type(2) {
    -webkit-transform: rotate(144deg);
    transform: rotate(144deg);
}
.icon-geolocation_sparks-item:nth-of-type(3) {
    -webkit-transform: rotate(216deg);
    transform: rotate(216deg);
}
.icon-geolocation_sparks-item:nth-of-type(4) {
    -webkit-transform: rotate(288deg);
    transform: rotate(288deg);
}
.icon-geolocation_sparks-item:nth-of-type(5) {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
// .icon-geolocation_marker {
//     -webkit-transform-origin: 2em 2em;
//     transform-origin: 2em 2em;
// }
.icon-geolocation_sparks {
  transform-origin: 2.21em 2.21em;
}
.icon-geolocation:hover .icon-geolocation_marker {
    -webkit-animation: jump 0.45s linear forwards;
    animation: jump 0.45s linear forwards;
}
.icon-geolocation:hover .icon-geolocation_sparks-item {
    -webkit-animation: sparks 0.45s linear forwards;
    animation: sparks 0.45s linear forwards;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
}
@keyframes jump {
    10% {
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    30% {
        -webkit-transform: translateY(-0.7em);
        transform: translateY(-0.7em);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }
    50% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    80% {
        -webkit-transform: translateY(-0.3em);
        transform: translateY(-0.3em);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }
}

@keyframes sparks {
    100% {
        stroke-dashoffset: 2.1em;
    }
}
.icon-aperture_tooths circle {
    stroke-dasharray: 1.44em, 8.4em;
    stroke-dashoffset: 3.6em;
}
.icon-aperture_tooths circle:nth-child(1) {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
}
.icon-aperture_tooths circle:nth-child(2) {
    -webkit-transform: rotate(120deg);
    transform: rotate(120deg);
}
.icon-aperture_tooths circle:nth-child(3) {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
.icon-aperture_tooths circle:nth-child(4) {
    -webkit-transform: rotate(240deg);
    transform: rotate(240deg);
}
.icon-aperture_tooths circle:nth-child(5) {
    -webkit-transform: rotate(300deg);
    transform: rotate(300deg);
}
.icon-aperture_tooths circle:nth-child(6) {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
.icon-aperture:hover .icon-aperture_tooths circle {
    -webkit-animation: aperture 0.9s cubic-bezier(0.46, -0.44, 0.43, 1.43) forwards;
    animation: aperture 0.9s cubic-bezier(0.46, -0.44, 0.43, 1.43) forwards;
}

@keyframes aperture {
  50% {
    stroke-dashoffset: 2.6em;
  }
}

.icon-alarm_bells {
    -webkit-transform: rotateZ(0);
    transform: rotateZ(0);
    -webkit-animation: none;
    animation: none;
}
.icon-alarm_arms_long,
.icon-alarm_arms_short {
    -webkit-transition: all 0.3s cubic-bezier(0.46, -0.44, 0.43, 1.43);
    transition: all 0.3s cubic-bezier(0.46, -0.44, 0.43, 1.43);
}
.icon-alarm_arms_long {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
}
.icon-alarm_arms_short {
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
}
.icon-alarm:hover .icon-alarm_arms_long {
    -webkit-transform: rotateZ(230deg);
    transform: rotateZ(230deg);
}
.icon-alarm:hover .icon-alarm_arms_short {
    -webkit-transform: rotateZ(-35deg);
    transform: rotateZ(-35deg);
}
.icon-alarm:hover .icon-alarm_bells {
    -webkit-transform: rotateZ(0);
    transform: rotateZ(0);
    -webkit-animation: ringBell 0.6s linear forwards;
    animation: ringBell 0.6s linear forwards;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
}
@keyframes ringBell {
    12.5% {
        -webkit-transform: rotateZ(-10deg);
        transform: rotateZ(-10deg);
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    25% {
        -webkit-transform: rotateZ(10deg);
        transform: rotateZ(10deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }
    37.5% {
        -webkit-transform: rotateZ(-10deg);
        transform: rotateZ(-10deg);
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    50% {
        -webkit-transform: rotateZ(10deg);
        transform: rotateZ(10deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }
    62.5% {
        -webkit-transform: rotateZ(-10deg);
        transform: rotateZ(-10deg);
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    75% {
        -webkit-transform: rotateZ(10deg);
        transform: rotateZ(10deg);
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }
    87.5% {
        -webkit-transform: rotateZ(0);
        transform: rotateZ(0);
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
}



.wrap {
  width: 350px;
  display: flex;
  border: 1px solid #dcdcdc;
  label {
    flex: 1; // 1 1 auto
    background-color: #f5f5f5;
    text-align: center;
  }
  label:nth-child(3) {
    flex: 0 0 60px;
  }
}

.form {
  input {
    border: 1px solid #dcdcdc;
  }
  >div {
    display: flex;
    margin-bottom: 10px;
    // height: 30px;
    // align-items: flex-start;
    label {
      flex: 0 0 100px;
      text-align: right;
    }
  }
}

.arrow-up {
  position: absolute;
  top: 10px;
  width: 100%;
  z-index: 2;
  font-size: 26px;
  text-align: center;
  cursor: pointer;
}
.arrow-down {
  position: absolute;
  bottom: 10px;
  width: 100%;
  z-index: 2;
  font-size: 26px;
  text-align: center;
  cursor: pointer;
}
.vertial-nav {
  position: absolute;
  display: inline-block;
  height: 100%;
  padding: 40px 0;
  overflow: hidden;
  .gradient-division {
    height: 40px;
    pointer-events: none;
    z-index: 1;
  }
  .gradient-division-top {
    position: sticky;
    background: linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, .5));
  }
  .gradient-division-bottom {
    position: relative;
    margin-top: -40px;
    background: linear-gradient(rgba(255, 255, 255, .5), rgb(255, 255, 255));
  }
  ul {
    margin-top: -40px;
    height: 100%;
    padding: 40px 20px;
    // overflow-y: auto;
    // overflow-x: hidden;
    overflow: hidden;
  }
  li {
    width: 28px;
    border-radius: 7px;
    background-color: #fff;
    min-height: 40px;
    font-size: 14px;
    text-align: center;
    padding: 6px 4px;
    margin-bottom: 10px;
    word-break: break-all;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0, 0, 0, .2);
  }
}
</style>
