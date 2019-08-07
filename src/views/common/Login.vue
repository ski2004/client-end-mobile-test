<template>
  <div class="container" :lang="this.$store.state.lang" >
    <div class="text-right py-3">
      <button type="button" class="btn btn-link p-0" @click="lang()">
        <svg class="lang-icon" aria-hidden="true">
          <use xlink:href="#js-China" />
        </svg>
      </button>
    </div>
    <!-- <Common-Mask :active.sync="active" :default_style="false" width="90%"  view="Login-Language" ></Common-Mask> -->
    <div class="text-center">
      <img src="/assets/images/logo/logo-img.svg" alt />
    </div>
    <form class="form-signin">
      <div class="py-4">
        <div class="form-group">
          <input type="text" class="form-control " :class="{'is-invalid':warn.account}" v-model="form.account"  :placeholder="$translate.get('請輸入帳號')" required autofocus />
          <div class="invalid-feedback">{{ '請輸入帳號' | translate }}</div>
        </div>
        <div class="form-group">
          <!-- <input type="password" class="form-control" :class="{'is-invalid':warn.password}" v-model="form.password" :placeholder="$translate.get('請輸入密碼')" />
          <div class="invalid-feedback">{{ '請輸入密碼' | translate }}</div> -->
          <input type="password" class="form-control" :class="{'is-invalid':errors.has('password')}" v-model="form.password" :placeholder="$translate.get('請輸入密碼')" v-validate="'required|min:6|between:10,20'" name="password" />
          <div class="invalid-feedback"  v-if="errors.has('password')" >{{ errors.first('password') | errors(errors.firstRule('password')) }}</div>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="agree" class="custom-control-input" :class="{'is-invalid':warn.agree}" v-model="form.agree" />
          <label class="custom-control-label" for="agree">
            {{ '我同意遵守' | translate }}
            <a href="#">{{ '服務規則' | translate }}</a>
          </label>
        </div>
      </div>

      <div class="pb-1">
        <div class="form-group">
          <button type="button" @click="login()" class="btn btn-basic btn-block text-light">
            <i class="fas fa-mobile-alt"></i>
            {{ '手機登入' | translate }}
          </button>
        </div>
        <div class="form-group">
          <button type="button"  @click="login()" class="btn btn-outline-basic btn-block">
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
