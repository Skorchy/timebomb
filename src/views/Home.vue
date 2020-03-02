<template>
  <div class="home">
    <TbCard cardType="grey" />
    <TbCard cardType="bomb" />
    <TbCard cardType="bigben" />
    <TbDeck :cardNumber="5" />
  </div>
</template>

<script>
// @ is an alias to /src
import TbCard from "@/components/TbCard.vue";
import TbDeck from "@/components/TbDeck.vue";

export default {
  name: "Home",
  components: {
    TbCard,
    TbDeck
  }
};
</script>
