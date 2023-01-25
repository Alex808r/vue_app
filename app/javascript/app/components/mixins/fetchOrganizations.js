export const fetchOrganizations = {
  data() {
    this.searchString = ''
  },
  created() {
    this.fetchOrganizations();
  },
  methods: {
    fetchOrganizations() {
      this.$api.staffs.organizations.index(this.searchString)

        .then(({data}) => {
          this.organizations = data.organizations
          this.loading = false
        })
    }
  }
}