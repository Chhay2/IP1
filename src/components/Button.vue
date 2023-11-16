<template>
        <button :style="{ backgroundColor:btnBg}">
        <p class="text">Shop Now</p>
    </button>
</template>

<script>
export default {
    name:"Button",

    props:{
        btnBg:String,
    },
} ;
</script>
<style scoped>
button{
    border: 1px;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 8px 15px 8px 15px;
    width: 120px;
    height: 30px;
    
}
.text{
    font-weight: 700;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);


}




</style>