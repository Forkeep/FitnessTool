<template>
  <Layout class="wrapper">
    <div class="type">
      <div :class="this.type==='unarmed' && 'selected' " @click="selectType('unarmed')">徒手</div>
      <div :class="this.type==='instrument' && 'selected'" @click="selectType('instrument')">器械</div>
    </div>
    <ul class="body-parts">
      <li :class="this.parts === 'chest' && 'selected'" @click="selectPart('chest')">胸</li>
      <li :class="this.parts === 'back' && 'selected'" @click="selectPart('back')">背</li>
      <li :class="this.parts === 'leg' && 'selected'" @click="selectPart('leg')">腿</li>
      <li :class="this.parts === 'shoulder' && 'selected'" @click="selectPart('shoulder')">肩</li>
      <li :class="this.parts === 'arm' && 'selected'" @click="selectPart('arm')">手臂</li>
      <li :class="this.parts === 'abdominal' && 'selected'" @click="selectPart('abdominal')">腹肌</li>
      <li :class="this.parts === 'aerobic' && 'selected'" @click="selectPart('aerobic')">有氧</li>
    </ul>
    <ul class="practice-items">
      <li><span>平板卧推</span>
        <icon name="进入"/>
      </li>
      <li><span>上斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>平板卧推</span>
        <icon name="进入"/>
      </li>
      <li><span>上斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>平板卧推</span>
        <icon name="进入"/>
      </li>
      <li><span>上斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>平板卧推</span>
        <icon name="进入"/>
      </li>
      <li><span>上斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>平板卧推</span>
        <icon name="进入"/>
      </li>
      <li><span>上斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>平板卧推</span>
        <icon name="进入"/>
      </li>
      <li><span>上斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>平板卧推</span>
        <icon name="进入"/>
      </li>
      <li><span>上斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>平板卧推</span>
        <icon name="进入"/>
      </li>
      <li><span>上斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
      <li><span>平板卧推</span>
        <icon name="进入"/>
      </li>
      <li><span>上斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>
    </ul>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Training extends Vue {
    type = 'unarmed';
    parts = 'chest';
    allParts = ['chest', 'back', 'leg', 'shoulder', 'arm', 'abdominal', 'aerobic'];

    selectType(type: string) {
      console.log('click');
      if (type !== 'unarmed' && type !== 'instrument') {
        throw new Error('没有此类型');
      }
      this.type = type;
    }

    selectPart(parts: string) {
      for (let i = 0; i < this.allParts.length; i++) {
        if (this.allParts[i] === parts) {
          this.parts = parts;
          break;
        }
      }

    }
  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
.wrapper{
  .type {
    @extend %outerShadow;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-height: 80px;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
    }

    .selected {
      background-color: $color-theme;
    }


  }

  .body-parts {
    @extend %outerShadow;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    > li {
      @extend %outerShadow;
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #EEE;
    }

    .selected {
      background-color: $color-theme;
    }
  }
  .practice-items{
    flex-grow: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    padding: 0 10px 0 10px;
    >li{
      @extend %outerShadow;
      width: 100%;
      min-height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>