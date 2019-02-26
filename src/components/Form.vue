<template>
	<div id="form">
		<div class="section-partners">
    	<div class="partners__content">
    		<div class="content__block">
    			<div class="block__title">GIVE US A GOOD NEWS</div>
    			<div class="block__form form">
    				<form action="" method="" @submit.prevent="saveUser">
    					<ul>
    						<li>
                <div class="form__item" :class="{errorInput: $v.name.$error}">
                  <input class="item__input" 
                         type="text" 
                         placeholder="Name" 
                         v-model.trim="name"
                         :class="{error: $v.name.$error}"
                         @change="$v.name.$touch()">
                         <div class="error" v-if="!$v.name.required">The field is not filled</div>
                </div>
                </li>
    						<li>
                  <div class="form__item" :class="{errorInput: $v.email.$error}">
                    <input class="item__input" 
                           type="text" 
                           placeholder="Email" 
                           v-model.trim="email"
                           :class="{error: $v.email.$error}"
                           @change="$v.email.$touch()">
                           <div class="error" v-if="!$v.email.required">The field is not filled</div>
                           <div class="error" v-if="!$v.email.email">Email entered incorrectly</div>
                    </div>
                </li>
    						<li>
                  <div class="form__item" :class="{errorInput: $v.phone.$error}">
                  <input class="item__input" 
                         type="number" 
                         placeholder="Phone" 
                         v-model.number="phone"
                         :class="{error: $v.phone.$error}"
                         @change="$v.phone.$touch()">
                         <div class="error" v-if="!$v.phone.required">The field is not filled</div>
                </div>  
                </li>
    						<li>
    							<textarea placeholder="Your Message" v-model="usermessage"></textarea>
    						</li>
    					</ul>
    					<button class="form__btn btn" type="submit" :disabled="submitStatus === 'PENDING'">SUBMIT</button>
    				</form>
    			</div>
    		</div>
    		<div class="content__block">
    			<div class="block__title">OUR HAPPY CLIENT</div>
    			<div class="block__mark">
    				<div class="mark__item">
    					<img src="../assets/images/img1.png" alt="Img">
    				</div>
    				<div class="mark__item">
    					<img src="../assets/images/img2.png" alt="Img">
    				</div>
    				<div class="mark__item">
    					<img src="../assets/images/img3.png" alt="Img">
    				</div>
    				<div class="mark__item">
    					<img src="../assets/images/img4.png" alt="Img">
    				</div>
    				<div class="mark__item">
    					<img src="../assets/images/img5.png" alt="Img">
    				</div>
    				<div class="mark__item">
    					<img src="../assets/images/img6.png" alt="Img">
    				</div>
    				<div class="mark__item">
    					<img src="../assets/images/img7.png" alt="Img">
    				</div>
    				<div class="mark__item">
    					<img src="../assets/images/img8.png" alt="Img">
    				</div>
    				<div class="mark__item">
    					<img src="../assets/images/img9.png" alt="Img">
    				</div>
    				<div class="mark__item">
    					<img src="../assets/images/img10.png" alt="Img">
    				</div>
    			</div>
    		</div>
    	</div>
      <div class="popup" :class="{popupActive: popupShow}">
      <div class="popup__content">
        <div class="content__text">Message was sent successfully</div>
      </div>
    </div>
    </div>
	</div>
</template>
<script>
import axios from 'axios'
import Vuelidate from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
    export default {
      data () {
        return {
          newUser: [],
          name: '',
          email: '',
          phone: '',
          usermessage: '',
          errorMessage : "",
          successMessage : "",
          popupShow: false,
          submitStatus: null
        }
      },
       validations: {
        email: {
          required,
          email
        },
        name: {
          required
        },
        phone: {
          required,
        }
      },
      methods: {
        saveUser(){
          this.$v.$touch()
          if (this.$v.$invalid) {
            this.submitStatus = 'ERROR'
          } else {
              this.submitStatus = 'OK'
              this.newUser = {name: this.name, email: this.email, phone: this.phone, usermessage: this.usermessage};
              var formData = this.toFormData(this.newUser);
              axios.post("http://antongloom.beget.tech/test.php", formData)
                .then(function(response){
                  console.log(response);
                  if (response.data.error) {
                    this.errorMessage = response.data.message;
                  }else{
                    this.successMessage = response.data.message;
                  }
              });
              this.usermessage = '';
              this.popupShow = true; 
              setInterval(()=>{
                this.popupShow = false;  
              },2000);
            }
      },
      toFormData(obj){
        var form_data = new FormData();
            for ( var key in obj ) {
                form_data.append(key, obj[key]);
            } 
            return form_data;
      },
        

      }
    }
