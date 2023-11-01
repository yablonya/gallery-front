<template>
  <footer>
    <a href="tel:0975708873">
      <img src="/icons/phone-call.png" alt="phone">
    </a>
    <a href="mailto:dnlablonskyi@gmail.com">
      <img src="/icons/open-mail.png" alt="email">
    </a>
    <a href="https://t.me/DeathisN0tDefeat">
      <img src="/icons/telegram.png" alt="telegram">
    </a>
    <a href="viber://chat?number=0975708873">
      <img src="/icons/viber.png" alt="viber">
    </a>
    <router-link class="faq" to="/faq">
      F.A.Q
    </router-link>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "src/styles/breakpoints";

footer {
  padding: 30px 0;
  background-color: #5D2A42;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  @include mobileMedium {
    gap: 15px;
  }
  a {
    transition: all 0.1s ease-in-out;
    &:hover {
      translate: 0 -8px;
      scale: 1.2;
    }
  }
  img {
    width: 35px;
    height: auto;
    @include mobileMedium {
      width: 30px;
    }
  }
}

.faq {
  height: 35px;
  border: 1px solid white;
  border-radius: 10px;
  color: #5D2A42;
  background-color: white;
  padding: 5px 10px;
  font-weight: 500;
  @include mobileMedium {
    height: 30px;
    font-size: 14px;
  }
  &:hover {
    color: #5D2A42;
  }
}
</style>