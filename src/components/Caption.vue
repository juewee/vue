<template>
	<div class="caption">
		<div class="center">
			<div class="img">

			</div>
			<p style="font-size: 40px;"><b>losheep</b></p>
			<p ref="textElement">&nbsp;{{ visibleText }}&nbsp;</p>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				content: "梧高凤必至，花香蝶自来",
				visibleText: " "
			};
		},
		methods: {
			showText() {
				let index = 0;
				const intervalId = setInterval(() => {
					this.visibleText += this.content.charAt(index);
					index++;

					if (index >= this.content.length + 15) {
						clearInterval(intervalId);
						this.hideText();
					}
				}, 200);
			},
			hideText() {
				let index = this.content.length;
				const intervalId = setInterval(() => {
					this.visibleText = this.visibleText.slice(0, -1);
					index--;

					if (index <= 0) {
						clearInterval(intervalId);
						this.showText();
					}
				}, 100);
			}
		},
		mounted() {
			this.showText();
		}
	};
</script>

<style scoped>
	.caption {
		height: 800px;
		width: 100%;
		background-color: rgba(255, 255, 255, 0.1);
		text-align: center;
	}

	.center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 200px;
		color: white;
	}

	.img {
		background-image: url("https://s1.ax1x.com/2023/05/25/p9b96Cd.png");
		height: 100px;
		width: 100px;
		border-radius: 50px;
		background-size: 250%;
		background-position: center;
		margin: auto;

	}

	p {
		margin: 0;

	}
</style>