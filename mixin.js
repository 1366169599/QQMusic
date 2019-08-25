export default {
    methods: {
        goBack() {
            history.back()
        },
        playMusic(song,songs) {
            this.$store.state.audioElement.load();
            let playState = this.$store.state.playState;
            this.$store.commit('setSong',song);
            this.$store.commit('setSongs',songs);
            this.$axios({
                method: "get",
                url: "/song/url?id=" + song.id
            }).then(res => {
                let url = res.data.data[0].url;
                this.$store.state.audioElement.src = url;
                let lastMusicUrl = this.$store.state.musicUrl;
                this.$store.state.audioElement.play();

                if (lastMusicUrl === url && this.$store.state.playState){
                    this.$store.commit('setShowPlayBar', false);
                    this.$router.push({
                        path: 'detail'
                    })
                }
                this.$store.commit('setMusicUrl',url); 
            });
        },
    }
}