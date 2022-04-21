<template>
  <label :id="id" class="mt-2 input-checkbox" :class="{'input-checkbox--checked': model}">
    <span class="input-checkbox__fauxbox flex-shrink-0 mr-3"></span>
    <input type="checkbox" :name="name" class="input-checkbox__realbox" v-model="model" @change="handleChange">
    <span>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
import Emitter from '../mixins/emitter'
export default {
  name: 'Checkbox',
  mixins: [Emitter],
  // inject: {
  //   form: {
  //     default: ''
  //   },
  //   formItem: {
  //     default: ''
  //   }
  // },

  componentName: 'Checkbox',
  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系 */
    controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系 */
    border: Boolean,
    size: String
  },
  data () {
    return {
      selfModel: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value !== undefined ? this.value : this.selfModel
      },
      set (val) {
        this.$emit('input', val)
        this.selfModel = val
      }
    }
  },
  methods: {
    handleChange (ev) {
      let value
      if (ev.target.checked) {
        value = false
      } else {
        value = true
      }
      this.$emit('change', value, ev)
    }
  }
}
</script>
