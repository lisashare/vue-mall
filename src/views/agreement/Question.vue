<template>
   <div class="question">
    <div class="occupy-banner">
      <img src="@/assets/images/t2_16x9.png" alt="">
    </div>
    <div class="container py-48">
      <div id="faq-container" class="my-10">
        <h2 class="text-xl text-center mb-32">Frequently asked questions</h2>
        <div class="row justify-center" v-for="(item,index) in faq" :key="index">
          <div class="col-12 col-md-8">
            <p class="opacity--hinted font-medium mb-12">{{ item.title }}</p>
          </div>
          <div class="col-12 col-md-8">
            <div class="px-20 pt-12 mb-12 collapsible" v-for="subItem in item.content" :key="subItem.id"  @click="handleCollapse(subItem.id)">
              <div class="flex flex-row items-center justify-between mb-12">
                <p class="font-medium">{{ subItem.subTitle }}</p>
                <svg v-show="!subItem.collapse" width="2em" height="2em" viewBox="0 0 24 24" fill="none" class="icon--3" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.47 8.845a.75.75 0 011.06 0l5.47 5.47 5.47-5.47a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-1.06 0l-6-6a.75.75 0 010-1.06z" fill="currentColor"></path></svg>

                <svg v-show="subItem.collapse == true" width="2em" height="2em" viewBox="0 0 24 24" fill="none" class="icon--3" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 8.095a.75.75 0 011.06 0l6 6a.75.75 0 11-1.06 1.06L12 9.685l-5.47 5.47a.75.75 0 01-1.06-1.06l6-6z" fill="currentColor"></path></svg>
              </div>
              <div class="mb-12" v-show="subItem.collapse == true">
                <div class="" v-if="subItem.escape">
                  <div v-html="subItem.describe"></div>
                </div>
                <div v-else>
                  <p class="opacity--hinted">{{ subItem.describe }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      faq: [
        {
          title: 'General',
          collapse: false,
          content: [
            {
              id: 1,
              subTitle: 'Where can I watch?',
              describe: 'Check out our catalog and watch a few class trailers!Check out our catalog and watch a few class trailers!'
            }
          ]
        },
        {
          title: 'Pricing & Payment',
          collapse: false,
          content: [
            {
              id: 2,
              escape: true,
              subTitle: 'How do I cancel?',
              describe: '<p class="opacity--hinted">If you don’t want to continue, you can cancel your membership renewal through your account page. Follow the prompts to cancel on the Settings page, and your membership will not renew. Please note that there aren’t refunds for partially unused membership periods.</p> <br/><p class="opacity--hinted">If you have more questions, please <a href="mailto:lisashare">contact us</a>. We’re happy to help!</p>'
            }
          ]
        },
        {
          title: 'Sessions',
          collapse: false,
          content: [
            {
              id: 3,
              subTitle: 'Frequently asked questions',
              describe: 'Frequently asked questionsFrequently asked questionsFrequently asked questionsFrequently asked questionsFrequently asked questionsFrequently asked questions'
            },
            {
              id: 4,
              subTitle: 'What skill-level is required for the 30 day Sessions?',
              describe: 'Sessions are designed for people at all skill levels. Your instructor will walk you through a structured curriculum with step-by-step instructions, but will also challenge you to go beyond the Session content by exploring your own creativity. You will be able to gain support and up-level your skills by participating in a community of your peers and by receiving meaningful feedback on your work from trained Teaching Assistants.'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleCollapse (id) {
      for (let i = 0, len = this.faq.length; i < len; i++) {
        for (let k = 0, length = this.faq[i].content.length; k < length; k++) {
          if (this.faq[i].content[k].id === id) {
            this.$set(this.faq[i].content[k], 'collapse', !this.faq[i].content[k].collapse)
          } else {
            this.$set(this.faq[i].content[k], 'collapse', false)
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.collapsible {
  border-radius: 4px;
  background-color: var(--theme-form-bg);
  transition: all .25s ease-in-out;
  overflow: hidden;
  cursor: pointer;
}
</style>
