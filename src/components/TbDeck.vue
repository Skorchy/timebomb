




















<template>
  <div class="TbDeck">
    <TbCard v-for="i in cardNumber" :key="i" cardType="grey" />
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
    cardNumber: {
      type: Number,
      validator: function(value) {
        return value < 6 && value > 1;
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