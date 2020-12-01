<template>
  <b-container fluid>
    <h1>Reports</h1>
    <ul>
      <li>
        <NuxtLink to="/reports/proposed/2020-budget">
          2020 Proposed Budget
        </NuxtLink>
      </li>
    </ul>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      text: '',
    }
  },
}
</script>
