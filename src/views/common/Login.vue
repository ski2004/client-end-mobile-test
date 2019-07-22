<template>
  <div class="container">
    <div class="text-right py-3">
      <button type="button" class="btn btn-link p-0" @click="active=!active">
        <svg class="lang-icon" aria-hidden="true">
          <use xlink:href="#js-China" />
        </svg>
      </button>
    </div>
    <Common-Mask :active.sync="active" :background_style="false" width="90%"  view="Login-Language" ></Common-Mask>
    <div class="text-center">
      <img src="/assets/images/logo/logo-img.svg" alt />
    </div>
    <form class="form-signin">
      <div class="py-4">
        <div class="form-group">
          <input type="text" class="form-control" name="uname"  :placeholder="$translate.get('請輸入帳號')" required autofocus />
          <div class="invalid-feedback">{{ '無此帳號，請重新輸入' | translate }}</div>
        </div>
        <div class="form-group">
          <input type="password" id="password" class="form-control" :placeholder="$translate.get('請輸入密碼')" required />
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="agree" />
          <label class="custom-control-label" for="agree">
            {{ '我同意遵守' | translate }}
            <a href="#">{{ '我同意遵守' | translate }}</a>
          </label>
        </div>
      </div>
      <!--<div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">{{ $t("login.rememberMe") }}</label>
      </div>-->
      <div class="pb-1">
        <div class="form-group">
          <button type="button" class="btn btn-basic btn-block text-light">
            <i class="fas fa-mobile-alt"></i>
            {{ '手機登入' | translate }}
          </button>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-outline-basic btn-block">
            <i class="fas fa-desktop"></i> {{ '電腦登入' | translate }}
          </button>
        </div>
      </div>
    </form>
    <div class="text-center text-secondary fz-1">v2.0</div>
  </div>
</template>

<style>
</style>
