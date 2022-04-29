<template>
  <van-overlay :show="show" @click="show = false" :z-index="99">
    <div class="overlay-wrapper" id="overlay-wrapper" @click.stop>
      <div class="overlay-content" id="overlay-content">
        <div class="overlay-img" id="overlay-img"></div>
        <div class="poster-template" id="poster-template">
          <div class="text-center">
            <img src="@/assets/images/1.png" alt="" style="width: 40px;height: 40px;">
            <h2>Overlay 遮罩层</h2>
            <p>创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。</p>
            <canvas id="code"></canvas>
          </div>
        </div>
      </div>
      <a :href="imgUri" class="overlay-btn-download hidden md-block text-white" download="标题">点击下载</a>
    </div>
  </van-overlay>
</template>

<script>
import html2canvas from 'html2canvas'
import Canvas2Image from '@/assets/js/canvas2image.js'
import QRCode from "qrcode"
export default {
  data () {
    return {
      imgUri: '',
    }
  },
  methods: {
    handlePhoto () {
     this.getQrCode ()
    },
    getQrCode () {
      var url = window.location.href;
      QRCode.toCanvas(document.getElementById('code'), url, 
      {
        width: 86,
        height: 86,
        colorDark: "#000000",
        colorLight: "#ffffff",
        typeNumber: 4,
        correctLevel: 'Q', // H
        logging: true, // 日志开关
      },
       error => {
        if (error) console.error(error)
        this.show = true
        this.createPoster()
      })
    },
    //获取像素密度
    getPixelRatio (context) {
      var backingStore = context.backingStorePixelRatio ||
          context.webkitBackingStorePixelRatio ||
          context.mozBackingStorePixelRatio ||
          context.msBackingStorePixelRatio ||
          context.oBackingStorePixelRatio ||
          context.backingStorePixelRatio || 1;
      return (window.devicePixelRatio || 1) / backingStore;
    },
    createPoster () {
      let that = this
      this.$nextTick(() => {
        let ele = document.getElementById('overlay-content')
        let shareContent = document.getElementById('overlay-wrapper')
        let eleContent = document.getElementById('overlay-img')
        // eleContent.innerHTML = ''
        if (eleContent.childNodes.length) return false
        // let ele = document.getElementById('app')
        var width = shareContent.offsetWidth  // 获取(原生）dom 宽度
        var height = shareContent.offsetHeight // 获取(原生）dom 高
        // var offsetTop = shareContent.offsetTop;  // 元素距离顶部的偏移量
       
        var canvas = document.createElement('canvas')  //创建canvas 对象
        var context = canvas.getContext('2d')
        var scaleBy = this.getPixelRatio(context)  //获取像素密度的方法 (也可以采用自定义缩放比例)
        canvas.width = width * scaleBy   //这里 由于绘制的dom 为固定宽度，居中，所以没有偏移
        // canvas.height = (height + offsetTop) * scaleBy;  // 注意高度问题，由于顶部有个距离所以要加上顶部的距离，解决图像高度偏移问题
        canvas.height = height * scaleBy  // 注意高度问题，由于顶部有个距离所以要加上顶部的距离，解决图像高度偏移问题
        context.scale(scaleBy, scaleBy)
        context.translate(0, 0);

        html2canvas(ele, {
          useCORS: true,//允许加载跨域的图片
          scale: scaleBy, // 添加的scale 参数
          // canvas: canvas, //自定义 canvas
          backgroundColor: null, // 此句可使转出的图没有白边
          // backgroundColor: '#fff',
          width: width,
          height: height
        }).then(function(canvas) {
          var context = canvas.getContext('2d');
          // 【重要】关闭抗锯齿
          context.mozImageSmoothingEnabled = false
          context.webkitImageSmoothingEnabled = false
          context.msImageSmoothingEnabled = false
          context.imageSmoothingEnabled = false
          // function convertCanvasToImage(canvas) {
            // var image = new Image();
            // image.src = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
            let image = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height)
                // image.style.width = canvas.width + "px";
                // image.style.height = canvas.height + "px";
            that.imgUri = image.src
            eleContent.appendChild(image)

            let posterTemplate = document.getElementsByClassName('poster-template')[0]
            posterTemplate.classList.add('hidden')
        })
      })
    },
  }
}
</script>

<style lang="less" scoped>

.overlay-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 700px;
  border-radius: 5px;

  h2 {
    background: linear-gradient(360deg, rgba(0,0,0,0.3),rgba(0,0,0,0));
  }

  .overlay-img {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.overlay-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.poster-template {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #e1a5a5;
  padding: 20px;
}

@media (max-width: 768px) {
  .overlay-wrapper {
    width: 340px;
    height: 560px;
  }
}

.overlay-btn-download {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
}

</style>
