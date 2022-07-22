<template>
  <div class="message-board-container">
    <DataForm v-on="$listeners"></DataForm>
    <h3>{{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list"></DataList>
  </div>
</template>

<script>
import DataForm from '@/components/MessageBoard/DataForm'
import DataList from '@/components/MessageBoard/DataList'

export default {
  name: "index",
  components: {
    DataForm,
    DataList
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>

</style>