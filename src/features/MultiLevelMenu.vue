<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
@Component({
    components: {
    }
})
export default class MultiLevelMenu extends Vue {
    @Prop() submenu;
    
    firstLevelMenu: Boolean = false;
    secondLevelMenu: Boolean = false;

    constructor() {
        super();
    }

    showFirstLevel() {
        this.firstLevelMenu = true;
    }

    hideFirstLevel() {
        this.firstLevelMenu = false;
    }

    showSecondLevel() {
        this.secondLevelMenu = true;
    }

    hideSecondLevel() {
        this.secondLevelMenu = false;
    }
}
</script>
<template>
    <!-- <li class="menu-header">
        <router-link to="">Submenu »</router-link>
        <ul class="submenu-second">
        <li><router-link to="">Sub-submenu 1</router-link></li>
        <li><router-link to="">Sub-submenu 1</router-link></li>
        <li><router-link to="" class="submenu-3">Sub-submenu 1 »</router-link>
            <ul class="submenu-2 submenu-4">
            <li><router-link to="">Sub-submenu 1</router-link></li>
            <li><router-link to="">Sub-submenu 1</router-link></li>
            <li><router-link to="">Sub-submenu 1</router-link></li>
            <li><router-link to="">Sub-submenu 1</router-link></li>
            </ul>
        </li>
        <li><router-link to="">Sub-submenu 1</router-link></li>
        </ul>
    </li> -->
    <span class="main_dropdown">
        <li  @mouseenter="showFirstLevel()" @mouseleave="hideFirstLevel()">
            <router-link to="#">
                Dropdown
            </router-link>
                <ul :class="['submenu', {
                    'submenu-block':firstLevelMenu
                }]" v-for="(mainOption, index) in submenu" :key="index">
                    <li @mouseenter="showSecondLevel()" @mouseleave="hideSecondLevel()"><router-link :to="mainOption.title">{{ mainOption.title }}</router-link></li>
                    <span v-if="mainOption.levelTwo" class="submenu-second">
                        <ul v-for="secondOption in mainOption.levelTwo" :key="secondOption" :class="['submenu-third', {
                            'submenu-block':secondLevelMenu
                        }]">
                            <li><router-link to="">{{secondOption.option}}</router-link></li>
                        </ul>
                    </span>
                </ul>
        </li>
    </span>
</template>


<style scoped lang="scss">
    $main: '.main_dropdown';

    #{$main} {
        .submenu {
            display: none;

            &-block{
                display: block !important
            }
        }
        .submenu-second {
            display: none;
        }

        .submenu-third {
            display: none;
        }
    }
</style>
