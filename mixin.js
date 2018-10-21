function getSinger(song){
    return song.ar.map(item=>{
        return item.name
    }).join('/')
}
export default {
    methods: {
        goBack() {
            history.back()
        },
        playMusic(song) {
            this.$store.state.audioElement.load();
            let playState = this.$store.state.playState;
            this.$store.commit('setSongName',song.name);
            this.$store.commit('setSingerName',getSinger(song));
            this.$store.commit('setSongPicture',song.al.picUrl);
            this.$store.commit('setShowPlayBar');
            this.$axios({
                method: "get",
                url: "/music/url?id=" + song.id
            }).then(res => {
                let url = res.data.data[0].url;
                this.$store.state.audioElement.src = url;
                let lastMusicUrl = this.$store.state.musicUrl;
                
                if(lastMusicUrl === url && this.$store.state.playState) {
                    this.$store.commit('setPlayState', !playState)
                    this.$store.state.audioElement.pause();

                }else {
                    this.$store.state.audioElement.play();
                    this.$store.commit('setPlayState', true)
                }
                this.$store.commit('setMusicUrl',url);
            });
        },
    }
}