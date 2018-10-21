import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        audioElement: '',
        playState:false,
        musicUrl:''
    },
    mutations: {
        setAudioElement(state, audioElement) {
            state.audioElement = audioElement;
        },
        setMusicUrl(state,url) {
            state.musicUrl = url;
        },
        setPlayState(state,playState) {
            state.playState = playState;
        }
    },
    actions: {
    }

})