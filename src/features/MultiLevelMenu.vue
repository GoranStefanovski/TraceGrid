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

    created() {
        console.log(this.submenu)
    }

    showFirstLevel() {
        console.log('ovde')
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
        <li>
            <router-link to="#" @mouseenter="showFirstLevel()">
                Dropdown
            </router-link>
            <ul class="submenu-second" v-for="(mainOption, index) in submenu" :key="index">
                <li><router-link :to="mainOption.title">{{ mainOption.title }}</router-link></li>
                <span v-if="mainOption.levelTwo" class="submenu-2 submenu-4">
                    <ul v-for="secondOption in mainOption.levelTwo">
                        <li :key="secondOption"><router-link to="">{{secondOption.option}}</router-link></li>
                    </ul>
                </span>
            </ul>
        </li>
    </span>
</template>
