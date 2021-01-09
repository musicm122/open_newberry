<template>
  <div class="post">
    <b-card :link="link" img-top tag="article">
      <b-media>
        <template #aside>
          <b-img
            :src="imageSrc"
            blank-color="#ccc"
            width="64"
            :alt="title"
          ></b-img>
        </template>
        <h2>
          <a :href="'suggestions/' + id">{{ title }}</a>
        </h2>
        <h4>{{ description }}</h4>
      </b-media>

      <b-card-footer>
        <b-row>
          <b-col cols="5">
            <b-icon icon="telephone-fill"></b-icon>
            Email:
            <a :href="'mailto:' + contactEmail">{{ contactEmail }}</a>
          </b-col>

          <b-col cols="5">
            <b-icon icon="telephone-fill"></b-icon>
            Contact Phone:
            <a :href="'tel:' + contactPhone">{{ contactPhone }}</a>
          </b-col>

          <b-col cols="2">
            <b-button variant="primary">
              {{ action }}
            </b-button>
          </b-col>
        </b-row>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    body: { type: String, required: true },
    contactEmail: { type: String, default: 'admin@nbd.org' },
    contactPhone: { type: String, required: true },
    imageSrc: {
      type: String,
      default: 'https://picsum.photos/seed/picsum/200/',
    },
    action: {
      type: String,
      default: 'Action',
    },

    link: { type: String, default: 'http://www.google.com' },

    enabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
