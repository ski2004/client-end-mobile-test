<template>
    <div class="container">
        <Language />

        <div class="text-center">
            <img src="/assets/images/logo/logo-img.svg" alt="">
        </div>
        <form  class="form-signin">
            <div class="py-4">
                <div class="form-group">
                    <input type="text" class="form-control"  name="uname" required autofocus>
                    <div class="invalid-feedback">
                        無此帳號，請重新輸入
                    </div>
                </div>
                <div class="form-group">
                    <input type="password" id="password" class="form-control"  required>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="agree">
                    <label class="custom-control-label" for="agree">我同意遵守<a href="#">我同意遵守 </a></label>
                </div>
            </div>
            <!--<div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">{{ $t("login.rememberMe") }}</label>
            </div>-->
            <div class="pb-1">
                <div class="form-group">
                    <button type="button" class="btn btn-basic btn-block text-light">
                        <i class="fas fa-mobile-alt"></i> 手機登入
                    </button>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-outline-basic btn-block">
                        <i class="fas fa-desktop"></i> 電腦登入
                    </button>
                </div>
            </div>
        </form>
        <div class="text-center text-secondary fz-1">v2.02222</div>
    </div>
</template>

<style>
    .container{
        background: green ;
    }
</style>
