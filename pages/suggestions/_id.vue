<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2"> <h2>Categories</h2> </b-col>
      <b-col cols="8">
        <Post v-bind="post" />
      </b-col>
      <b-col cols="2">
        <SideNav />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      searchQuery: '',
    }
  },
  computed: {
    ...mapState({
      availablePosts: (state) => state.posts,
    }),
    ...mapGetters('posts', {
      activePosts: 'activePosts',
      activePostsCount: 'activePostsCount',
    }),
    post() {
      const result = this.availablePosts.posts.find(
        (p) => this.$route.params.id.toString() === p.id.toString()
      )
      return result
    },
  },
}
</script>
