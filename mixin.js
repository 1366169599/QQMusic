export default {
    methods: {
        goBack() {
            history.back()
        },
        playMusic(song,songs) {
            this.$store.state.audioElement.load();
            let playState = this.$store.state.playState;
            this.$store.commit('setShowPlayBar',true);
            this.$store.commit('setSong',song);
            this.$store.commit('setSongs',songs);
            this.$axios({
                method: "get",
                url: "/music/url?id=" + song.id
            }).then(res => {
                let url = res.data.data[0].url;
                this.$store.state.audioElement.src = url;
                let lastMusicUrl = this.$store.state.musicUrl;

                    this.$store.state.audioElement.play();
                
                // if(!this.$store.state.playState){
                //   this.$store.commit('setShowPlayBar', false);
                //     this.$router.push({path:'detail'})
                // }

                if (lastMusicUrl === url && this.$store.state.playState){
                    this.$store.commit('setShowPlayBar', false);
                    this.$router.push({
                        path: 'detail'
                    })
                }


                // if(lastMusicUrl === url && this.$store.state.playState) {
                //     this.$store.commit('setPlayState', !playState)
                //     this.$store.state.audioElement.pause();
                // }else {
                //     this.$store.state.audioElement.play();
                //     this.$store.commit('setPlayState', true)
                // }


                this.$store.commit('setMusicUrl',url);
            });
        },
    }
}