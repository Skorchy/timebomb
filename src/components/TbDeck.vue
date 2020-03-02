




















<template>
  <div class="TbDeck">
    <TbCard v-for="(card,index) in cards" :key="index" cardType="grey" />
  </div>
</template>

<script>
import TbCard from "@/components/TbCard.vue";

export default {
  name: "TbDeck",
  components: {
    TbCard
  },
  props: {
    cards: {
      type: Array,
      validator: function(value) {
        return value.length < 6 && value.length > 1;
      },
      required: true
    }
  }
};
</script>

<style>
.TbDeck {
  display: inline-block;
  height: 100px;
  width: 400px;
  background-color: aquamarine;
  margin: 5px;
  border: 3px solid rgb(124, 108, 17);
}
</style>