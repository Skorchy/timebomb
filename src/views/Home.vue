<template>
  <div class="home">
    <TbCard cardType="grey" />
    <TbCard cardType="bomb" />
    <TbCard cardType="bigben" />
  </div>
</template>

<script>
// @ is an alias to /src
import TbCard from "@/components/TbCard.vue";

export default {
  name: "Home",
  components: {
    TbCard
  }
};
</script>
