<template>
	<div class="wrap">
		<v-header/>

		<div class="main">
			<div class="conts">
				<router-view/>
			</div>
		</div>

    <v-footer/>
	</div>
</template>

<script>
import vHeader from '@/components/Header.vue'
import vFooter from '@/components/Footer.vue'


export default {
	data() {
		return {

		}
	},

	components: {
    vHeader,
		vFooter
	},

	created() {
		let url = window.location;
		if (url.hash == '#/') {
			this.$router.replace('login');
		}
	}
}
</script>