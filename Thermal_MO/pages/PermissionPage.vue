<template>
  <div class="fluid mt-3">
    <table>
      <thead class="thead-dark">
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.email">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // echarts引入
  components: {},
  name: 'IndexPage',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response.data)
        this.users = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
