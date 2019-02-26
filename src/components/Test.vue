<template>
	<div>	
		<input type="range"  v-model="rangeInput">
		{{rangeInput}}
	</div>
</template>
<script>
	export default {
  	data () {
	    return {
	      rangeInput: '0'
		}	
  	},
  	computed: {
  	/*	evenNumbers() {
    		return this.numbers.filter(function (number) {
      		return number % 2 === 0
    })
  } */
	}
}
	</script>
	<style lang="less">
		
	</style>