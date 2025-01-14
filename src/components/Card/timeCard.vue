<template>
  <div>
	  <p>当前时间</p>
    <p><b>{{ currentTime }}</b></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: ''
    };
  },
  created() {
    this.updateTime();
  },
  methods: {
    updateTime() {
      this.currentTime = this.getCurrentTime();
      setTimeout(this.updateTime, 1000); // 每秒更新一次时间
    },
    getCurrentTime() {
      const now = new Date();
      const hours = this.padZero(now.getHours());
      const minutes = this.padZero(now.getMinutes());
      const seconds = this.padZero(now.getSeconds());
      return `${hours}:${minutes}:${seconds}`;
    },
    padZero(value) {
      return value < 10 ? '0' + value : value;
    }
  }
};
</script>
<style scoped>
	div{
		border-radius: 15px;
		padding: 15px;
		background-color: white;
		font-size: 20px;
		text-align: center;
	}
</style>
