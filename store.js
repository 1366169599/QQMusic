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
        songs:[],
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
        setShowPlayBar(state,boolearn) {
            state.showPlayBar = boolearn;
        },
        setSong(state,song) {
            state.song = song;
            state.songName = song.name;
            state.singerName = getSinger(song);
            state.songPicture = song.al.picUrl;
        },
        setSongs(state,songs) {
            state.songs = songs;
        },
    },
    actions: {
    }

})

function getSinger(song) {
    return song.ar.map(item => {
        return item.name
    }).join('/')
}