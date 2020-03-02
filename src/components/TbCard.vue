<template>
  <FlipCard :flipped="!turned">
    <template slot="front">
      <div
        @click="turned = false"
        class="card"
        :class="{
          'grey-card': cardType == 'grey',
          'gold-card': cardType == 'bomb',
          'red-card': cardType == 'bigben'
        }"
      />
    </template>
    <template slot="back">
      <div class="card brown-card" @click="turned = true" />
    </template>
  </FlipCard>
</template>

<script>
import FlipCard from "@/components/FlipCard.vue";

export default {
  name: "TbCard",
  components: {
    FlipCard
  },
  props: {
    cardType: {
      validator: function(value) {
        return ["grey", "bomb", "bigben"].includes(value);
      },
      required: true
    }
  },
  data() {
    return {
      turned: false
    };
  }
};
</script>

<style>
.card {
  margin: 5px;
  width: 50px;
  height: 90px;
  border-radius: 7px;
  border: 2px solid white;
  display: inline-block;
}
.brown-card {
  background-color: #803e29;
}
.grey-card {
  background-color: #707070;
}
.gold-card {
  background-color: #d4af0b;
}
.red-card {
  background-color: #bf0202;
}
</style>
