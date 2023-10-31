
<script>
export default {
  props: {
    variant: {
      type: String,
      validator: value => {
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

<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@mixin button {
  border: none;
  background: none;
  border-radius: 10px;
  padding: 6px 20px;
  font-size: 20px;
  font-weight: 300;
  transition: all 0.2s ease-in-out;
}

@mixin mobile {
  @media (max-width: 512px) {
    @content;
  }
}

.outlined-button {
  @include button;
  border: 1px solid #5D2A42;
  &:hover {
    background-color: #5D2A42;
    color: white;
  }
  @include mobile {
    font-size: 15px;
  }
}

.filled-button {
  @include button;
  background-color: grey;
  border: 1px solid grey;
  color: white;
}
</style>