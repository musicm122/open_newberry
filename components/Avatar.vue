<template>
  <div class="mb-2">
    <b-avatar :src="imageSrc"></b-avatar>
    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
  </div>
</template>
<script>
export default {
  name: 'Avatar',
  props: {
    imageSrc: {
      type: String,
      default: '',
    },
    userName: {
      type: String,
      default: 'Anon',
    },
    profileLink: {
      type: String,
      default: 'https://www.google.com',
    },
    role: {
      type: String,
      default: 'User',
    },
    size: {
      type: String,
      default: 'SM',
    },
  },
}
</script>
