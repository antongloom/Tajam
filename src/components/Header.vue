<template>
	<div id="header" v-on:scroll="handleScroll">
		<header :class="{active: menuShow}">
			<div class="header__content">
				<a href="#" class="content__logo">
					<img src="../assets/images/logo.png" alt="Logo">
				</a>
				<div class="content__nav">
					<ul class="nav__menu">
						<li v-for="link in links">
							<a :href="link.id" :class="{activeColor: menuShow}">{{link.name}}</a>
						</li>
					</ul>
				</div>
				<div class="nav__hamburger hamburger"
	   				 @click="hamburgerShow = !hamburgerShow"
	   				 :class="{ activeLine: hamburgerShow }">
					<div class="line line-1" :class="{lineColor: menuShow}"></div>
					<div class="line line-2" :class="{lineColor: menuShow}"></div>
					<div class="line line-3" :class="{lineColor: menuShow}"></div>
				</div>
				<ul class="nav__list" :class="{ activeList: hamburgerShow }">
						<li v-for="link in links" @click="hamburgerShow = !hamburgerShow">
							<a :href="link.id">{{link.name}}</a>
						</li>
				</ul>
			</div> 
		</header>
	</div>  
</template>
<script>
	import vuescroll from 'vue-scroll'
	export default {
  	data () {
	    return {
	      menuShow: false,
	      hamburgerShow: false,
	      scrolled: '',
	      links: [
	      	{
	      		id: "#home",
	      		name: "Home"
	      	},
	      	{
	      		id: "#about",
	      		name: "About"
	      	},
	      	{
	      		id: "#team",
	      		name: "Team"
	      	},
	      	{
	      		id: "#experiise",
	      		name: "Experiise"
	      	},
	      	{
	      		id: "#works",
	      		name: "Works"
	      	},
	      	{
	      		id: "#people",
	      		name: "People"
	      	},
	      	{
	      		id: "#contact",
	      		name: "Contact"
	      	}
	      ]
			}	
  	},
  	methods: {
  		handleScroll () {
    		this.scrolled = window.scrollY;
    		if(this.scrolled > 50){
    			this.menuShow = true
    		}else{
    			this.menuShow = false
    		}
  		}
		},
		beforeMount () {
		  window.addEventListener('scroll', this.handleScroll);
		},
		beforeDestroy () {
		  window.removeEventListener('scroll', this.handleScroll);
		} 
	}
</script>
<style lang="less" scoped>

header{
	max-width: 1920px;
	margin: 0 auto;
	position: fixed;
	left: 0;
	right: 0;
	z-index: 20;
	padding: 10px 0px;
	-webkit-transition: all 0.3s ease;
	-moz-transition: all 0.3s ease;
	transition: all 0.3s ease;
	.header__content{
		max-width: 960px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		padding-left: 15px;
		padding-right: 15px;
		.content__logo{
		
		}
		.content__nav{
			.nav__menu{
				display: inline-block;
				padding-top: 20px;
				li{
					display: inline-block;
					padding-left: 20px;
					a{
						text-decoration: none;
						text-transform: uppercase;
						font-family: "Roboto-bold";
						color: #fff;
						font-size: 13px;
						-webkit-transition: all 0.3s ease;
					  	-moz-transition: all 0.3s ease;
					  	transition: all 0.3s ease;
					  	&:hover{
						    color: #00e0d0;
					  }
					}
				}
			}
			.nav__hamburger{
				display: inline-block;
			}
		}
	}
}

.active{
	-webkit-box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
	-moz-box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
	box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
	background: #fff;
	z-index: 50;
}

.activeColor{
	color: #000 !important;
	&:hover{
		  color: #00e0d0 !important;
		}
}

.hamburger{
  display: none;
  position: relative;
  width: 34px;
  height: 17px;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  top: 14px;
  .line {
	  display: block;
	  position: absolute;
	  height: 2px;
	  width: 100%;
	  background-color: #fff;
	  border-radius: 4px;
	  opacity: 1;
	  left: 0;
	  -webkit-transform: rotate(0deg);
	  transform: rotate(0deg);
	  -webkit-transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
	  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
		}
	  .line-1 {
	    top: 0%;
	    }
	  .line-2 {
	    top: 50%;
	  }
	  .line-3 {
	    top: 100%;
	  }
}

.lineColor{
	background-color: #110c32!important;
}

.activeLine{
  .line-1{
    -webkit-transform: translateY(8.33px) translateX(0) rotate(45deg);
    transform: translateY(8.33px) translateX(0) rotate(45deg);
  }
  .line-2{
    opacity: 0;
  }
  .line-3{
    -webkit-transform: translateY(-8.33px) translateX(0) rotate(-45deg);
    transform: translateY(-8.33px) translateX(0) rotate(-45deg);
  }
}

.nav__list{
  display: none;
  position: fixed;
  top: 85px;
  right: 15px;
  width: 125px;
  z-index: 30;
  background-color: #fff;
  text-align: center;
  padding-left: 0px;
  padding-top: 5px;
  padding-bottom: 15px;
  z-index: 100;
  border: 1px solid #ddd;
  li{
  	list-style-type: none;
    padding-top: 10px;
  	a{
  		text-decoration: none;
  		font-family: "Roboto-regular";
  		color: #000;
  	}
  }
}

.activeList{
	display: block;
}


@media screen and(max-width: 768px){
	header .header__content .content__nav{display: none;} 
	.hamburger{display: block;}
}

</style>