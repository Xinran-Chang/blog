<template>
  <div class="container">
    <div class="img">
        <img :src="img">
    </div>
    <div class="title">{{title}}</div>
    <div class="content">
        {{content}}
    </div>
    <button type="button" class="button">READ ME +</button>
  </div>
</template>

<script>
export default {
    props:{
        img:{type:String,required:true},
        title:{type:String,required:true},
        content:{type:String,required:true}
    }
};
</script>
<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
}

.container .img {
  width: 100%;
  height: 300px;
  background: #000;
  border-radius: 10px;
}

.title {
  margin: 20px 0;
  font-weight: 700;
  font-size: 25px;
  line-height: 25px;
}
.content p {
  font-family: Georgia, "Times New Roman", Times, serif;
  line-height: 25px;
  color: #555555;
}
.button {
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  line-height: 46px;
  width: 150px;
  height: 46px;
  border: 1px solid #f47e00;
}
</style>