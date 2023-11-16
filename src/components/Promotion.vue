<template>
    <div class="Promotionbox" :style="{backgroundColor:color}">
    <img class="image" :src="image" alt="" :style="{width:'500px',height:'200px'}">
    <div class="text">{{ text }}</div>
    <div>
      <!-- <p class="text">{{ Title }}</p> -->
      <Button class="btn" :btnBg="btnBg"></Button>
    </div>
    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    name:"Promotion",
    components:{
        Button,
    },
    props:{
        color: String,
        image: String,
        text: String,
        btnBg: String


    },
} ;
</script>
<style scoped>

.Promotionbox{
    display: flex;
    position: relative;
    align-items: center;
    width: 512px;
    height: 300px;
    background-color: rgba(182, 182, 182, 1);
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-right: 17px;

}
.image {
  margin-top: 95px;
  margin-left: 50px;
  width: 300px;
  height: 181px;
}
.text {
  width: 271px;
  height: 92px;
  position: absolute;
  left: 48px;
  top: 75px;
  font-family: Quicksand;
  font-weight: 700;
  font-size: 24px;
  color:#253D4E;
}
.btn {
  position: absolute;
  top: 240px;
  left: 48px;
  border: none;
  border-radius: 3px;
}




</style>