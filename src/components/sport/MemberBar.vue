<template>
  <div class="member-bar row no-gutters">
    <div class="logo col-1">
      <img src="@/assets/images/logo/sm-logo.svg" alt="okada shop" />
    </div>
    <router-link to="/" tag="a" class="member col-5 text-dark" >Z622 (飛向宇宙)</router-link>
    <div class="message col-6 text-dark">
      <ul class="d-flex list-unstyled">
        <li class="pr-2">
          體彩額度:
          <span class="text-basic">10,000</span>
        </li>
        <li class="pr-2">
          體彩額度:
          <span class="text-basic">10,000</span>
        </li>
        <li class="pr-2">
          體彩額度:
          <span class="text-basic">10,000</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted: () => {
    $(".message").marquee();
  }
};
</script>

