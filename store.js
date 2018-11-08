import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        audioElement: '',
        playState:false,
        musicUrl:'',
        showPlayBar:false,
        singerName:'',
        songName:'',
        songPicture:'',
        song:{},
        songs:[]
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
        },
        setSingerName(state,singerName) {
            state.singerName = singerName ;
        },
        setSongName(state,songName) {
            state.songName = songName;
        },
        setSongPicture(state,songPicture) {
            state.songPicture = songPicture;
        },
        setShowPlayBar(state,boolearn) {
            state.showPlayBar = boolearn;
        },
        setSong(state,song) {
            state.song = song;
        },
        setSongs(state,songs) {
            state.songs = songs;
        },
    },
    actions: {
    }

})