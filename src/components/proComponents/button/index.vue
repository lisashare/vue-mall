<template>
 <div>
    <button class="c-button c-button--full-width c-button--primary c-button--md mt-4"
    :type="nativeType"
    :disabled="buttonDisabled"
    @click="handleClick"><slot></slot></button>
 </div>
</template>

<script>
export default {
  name: 'Button',
  inject: {
    form: {
      default: ''
    },
    formItem: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    // size: String,
    // icon: {
    //   type: String,
    //   default: ''
    // },
    nativeType: {
      type: String,
      default: 'button'
    },
    // loading: Boolean,
    disabled: Boolean
    // plain: Boolean,
    // autofocus: Boolean,
    // round: Boolean,
    // circle: Boolean
  },
  computed: {
    buttonDisabled () {
      return this.disabled || (this.form || {}).disabled
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
