<template>
    <div class="Categorybox" :style="{backgroundColor:color}">
    <img class="image" :src="image" alt="" :style="{width:'120px',height:'120px'}">
    <div class="itemname">{{ itemname }}</div>
    <div class="Amount">{{ Amount }}</div>
    </div>
</template>

<script>
export default {
    name:"Category",
    props:{
        image:String,
        color:String,
        itemname:String,
        Amount:String,
    },
} ;
</script>
<style scoped>

.Categorybox{
    position: relative;
    /* border: 1px solid;
    border-color: black; */
    width: 136px;
height: 177px;
border-radius: 10px;
margin-right: 24px; 
display: flex;
align-items: center;
flex-direction: column;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.itemname{
    color: var(--NestMart-TextHeading, #253D4E);
    font-family: Quicksand;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px;
}
.Amount{
    color: var(--NestMart-Text-Muted, #B6B6B6); 
    font-family: Lato;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
}



</style>