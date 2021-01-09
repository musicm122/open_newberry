<template>
  <div>
    <div>
      <b-container fluid>
        <b-row>
          <b-col cols="2"> <h2>Categories</h2> </b-col>
          <b-col cols="8">
            <b-form-group label="Filter" label-for="filterInput">
              <b-input-group>
                <input
                  id="filterInput"
                  v-model="searchQuery"
                  type="search"
                  class="form-control"
                  placeholder="Type to Search"
                />

                <b-input-group-append>
                  <b-button :disabled="!searchQuery" @click="searchQuery = ''">
                    Clear
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>

            <template v-if="activePosts">
              <b-row v-for="post in posts" :key="post.id">
                <b-col cols="12">
                  <PostCard v-bind="post" />
                </b-col>
              </b-row>
            </template>
          </b-col>
          <b-col cols="2">
            <SideNav />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
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
    posts() {
      const caseInsensitive = 'i'
      return this.searchQuery.trim().length > 0
        ? this.activePosts.filter(
            (p) =>
              p.title.match(new RegExp(this.searchQuery, caseInsensitive)) ||
              p.description.match(
                new RegExp(this.searchQuery, caseInsensitive)
              ) ||
              p.body.match(new RegExp(this.searchQuery, caseInsensitive)) ||
              p.link.match(new RegExp(this.searchQuery, caseInsensitive))
          )
        : this.activePosts
    },
  },
}
</script>
