<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class Events extends Vue {
    selectedFilter: String = 'Select Filter'
    filterOptions: Array<any> = [
        {
            id: 0,
            value: 'distance_type',
            name: 'Distance Type'
        },
        {
            id: 1,
            value: 'option',
            name: 'Option'
        },
        {
            id: 2,
            value: 'option 1',
            name: 'Option 1'
        },
    ]
  constructor() {
    super(); 
  }
 
  mounted() {
  }

    selectOption(option) {
      this.selectedFilter = option;
    }

}
</script>

<template>
    <div class="tracking-bar-wrapper_inner">
        <div class="events-title">Select Filters</div>
        <div class="dropdown-menu">
          <span v-for="option in filterOptions" :key="option.id">
        <input
            type="radio"
            :id="option.id"
            @click="selectOption(option.name)"
            class="dropdown-menu__option"
            :placeholder="option.name"
            :value="option.name"
            :name="option.name"
          />
          <label for="huey">{{option.name}}</label>
        </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tracking-bar {
  &-wrapper {
    &_inner {
      padding: 3px 10px;
      overflow-y: scroll;
      height: max-content;
      max-height: 83vh;
    }
  }
}

.events-title {

}
</style>