</script>
<style lang="less" scoped>
	.section-partners{
    position: relative;
		.partners__content{
			max-width: 960px;
			margin: 0 auto;
			padding-left: 15px;
			padding-right: 15px;
			display: flex;
			justify-content: space-between;
			padding-bottom: 70px;
			.content__block{
				.block__title{
					font-family: "Roboto-bold";
					font-size: 20px;
					color: #000;
					padding-bottom: 20px;
				}
				.block__mark{
					width: 380px;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					.mark__item{
						width: 50%;
						margin-bottom: 30px;
					}
				}
			}
		}
	}	

.form{
	width: 460px;
	ul{
		li{
			list-style-type: none;
			padding-bottom: 25px;
			input{
				width: 100%;
				height: 45px;
				border: 1px solid #ddd;
				padding: 0px 15px;
				box-sizing: border-box;
				font-family: "Roboto-regular";
				font-size: 14px;
				outline: none;
			}
			textarea{
				width: 100%;
				height: 200px;
				border: 1px solid #ddd;
				padding: 15px;
				box-sizing: border-box;
				font-family: "Roboto-regular";
				font-size: 14px;
				outline: none;
				resize: none;
			}
		}
	}
	.form__btn{
		margin-bottom: 20px;
	}
}

.popup{
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -35%);
  -webkit-transform: translate(-50%, -35%);
  -moz-transform: translate(-50%, -35%);
  -ms-transform: translate(-50%, -35%);
  -o-transform: translate(-50%, -35%);
  z-index: 40;
  display: none;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  .popup__content{
    padding: 30px 15px;
    border: 1px solid #00e0d0;
    box-sizing: border-box;
    background: #00e0d0;
    text-align: center;
    -webkit-box-shadow: 0px 0px 22px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 22px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 22px -6px rgba(0,0,0,0.75);
    border-radius: 3px;
    .content__text{
      font-family: "Roboto-regular";
      font-size: 18px;
      color: #000;
    }
  }
}

.popupActive{
  display: block;
}


.form__item{
  .error{
  display: none;
    margin-bottom: 8px;
    font-size: 13.4px;
    color: #fc5c65;
  }
  &.errorInput{
    .error{
      display: block;
    }
  }
}
  
input{
  &.error{
    border-color: #fc5c65 !important;
    animation: shake .5s;
  }
}


@media screen and(max-width: 992px){
	.section-partners .partners__content{display: block; padding-bottom: 20px;}
	.section-partners .partners__content .block__form{width: 100%;}
	.section-partners .partners__content .content__block .block__form ul li{padding-bottom: 20px;}
	.section-partners .partners__content .content__block .block__title{text-align: center;}
	.section-partners .partners__content .content__block .block__mark{margin: 0 auto;}
	.section-partners .partners__content .content__block .block__mark .mark__item{text-align: center;}
  .popup{top: 20%;transform: translate(-50%, -20%);-webkit-transform: translate(-50%, -20%);-moz-transform: translate(-50%, -20%);-ms-transform: translate(-50%, -20%);-o-transform: translate(-50%, -20%);}

}

@media screen and(max-width: 480px){
	.section-partners .partners__content .block__form{text-align: center;}
	.section-partners .partners__content .content__block .block__mark{width: 100%;}
	.section-partners .partners__content .content__block .block__mark .mark__item img{height: 20px;} 
  .popup .popup__content{padding: 20px 15px; width: 200px;}
  .popup .popup__content .content__text{font-size: 16px;}
}


</style>