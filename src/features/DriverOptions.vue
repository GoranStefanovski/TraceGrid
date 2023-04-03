<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {
    },
})
export default class DriverOptions extends Vue {
    @Prop() items;
    @Prop() packageID;
    @Prop({default:false}) offer;
    @Prop() index;
    @Prop() imageUploaded;

    constructor() {
        super();
    }

    mounted() {}

}
</script>

<template>
    <div :class="['user-dashboard__options-wrap', {
    }]">
        <ul :class="['user-dashboard__options-list', {
        }]">
            <li v-for="item, index in items" :key="index" class='user-dashboard__options-list-item'>
                <p>
                    {{ item.name }}
                </p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.user-dashboard__options {
  &-wrap {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    background: white;
    padding: 5px 22px;
    left: 96%;
    width: max-content;
    z-index: 999999999;
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid gray;
      top: 42%;
      left: 0;
      transform: translate(-10px, 0);
    }
  }
  &-list {
    list-style: none;
    background-color: #FFFFFF;
    border-radius: 4px;
    display: grid;
    align-content: space-evenly;
    padding-left: 0;
    & > li {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 14px;
      line-height: 10px;
      &:hover  {
        & > p {
          color: black;
        }
        color: black;
        cursor: pointer;
      }
      & > a {
        color: black;
      }
      & > span {
        color: black;
      }
    }
    &-item-disabled a {
      color: #929292 !important;
      pointer-events: none;
    }
  }
}
</style>