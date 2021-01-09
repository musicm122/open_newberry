const state = () => ({
  posts: [
    {
      id: 1,
      title: 'Dignissim',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc consequat interdum varius sit amet mattis vulputate enim. Amet risus nullam eget felis eget nunc. Tincidunt ornare massa eget egestas. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vestibulum sed arcu non odio euismod lacinia at quis risus. Ac turpis egestas integer eget aliquet nibh. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus.`,
      image: 'https://placeimg.com/640/480/animals/sepia',
      action: 'Action',
      link: 'https://www.google.com/',
      enabled: true,
      contactEmail: 'musicm122@gmail.com',
      contactPhone: '(803) 364-3328',
    },
    {
      id: 2,
      title: 'Mi',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et tortor at risus. Viverra orci sagittis eu volutpat odio facilisis mauris. Sagittis orci a scelerisque purus semper eget. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Eget nunc scelerisque viverra mauris in. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Scelerisque in dictum non consectetur a erat nam. In ornare quam viverra orci sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Semper quis lectus nulla at volutpat diam ut venenatis. Interdum varius sit amet mattis vulputate enim. Non sodales neque sodales ut etiam sit amet nisl. Volutpat sed cras ornare arcu dui vivamus. Ornare lectus sit amet est placerat in egestas erat imperdiet. Morbi blandit cursus risus at ultrices.Nunc non blandit massa enim. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Ullamcorper dignissim cras tincidunt lobortis feugiat. Sodales neque sodales ut etiam. Euismod nisi porta lorem mollis aliquam ut porttitor. Tincidunt dui ut ornare lectus. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Proin sed libero enim sed faucibus turpis in. Ultrices sagittis orci a scelerisque purus semper. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Amet massa vitae tortor condimentum lacinia quis vel eros. Massa massa ultricies mi quis hendrerit. Aliquet nibh praesent tristique magna sit amet purus gravida quis.Tempor commodo ullamcorper a lacus vestibulum sed arcu. Eget velit aliquet sagittis id. Egestas integer eget aliquet nibh praesent tristique magna sit. Mi quis hendrerit dolor magna. Massa tincidunt dui ut ornare. Euismod nisi porta lorem mollis aliquam ut porttitor. Odio tempor orci dapibus ultrices. Vitae tortor condimentum lacinia quis vel eros donec. Risus feugiat in ante metus dictum. Tempor orci dapibus ultrices in iaculis nunc sed. Nunc pulvinar sapien et ligula ullamcorper. Erat nam at lectus urna duis. Nullam eget felis eget nunc lobortis mattis. Sed risus ultricies tristique nulla. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Mauris augue neque gravida in fermentum et sollicitudin ac.Ultricies integer quis auctor elit sed vulputate. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Blandit aliquam etiam erat velit scelerisque. Consequat nisl vel pretium lectus quam id leo in. In dictum non consectetur a erat nam at. Sed euismod nisi porta lorem. Eu nisl nunc mi ipsum. A diam maecenas sed enim ut sem viverra aliquet eget. Et odio pellentesque diam volutpat commodo sed egestas egestas. At augue eget arcu dictum varius. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Aenean et tortor at risus viverra.Feugiat nisl pretium fusce id. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Senectus et netus et malesuada fames ac turpis. Arcu vitae elementum curabitur vitae nunc. Neque convallis a cras semper auctor neque vitae. Diam quis enim lobortis scelerisque. Ullamcorper malesuada proin libero nunc. Egestas dui id ornare arcu odio. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Pretium quam vulputate dignissim suspendisse in est ante in. Sed tempus urna et pharetra pharetra massa massa. Viverra orci sagittis eu volutpat odio facilisis. Accumsan sit amet nulla facilisi morbi tempus. Dui accumsan sit amet nulla facilisi morbi tempus iaculis.`,
      image: 'https://placeimg.com/640/480/nature',
      link: 'https://bootstrap-vue.org/',
      enabled: true,
      contactEmail: 'terrance@hackerferret.com',
      contactPhone: '8033643328',
    },
    {
      id: 3,
      title: 'Platea Dictumst Quisque',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et tortor at risus. Viverra orci sagittis eu volutpat odio facilisis mauris. Sagittis orci a scelerisque purus semper eget. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Eget nunc scelerisque viverra mauris in. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Scelerisque in dictum non consectetur a erat nam. In ornare quam viverra orci sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Semper quis lectus nulla at volutpat diam ut venenatis. Interdum varius sit amet mattis vulputate enim. Non sodales neque sodales ut etiam sit amet nisl. Volutpat sed cras ornare arcu dui vivamus. Ornare lectus sit amet est placerat in egestas erat imperdiet. Morbi blandit cursus risus at ultrices.Nunc non blandit massa enim. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Ullamcorper dignissim cras tincidunt lobortis feugiat. Sodales neque sodales ut etiam. Euismod nisi porta lorem mollis aliquam ut porttitor. Tincidunt dui ut ornare lectus. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Proin sed libero enim sed faucibus turpis in. Ultrices sagittis orci a scelerisque purus semper. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Amet massa vitae tortor condimentum lacinia quis vel eros. Massa massa ultricies mi quis hendrerit. Aliquet nibh praesent tristique magna sit amet purus gravida quis.Tempor commodo ullamcorper a lacus vestibulum sed arcu. Eget velit aliquet sagittis id. Egestas integer eget aliquet nibh praesent tristique magna sit. Mi quis hendrerit dolor magna. Massa tincidunt dui ut ornare. Euismod nisi porta lorem mollis aliquam ut porttitor. Odio tempor orci dapibus ultrices. Vitae tortor condimentum lacinia quis vel eros donec. Risus feugiat in ante metus dictum. Tempor orci dapibus ultrices in iaculis nunc sed. Nunc pulvinar sapien et ligula ullamcorper. Erat nam at lectus urna duis. Nullam eget felis eget nunc lobortis mattis. Sed risus ultricies tristique nulla. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Mauris augue neque gravida in fermentum et sollicitudin ac.Ultricies integer quis auctor elit sed vulputate. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Blandit aliquam etiam erat velit scelerisque. Consequat nisl vel pretium lectus quam id leo in. In dictum non consectetur a erat nam at. Sed euismod nisi porta lorem. Eu nisl nunc mi ipsum. A diam maecenas sed enim ut sem viverra aliquet eget. Et odio pellentesque diam volutpat commodo sed egestas egestas. At augue eget arcu dictum varius. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Aenean et tortor at risus viverra.Feugiat nisl pretium fusce id. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Senectus et netus et malesuada fames ac turpis. Arcu vitae elementum curabitur vitae nunc. Neque convallis a cras semper auctor neque vitae. Diam quis enim lobortis scelerisque. Ullamcorper malesuada proin libero nunc. Egestas dui id ornare arcu odio. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Pretium quam vulputate dignissim suspendisse in est ante in. Sed tempus urna et pharetra pharetra massa massa. Viverra orci sagittis eu volutpat odio facilisis. Accumsan sit amet nulla facilisi morbi tempus. Dui accumsan sit amet nulla facilisi morbi tempus iaculis.`,
      image: 'https://placeimg.com/640/480/people',
      link: 'https://vuejs.org/',
      enabled: true,
      contactPhone: '803 414 1402',
    },
    {
      id: 4,
      title: 'Long Post',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec. Egestas erat imperdiet sed euismod nisi porta lorem. Pharetra vel turpis nunc eget. Lacus vestibulum sed arcu non odio euismod. Orci phasellus egestas tellus rutrum tellus. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Ut tristique et egestas quis ipsum suspendisse ultrices. Egestas diam in arcu cursus euismod quis viverra nibh. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Viverra accumsan in nisl nisi.

Urna cursus eget nunc scelerisque. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Cursus turpis massa tincidunt dui ut ornare. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Facilisis volutpat est velit egestas dui id ornare arcu odio. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Diam sit amet nisl suscipit. Cras tincidunt lobortis feugiat vivamus at augue eget. Placerat in egestas erat imperdiet. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. At quis risus sed vulputate odio ut enim. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Proin fermentum leo vel orci porta non pulvinar.

Sed egestas egestas fringilla phasellus. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Enim blandit volutpat maecenas volutpat. Nunc non blandit massa enim nec. Tortor pretium viverra suspendisse potenti. Viverra aliquet eget sit amet. Fermentum leo vel orci porta non pulvinar neque. Id venenatis a condimentum vitae sapien pellentesque habitant. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Et tortor at risus viverra adipiscing at. Quam viverra orci sagittis eu volutpat odio. Amet dictum sit amet justo donec. Amet cursus sit amet dictum sit amet justo donec. Egestas dui id ornare arcu odio ut sem nulla. Euismod nisi porta lorem mollis. Urna duis convallis convallis tellus id. A condimentum vitae sapien pellentesque.

Tellus molestie nunc non blandit massa. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Senectus et netus et malesuada fames. In nisl nisi scelerisque eu ultrices vitae. Fames ac turpis egestas integer eget. Aliquet nec ullamcorper sit amet risus. Ornare massa eget egestas purus. Risus viverra adipiscing at in tellus integer. Netus et malesuada fames ac turpis egestas integer. Turpis egestas pretium aenean pharetra magna ac. Enim facilisis gravida neque convallis a cras. Nullam eget felis eget nunc.

Iaculis eu non diam phasellus vestibulum lorem sed risus. Turpis in eu mi bibendum neque. Morbi tristique senectus et netus. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Fringilla ut morbi tincidunt augue interdum. Tristique senectus et netus et. Diam vel quam elementum pulvinar etiam non quam lacus. Ultrices mi tempus imperdiet nulla malesuada. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Vivamus at augue eget arcu dictum varius.

Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Sed nisi lacus sed viverra tellus in hac habitasse platea. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Viverra nam libero justo laoreet sit amet. Risus feugiat in ante metus dictum. Pulvinar etiam non quam lacus. Nisi scelerisque eu ultrices vitae auctor eu augue. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Consequat semper viverra nam libero justo laoreet sit. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Tortor at risus viverra adipiscing at in tellus. In arcu cursus euismod quis viverra nibh cras pulvinar. Metus vulputate eu scelerisque felis imperdiet proin. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Non curabitur gravida arcu ac tortor dignissim. Aenean vel elit scelerisque mauris pellentesque. Enim eu turpis egestas pretium aenean pharetra. Enim neque volutpat ac tincidunt vitae.

Massa sed elementum tempus egestas. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Eget dolor morbi non arcu risus quis. Arcu felis bibendum ut tristique et egestas quis ipsum. Nibh cras pulvinar mattis nunc sed blandit libero. Sed lectus vestibulum mattis ullamcorper velit sed. Sit amet porttitor eget dolor morbi non. Sodales neque sodales ut etiam sit amet nisl purus in. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Vitae suscipit tellus mauris a diam maecenas.

Nam libero justo laoreet sit amet cursus sit amet. Nunc id cursus metus aliquam. Purus sit amet volutpat consequat. Diam ut venenatis tellus in metus vulputate eu scelerisque. Sed risus ultricies tristique nulla aliquet enim tortor at. Nunc aliquet bibendum enim facilisis gravida neque. Amet consectetur adipiscing elit ut aliquam. Sed faucibus turpis in eu. Aliquet nec ullamcorper sit amet. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Faucibus turpis in eu mi bibendum. Bibendum at varius vel pharetra vel. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Viverra nibh cras pulvinar mattis nunc. Et netus et malesuada fames ac turpis. Et odio pellentesque diam volutpat commodo sed egestas egestas. Molestie nunc non blandit massa enim nec dui nunc. Euismod lacinia at quis risus.

Aenean pharetra magna ac placerat vestibulum lectus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Quis blandit turpis cursus in hac habitasse platea dictumst. Ornare quam viverra orci sagittis eu. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Non diam phasellus vestibulum lorem sed. Eget felis eget nunc lobortis mattis aliquam faucibus. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Turpis tincidunt id aliquet risus feugiat. Lacinia quis vel eros donec ac. Amet purus gravida quis blandit turpis cursus in hac habitasse. Fermentum iaculis eu non diam phasellus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu.

Vitae purus faucibus ornare suspendisse. Sagittis purus sit amet volutpat consequat mauris nunc congue. Malesuada nunc vel risus commodo. Nunc consequat interdum varius sit amet mattis vulputate enim. Suspendisse potenti nullam ac tortor vitae purus faucibus. Tellus mauris a diam maecenas sed enim ut. Sem et tortor consequat id porta nibh venenatis. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Nunc aliquet bibendum enim facilisis gravida neque convallis. Habitasse platea dictumst quisque sagittis purus sit amet. Viverra nam libero justo laoreet sit. Aliquam ultrices sagittis orci a. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Amet dictum sit amet justo donec enim diam.`,
      image: 'https://placeimg.com/640/480/people',
      link: 'https://stackoverflow.com/',
      enabled: true,
    },
    {
      id: 5,
      title: 'Disabled post',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc consequat interdum varius sit amet mattis vulputate enim. Amet risus nullam eget felis eget nunc. Tincidunt ornare massa eget egestas. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vestibulum sed arcu non odio euismod lacinia at quis risus. Ac turpis egestas integer eget aliquet nibh. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus.`,
      image: 'https://placeimg.com/640/480/arch',
      action: 'Action',
      link: 'https://www.google.com/',
      enabled: false,
      contactPhone: '(803) 364-3328',
    },
    {
      id: 6,
      title: 'Small Post',
      description: 'Small Description',
      body: `Small Body`,
      image: 'https://placeimg.com/640/480/any',
      action: 'S',
      link: 'https://www.google.com/',
      enabled: true,
      contactPhone: '(803) 364-3328',
    },
  ],
})

const mutations = {
  add(state, posts) {
    state.posts.push(posts)
  },
  remove(state, post) {
    state.posts.splice(state.posts.indexOf(post), 1)
  },
  edit(state, post) {
    const selectedIndex = state.posts.findIndex((p) => p.id === post.id)
    state.posts[selectedIndex] = post
  },
}

const getters = {
  allPosts: (state) => {
    return state.posts
  },

  filterPosts: (state, searchQuery) => {
    const caseInsensitive = 'i'
    return state.posts.filter(
      (p) =>
        p.title.match(new RegExp(searchQuery, caseInsensitive)) ||
        p.description.match(new RegExp(searchQuery, caseInsensitive)) ||
        p.body.match(new RegExp(searchQuery, caseInsensitive)) ||
        p.link.match(new RegExp(searchQuery, caseInsensitive))
    )
  },
  activePosts: (state) => state.posts.filter((p) => p.enabled === true),
  activePostsCount: (state) =>
    state.posts.filter((p) => p.enabled === true).length,
  totalPostsCount: (state) => state.posts.length,
}

// const actions = {
//   addNewPost({state, commit },post){
//     commit('setCheckoutStatus', null)

//   }
// }

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
