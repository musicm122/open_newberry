<template>
  <b-container>
    <h1>Newberry Proposed Budget 2020</h1>
    <b-row>
      <b-col>
        <b-form-group label="Filter" label-for="filterInput">
          <b-input-group>
            <input
              id="filterInput"
              v-model="filter"
              type="search"
              class="form-control"
              placeholder="Type to Search"
            />

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">
                Clear
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-table
      show-empty
      striped
      hover
      :current-page="currentPage"
      :per-page="perPage"
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      :keyword="filter"
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>
    </b-table>
    <b-row>
      <b-col>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import reportData from '~/static/Newberry_Revenue_Proposal_2020.json'

export default {
  data() {
    return {
      dataArray: reportData,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15, { value: 100, text: 'Show a lot' }],
      filter: '',
      sortBy: 'Id',
      sortDesc: false,
      sortDirection: 'asc',
      filterOn: [
        'Id',
        'FiscalYear',
        'RevenueCode',
        'Description',
        'Income',
        'Budget',
        'Projected',
        'Proposed',
      ],
      fields: [
        { key: 'Id', sortable: true, class: 'text-center' },
        { key: 'FiscalYear', label: 'Fiscal Year', sortable: true },
        { key: 'RevenueCode', label: 'Revenue Code', sortable: true },
        { key: 'Description', sortable: true },
        { key: 'Income', sortable: true },
        { key: 'Budget', sortable: true },
        { key: 'Projected', sortable: true },
        { key: 'Proposed', sortable: true },
        {
          key: 'ProjectedFiscalYear',
          label: 'Projected Fiscal Year',
          sortable: true,
        },
      ],
    }
  },
  computed: {
    items() {
      return this.filter
        ? this.dataArray?.filter(
            (item) =>
              item.Description.toLowerCase()
                .trim()
                .includes(this.filter.toLowerCase().trim()) ||
              item.RevenueCode.toString().includes(this.filter) ||
              item.Id.toString().includes(this.filter) ||
              item.FiscalYear.includes(this.filter) ||
              item.RevenueCode.toString().includes(this.filter) ||
              item.Income.toString().includes(this.filter) ||
              item.Budget.toString().includes(this.filter) ||
              item.Projected.toString().includes(this.filter) ||
              item.Proposed.toString().includes(this.filter) ||
              item.ProjectedFiscalYear.includes(this.filter)
          )
        : this.dataArray
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    onFiltered(filterItems) {
      this.totalRows = filterItems.length
      this.currentPage = 1
    },
  },
}
</script>
