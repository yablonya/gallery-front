<template>
  <div class="table-responsive">
    <div class="table-controls">
      <Button class="filled-btn mb-1" id="duplicate-btn" @click="duplicateSelectedRows" variant="filled">Duplicate</Button>
      <Button class="filled-btn mb-1" id="delete-btn" @click="deleteSelectedRows" variant="filled">Delete</Button>
    </div>
    <table id="dataTable" class="custom-table align-middle">
      <thead>
      <tr>
        <th scope="col"><input type="checkbox" id="masterCheckbox"></th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Middle name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Date of Birth</th>
        <th scope="col">Group</th>
        <th scope="col">Gender</th>
        <th scope="col">Phone</th>
        <th scope="col">File name</th>
      </tr>
      </thead>
      <tbody v-for="user in users" :key="user.email">
        <tr>
          <td><input type="checkbox" class="rowCheckbox" @click="changeCheckBox(user.id)"></td>
          <td>{{user.name.replace(/\s/g, '')}}</td>
          <td>{{user.surname.replace(/\s/g, '')}}</td>
          <td>{{user.midname.replace(/\s/g, '')}}</td>
          <td>{{user.email}}</td>
          <td>{{user.password}}</td>
          <td>{{user.date}}</td>
          <td>{{user.group}}</td>
          <td>{{user.gender}}</td>
          <td>{{user.cellphone}}</td>
          <td>{{user.file}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Button from "@/components/ui/Button.vue";

export default {
  components: {Button},
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    duplicateSelectedRows() {
      if (this.users.length > 0) {
        this.$emit('duplicateRows');
      }
    },
    deleteSelectedRows() {
      if (this.users.length > 0) {
        this.$emit('deleteRows');
      }
    },
    changeCheckBox(checkbox) {
      this.$emit('changeUserCheckBox', checkbox);
    }
  }
}
</script>

<style lang="scss" scoped>
.table-responsive {
  padding: 0 20px;
  max-width: 1500px;
  margin: 20px auto 40px;
  font-family: 'Mulish', sans-serif;
}

.table-controls button{
  padding: 8px 15px;
  margin-right: 20px;
}

.custom-table {
  width: 100%;
  padding: 0 20px;
  td, th {
    border: none;
    text-align: center;
    background-color: transparent;
    border-bottom: 1px solid black;
    padding: 8px;
  }
  td {
    border-bottom: 1px solid #dedede;
  }
}
</style>