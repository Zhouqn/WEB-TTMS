<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">Messages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <!--<div class="tab-content">-->
      <!--<div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>-->
      <!--<div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>-->
      <!--<div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>-->
      <!--<div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>-->
    <!--</div>-->
    <div class="row">
    <div class="col-3 nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <router-link class="nav-link active" id="v-pills-home-tab" data-toggle="pill" to="/test" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</router-link>
      <router-link class="nav-link" id="v-pills-profile-tab" data-toggle="pill" to="/home" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</router-link>
      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
    </div>
    <div class="col-9 tab-content" id="v-pills-tabContent">
      <router-view></router-view>
      <!--<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">123</div>-->
      <!--<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">456</div>-->
      <!--<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">789</div>-->
      <!--<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">abc</div>-->
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
