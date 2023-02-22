<script lang="ts">
  import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
  import ClickOutside from 'v-click-outside';
  import { throttle } from 'lodash-es';


  @Component({
    directives: {
      ClickOutside: ClickOutside.directive,
    }
  })
  export default class SkModal extends Vue {

    @Prop({type: String}) title;
    @Prop({type: String, default: 'type'}) name; //Used to identify different types of modals on the site
    @Prop({type: String, default: 'regular'}) size;
    @Prop({type: String, default: ' '}) headerText;
    @Prop({type: String}) subTitle;
    @Prop({type: Boolean, default: false}) blackCloseBtn;
    @Prop({type: Boolean, default: false}) stickyHead;
    @Prop({ type: Boolean, default: false }) headerTop;
    @Prop({ type: Boolean, default: false }) titleIcon;

    hasTitle: boolean = true;
    isBodyOverflowing: boolean = false;
    scrollBarWidth: number = 0;
    close: Object = close["default"];
    userScroll: boolean = false;

    constructor() {
      super();

      if (typeof(this.title) === 'undefined' ) {
        this.hasTitle = false;
      }
    }

    //TODO: Open the modals on route

    @Emit('close-modal')
    closeModal() : void {};

    mounted() {
      // detect scroll in modal container
      let container = this.$refs.modal as HTMLElement;
      if(container != undefined) {
        container.addEventListener("scroll", throttle(() => {
        this.userScroll = container.scrollTop > 2;
      }));
      }
    }

    created() {
      
    }

    destroyed() {
    }

    hasFooterSlot() {
      return !!this.$slots.footer;
    }

  }
</script>

<template>

  <div class="sk-modal" :class="['sk-modal__'+name+'-type','sk-modal--'+size+'-size']">

    <div ref="modal" :class="['sk-modal__inner', {
   
    },
   ]" id="sk-modal__inner"> <!--v-click-outside="closeModal"-->
    <div class="modal__head--container">
      <div>
      <div class="sk-modal__head"
           :class="{'sk-modal__head--no-title' : !hasTitle,
           'sk-modal__sticky-head':stickyHead, 
           'sk-modal__sticky-head-shadow':stickyHead && userScroll}">
        <span v-if="titleIcon" class="sk-modal__title-icon--warning mr-3"></span>

        <span>
          <h4 v-if="hasTitle">{{ title }}</h4>
        </span>
        <span :class="['sk-modal__close', 
        { 'sk-modal__close-black':blackCloseBtn }]"
        @click="closeModal">
          <SkIcon :icon="close"></SkIcon>
        </span>
      </div>
      <div v-if="headerText !== ' '" style="padding-left: 1.875rem; margin-top: -1.5rem;">
        <p class="login_info_text">{{headerText}}</p>
      </div>
      </div> <!-- sk-modal-head -->
    </div>
      <div :class="['sk-modal__body', {
   
      }]">
        <slot name="body"></slot>
      </div> <!-- sk-modal-body -->

      <div
        class="sk-modal__foot"
        v-if="hasFooterSlot()">
        <slot name="footer"></slot>
      </div> <!-- sk-foot -->

    </div>

  </div> <!-- sk-modal-overlay -->

</template>
