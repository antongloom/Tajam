<template>
    
        <transition-group name="fade" mode="out-in" tag="div" id="slides">
            <div class="slides__content" :key="comment.id">
                 <div class="content__text">
                     {{comment.text}}
                 </div>
                 <div class="content__name">
                    <div class="name__title">{{comment.title}}</div>
                    <div class="name__subtitle">{{comment.subtitle}}</div>    
                 </div>
            </div>
        </transition-group>
    
</template>

<script>
export default {
    props: ["comment"]
}
</script>

<style lang="less">
.slides__content{
    text-align: center;
    .content__text{
        font-family: "Roboto-light";
        font-size: 18px;
        color: #fff;
        display: inline-block;
        max-width: 800px;
        padding-bottom: 30px;
        line-height: 1.4;
        min-height: 130px;
    }
    .content__name{
        .name__title{
        font-family: "Roboto-regular";
        font-size: 16px;
        color: #fff;
        text-transform: uppercase;
        line-height: 1.5;
        }
        .name__subtitle{
        font-family: "Roboto-light";
        font-size: 14px;
        color: #fff;
        text-transform: uppercase;
        }
    }
}

.fade-enter-active{
    animation-name: fadeEnter;
    animation-duration: 1s;
    animation-iteration-count: 1;
}

.fade-move{
    transition: all 1s;
}

.fade-leave-active{
    animation-name: fadeLeave;
    animation-duration: 1s;
    animation-iteration-count: 1;
    position: absolute;
}

@keyframes fadeEnter{
    from{
        opacity: 0;
    }
    to{
       opacity: 1; 
    }
}

@keyframes fadeLeave{
    from{
        opacity: 1;
    }
    to{
       opacity: 0; 
    }
}

</style>