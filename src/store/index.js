import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    game: {
      players: [{ id: "pierre" }, { id: "micka" }],
      decks: {
        pierre: [
          { type: "grey" },
          { type: "bomb" },
          { type: "bigben" },
          { type: null },
          { type: null }
        ],
        micka: [
          { type: "grey" },
          { type: "bomb" },
          { type: "bigben" },
          { type: null },
          { type: null }
        ]
      }
    }
  },
  getters: {
    playerDecks(state) {
      return state.game.players.map(player => {
        return { ...player, deck: state.game.decks[player.id] };
      });
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
