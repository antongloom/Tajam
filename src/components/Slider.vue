<template>
  <div id="slider" class="slider">
     <Slides :comment="comments[chosenComment]" />
     <div class="slider__pagination">
         <div class="pagination__left" @click="arrowLeft()">
             <img src="../assets/images/arrow-left.png" alt="Img">
         </div>
         <div class="pagination__block">
             <ul> 
                 <li @click="pagination(comment.id)" v-for="comment in comments" :key="comment.id">
                     <img :src="comment.url" />
                     <div class="point"></div>
                 </li>
             </ul>
         </div>
         <div class="pagination__right" @click="arrowRight()">
             <img src="../assets/images/arrow-right.png" alt="Img">
         </div>
     </div>
  </div>
</template>

<script>
import Slides from './Slides.vue';
export default {
   components: {
    Slides
   },
   data(){
        return{
            comments:[
                {
                    id: 0,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium odio reiciendis, nisi facere quia dolore alias omnis dignissimos magnam deserunt iste expedita vero recusandae ullam nesciunt est illo quae cum nisi facere quia dolore alias omnis dignissimos!',
                    title: 'Eva Green',
                    subtitle: 'Ceo Tengkurep',
                    url: require('../assets/images/slider1.png'),
                    
                },
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium odio reiciendis, nisi facere quia dolore alias omnis dignissimos magnam deserunt iste expedita vero recusandae ullam nesciunt est illo quae cum nisi facere quia dolore alias omnis dignissimos!',
                    title: 'Denis  Villeneuve',
                    subtitle: 'Ceo Tengkurep',
                    url: require('../assets/images/slider2.png'),
                },
                {
                    id: 2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium odio reiciendis, nisi facere quia dolore alias omnis dignissimos magnam deserunt iste expedita vero recusandae ullam nesciunt est illo quae cum nisi facere quia dolore alias omnis dignissimos!',
                    title: 'Emma Stone',
                    subtitle: 'Ceo Tengkurep',
                    url: require('../assets/images/slider3.png'),
                },
                {
                    id: 3,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium odio reiciendis, nisi facere quia dolore alias omnis dignissimos magnam deserunt iste expedita vero recusandae ullam nesciunt est illo quae cum nisi facere quia dolore alias omnis dignissimos!',
                    title: 'Kate Beckinsale',
                    subtitle: 'Ceo Tengkurep',
                    url: require('../assets/images/slider4.png'),
                },
                {
                    id: 4,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium odio reiciendis, nisi facere quia dolore alias omnis dignissimos magnam deserunt iste expedita vero recusandae ullam nesciunt est illo quae cum nisi facere quia dolore alias omnis dignissimos!',
                    title: 'Hugh Jackman',
                    subtitle: 'Ceo Tengkurep',
                    url: require('../assets/images/slider5.png'),
                },
            ],
            chosenComment: 0,
            intervalObject: null
        }
   },
   methods :{
       pagination(id){
            this.chosenComment = id;
            clearInterval(this.intervalObject);
            var self = this;
            this.intervalObject = setInterval(()=>{
                self.moveRight();
            },4000);
       },
       arrowLeft(){
            clearInterval(this.intervalObject);
            this.moveLeft();
            var self = this;
            this.intervalObject = setInterval(()=>{
                self.moveLeft();
            },4000);
       },
       arrowRight(){
            clearInterval(this.intervalObject);
            this.moveRight();
            var self = this;
            this.intervalObject = setInterval(()=>{
                self.moveRight();
            },4000);
       },
        moveLeft(){
            var flag = this.chosenComment;
            flag--;
            if(flag < 0){
                flag = (this.comments.length - 1);
            }
            this.chosenComment = flag;
       }, 
       moveRight(){
            var flag = this.chosenComment;
            flag++;
            if(flag >= this.comments.length){
                flag = 0;
            }
            this.chosenComment = flag;
       } 
   },
   created(){
        var self = this;
        this.intervalObject = setInterval(()=>{
            self.moveRight();
        },4000);
   }
}
</script>

<style lang="less">
.slider__pagination{
        padding-top: 70px;
        max-width: 370px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pagination__block{
            ul{
                li{
                    display: inline-block;
                    margin-right: 15px;
                    cursor: pointer;
                    &:last-child{
                        margin-right: 0px;
                    }
                    .point{
                        width: 5px;
                        height: 5px;
                        background: #fff;
                        border-radius: 50%;
                        display: none;
                    }
                }
            }
        }
        .pagination__left{
            cursor: pointer;
        }
        .pagination__right{
            cursor: pointer;
        }
    }

@media screen and(max-width: 480px){
    .section-slider .slider__image .image__content .content__commas{padding: 40px 0px 30px 0px;}
    .slider__pagination{width: 160px; padding-top: 40px;}
    .slider__pagination .pagination__block ul li img{display: none;}
    .slider__pagination .pagination__block ul li .point{display: block;position: relative; top: -4px;}
}

</style>