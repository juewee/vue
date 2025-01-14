<template class="center">
	<Header></Header>
	<div>
		<Caption></Caption>
		<Nav></Nav>
		<div class="footer">
			<p>欢迎再次光临</p>
			<p>thank you very much</p>
			<p>© 2023 losheep. 版权所有.</p>
			<p>联系我: <a href="2651237933@qq.com">2651237933@qq.com</a></p>
		</div>
	</div>
</template>
<script>
	import Header from '../src/components/Header.vue';
	import Caption from '../src/components/Caption.vue';
	import Nav from '../src/components/Nav.vue';
	import {clickEffect} from "../src/js/bg";
	export default {
		components: {
			Header,
			Caption,
			Nav
		},
		created() {
			clickEffect();
		}
	};
</script>
<style>
	body {
		background-image: url("/src/assets/wallhaven-p9mxwj.png");
		background-size: 100%;
		overflow-x: hidden;
		
		background-attachment: fixed;
		/* 固定背景位置 */
		padding: 0%;
		margin: 0%;
	}
	.footer {
		width: 100%;
		color: white;
		height: 100px;
		backdrop-filter: blur(10px);
		padding: 20px;
		text-align: center;
		font-size: 14px;
		margin-bottom: -50px;
		color: #666;
	}
	
</style>