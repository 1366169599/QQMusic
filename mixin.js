export default {
    methods: {
        goBack() {
            history.back()
        },
        playMusic(id) {
            this.$store.state.audioElement.load();
            let playState = this.$store.state.playState;

            this.$axios({
                method: "get",
                url: "/music/url?id=" + id
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
        }
    }
}