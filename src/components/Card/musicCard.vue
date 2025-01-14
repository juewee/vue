<template>
	<div>
		<div v-if="musicData" class="music-card">
			<h2 @click="fetchMusicData">随机音乐：</h2>
			<div class="card-content">
				<p>歌曲：{{ musicData.data.name }}</p>
				<p>艺术家：{{ musicData.data.artistsname }}</p>
				<img :src="musicData.data.picurl" alt="音乐封面">
			</div>
			<audio controls :src="musicData.data.url" class="play-bar" @ended="playNext"></audio>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				musicData: null,
				currentMusicIndex: 0,
				play:false
			};
		},
		created() {
			this.fetchMusicData();
		},
		methods: {
			async fetchMusicData(autoPlay = this.play) {
				try {
					const response = await axios.get('https://api.uomg.com/api/rand.music?sort=热歌榜&format=json');
					this.musicData = response.data;

					if (autoPlay) {
						this.$nextTick(() => {
							const audioElement = document.querySelector('.play-bar');
							audioElement.play();
						});
					}
				} catch (error) {
					console.error('请求失败：', error);
				};
				this.play=true;
			},
			playNext() {
				this.currentMusicIndex++;
				this.fetchMusicData(true);
			}
		}
	}
</script>

<style>
	.music-card {
		border: 1px solid #ccc;
		border-radius: 15px;
		padding: 10px;
		margin-bottom: 20px;
		background-color: white;
	}

	img {
		width: 100%;
	}

	.card-content {
		margin-bottom: 10px;
	}

	.play-bar {
		width: 100%;
	}
</style>