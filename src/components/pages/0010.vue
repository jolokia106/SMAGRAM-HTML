<script lang="ts">
</script>
<style>
.btn {}

.btn-orive {
  background-color: #998641 !important;
  border-color: #998641 !important;
  color: #FFFFFF !important;
  width: 100%;
}

.btn-orive:hover {
  background-color: #99864140 !important;
  border-color: #99864140 !important;
  color: #FFFFFF !important;
}

.orive {
  color: #998641;
  font-weight: 800;
}

.img-container {
  display: flex;
  /* flexbox */
  justify-content: center;
  /* 水平方向 */
  align-items: center;
  /* 垂直方向 */
}
</style>

<template>
  <div class="content-body">
    <div class="container">
      <div class="login-logo">
        SMAGRAM
      </div>
      <div class="column-2">ID(メールアドレス)</div>
      <div class=""><input name="" type="" class="form-control" placeholder="Email" value=""></div>
      <div class="column-2">パスワード</div>
      <div class=""><input name="" type="" class="form-control" placeholder="Password"></div>
      <div class="d-grid gap-2 mt-4">
        <a href='/0020' role="button"><router-link to='/0020' class='btn btn-orive'>ログイン</router-link></a>
      </div>

      <div class="img-container mt-4">
        <img class="mr-3" src="/src/assets/image/!.svg" />
        <a class="orive" href="">パスワードをお忘れの方</a>
      </div>
    </div>
  </div>
</template>

<style>
@import 'bootstrap';
</style>