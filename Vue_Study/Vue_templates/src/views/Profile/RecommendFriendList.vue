<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="card">
      <div class="upper">
        <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid">
      </div>
      <div class="user text-center">
        <div class="profile">
          <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80">
        </div>
      </div>
      <div class="mt-5 text-center">
        <h4 class="mb-0">{{friend.username}}</h4>
        <span class="text-muted d-block mb-2">{{friend.region}}</span>
        <button class="btn btn-primary btn-sm follow">Follow</button>
        <div class="d-flex justify-content-between align-items-center mt-4 px-4">
          <div class="stats">
            <h6 class="mb-0">Followers</h6>
            <span>8,797</span>
          </div>
          <div class="stats">
            <h6 class="mb-0">Projects</h6>
            <span>142</span>
          </div>
          <div class="stats">
            <h6 class="mb-0">Ranks</h6>
            <span>129</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendFriendList',
  props: {
    friend: Object,
  }
}
</script>

<style scoped>

body{
background-color:#545454;
font-family: "Poppins", sans-serif;
font-weight: 300;
}

.container{
height: 100vh;
}

.card{
width: 380px;
border: solid aliceblue 1px;
border-radius: 15px;
padding: 8px;
background-color: #fff;
position: relative;
height: 370px;
}

.upper{
height: 100px;
}

.upper img{
width: 100%;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
}

.user{
position: relative;
}

.profile img{
height: 80px;
width: 80px;
margin-top:2px;
}

.profile{
position: absolute;
top:-50px;
left: 38%;
height: 90px;
width: 90px;
border:3px solid #fff;
border-radius: 50%;
}

.follow{
border-radius: 15px;
padding-left: 20px;
padding-right: 20px;
height: 35px;
}

.stats span{

font-size: 29px;
}
</style>