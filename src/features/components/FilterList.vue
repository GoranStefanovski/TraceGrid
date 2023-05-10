<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class FilterList extends Vue {
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
    isOpen: Boolean = false;
  constructor() {
    super(); 
  }
 
  mounted() {
  }

    selectOption(option) {
      this.selectedFilter = option;
      this.isOpen = false;
    }

    closeDropdown() {
        setTimeout(() => {
            this.isOpen = false;
        }, 100);
    }

    openDropdown() {
        if(this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    }

}
</script>

<template>
    <div>
        <div @click="openDropdown" class="dropdown-menu__input">{{ selectedFilter }}</div>
        <div v-show="isOpen" class="dropdown-menu">
            <div
            v-for="option in filterOptions"
            :key="option.id"
            @click="selectOption(option.name)"
            class="dropdown-menu__option"
            >
            {{ option.name }}
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .dropdown-menu {
        position: relative;
        left: 0;
        background: white;
        width: 100%;
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
        background-color: #f8f8f8;
        background-clip: border-box;
        border: 0 solid #e9ecef;
        border-radius: 0.2rem;
        &__option {
            &:hover {
                cursor: pointer;
                background: #a4a3a3;
            }
            padding: 10px 0;
            
        }
        &__input {
            width: 88%;
            padding: 15px 0;
            background: #a4a3a3;
        }
    }
</style>
