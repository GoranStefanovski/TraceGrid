<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BoxBanner extends Vue {
    @Prop({type: Array, default: []}) infos;
    @Prop({type: Boolean, default: false}) isBgWhite;
    @Prop({type: String, default: ''}) infoName;
    @Prop({type: String, default: ''}) title;

  constructor() {
    super();
  }
}
</script>

<template>
    <div :class="['features', {
    }]">
        <div class="container features-wrap">
            <h1>{{ title }}</h1>
            <div class="row features-wrap_row">
                <div v-for="info in infos" :key="info.id" :class="['features-box features-box-original', {
                    'features-box-smaller':infoName == 'pricing'
                }]">
                    <div v-if="infoName == 'features'" class="features-box-wrap">
                        <span>
                            <h3>{{info.title}}</h3>
                            <p>{{ info.desc }}</p>
                        </span>
                       
                    </div>
                    <div v-if="infoName == 'pricing'" class="pricing-box">
					<h3>{{ info.name }}</h3>
					<ul>
						<li>{{ info.accessOne }}</li>
						<li>{{ info.accessTwo }}</li>
						<li>{{ info.accessThree }}</li>
					</ul>
					<p class="price">{{info.price}}</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

 
  <style lang="scss" scoped>
.features {
    background: #f2f2f2;
    &-white {
        background: white !important;
    }
    &-wrap {
        padding: 30px 10px;
        &_row {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }
    }
    &-box {
        box-shadow: 0 0 15px 0 rgba(0,0,0,0.05);
        background-color: #fff;
        background-clip: border-box;
        border: 0 solid #e9ecef;
        border-radius: 0.2rem;
        padding: 25px 15px;
        margin: 20px;
        &-wrap {
            text-align: center;
            color: black;
            & > span {
                & > h3 {
                    font-size: 1.675rem;
                    line-height: 1.8rem;
                }
                & > P {
                    font-size: 1.1rem;
                    line-height: 1.3rem;
                    padding: 0 30px;
                }
            }
        }
        &-original {
            flex: 0 0 40%;
        }
        &-smaller {
            flex: 0 0 33%;
        }
    }
}

.pricing {
    &-box {
        cursor: pointer;
        color: #0000;
        background: 
            linear-gradient(90deg,#1095c1 50%,#000 0) 
            var(--_p,100%)/200% no-repeat;
        -webkit-background-clip: text;
                background-clip: text;
        transition: .4s;
        padding: 20px 20px;
        text-align: center;
        & > h3 {
            margin: 10px;
            font-size: 1.675rem;
            line-height: 1.8rem;
        }
        & > p {
            margin: 0;
            padding: 0;
            font-size: 1.1rem;
            line-height: 1.3rem;
        }
        & > ul {
            padding: 5px 0;
            list-style: none;
            & > li {
                font-size: 1.4rem;
                margin: 10px 0;
            }
        }
        &:hover {
            cursor: pointer;
        --_p: 0%;
        }
    }
}
</style>
  