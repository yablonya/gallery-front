<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      validator(value) {
        return ['outlined', 'filled'].includes(value);
      },
      required: true
    }
  },
  computed: {
    buttonClass() {
      return {
        'outlined-button': this.variant === 'outlined',
        'filled-button': this.variant === 'filled'
      };
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/breakpoints";
@mixin button {
  border: none;
  background: none;
  border-radius: 10px;
  padding: 8px 20px;
  font-size: 20px;
  font-weight: 300;
  transition: all 0.2s ease-in-out;
  @include mobileMedium {
    font-size: 15px;
  }
}

.outlined-button {
  @include button;
  border: 1px solid #5D2A42;
  &:hover {
    background-color: #5D2A42;
    color: white;
  }
}

.filled-button {
  @include button;
  background-color: #5D2A42;
  border: 1px solid #5D2A42;
  color: white;
}
</style>