<template>
    <div class="page">
        <div class="ind-header fixed-top px-3 py-2 text-light shadow">
            <div class="row border-black-b">
                <div class="col-8 d-flex">
                    <div class="fz-icon-5 pr-3 mt-n1">
                        <i class="far fa-user-circle"></i>
                    </div>
                    <div>
                        <div class="fz-1 text-white">{{ this.user.id }}</div>
                        <h3 class="h6">{{ this.user.name }}</h3>
                    </div>
                </div>
                <div class="col-4 text-right">
                    <div class="ind-announcement-box rounded-circle text-center">
                        <a href="#" class="text-light">
                            <i class="fas fa-bell new-point"></i>
                            <span class="badge badge-danger badge-point"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row border-white-t pt-1 no-gutters">
                <div class="col-8">
                    <h3 class="fz-3 text-center">體彩額度</h3>
                    <div class="row text-center no-gutters">
                        <div class="col-6">
                            <div class="text-black-50 fz-1" style="height: 20px;margin-top:-10px;">05/16</div>
                            <div class="h5">10,000</div>
                        </div>
                        <div class="col-6">
                            <div class="text-black-50 fz-1" style="height: 20px;margin-top: -10px;">05/15</div>
                            <div class="h5 border-black-r border-black-l">10,000</div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <h3 class="fz-3 text-center">皇家額度</h3>
                    <div class="h5 text-center" style="padding-top:10px;">10,000</div>
                </div>
            </div>
        </div>
        <div class="ind-main-content-wrap">
            <div v-for="(item, key, index) in menu" >
                <h3 class="h6 px-3 pt-3">{{ key }}</h3>
                <div class="card rounded-0 border-right-0 border-left-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="(child, index) in item">
                            <a :href="child.route" class="text-dark d-block" :class="child.a_class">
                                <i :class="child.i_class"></i>
                                {{ child.title }} <span v-if="child.badge" class="badge badge-warning">{{ child.badge }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 公告 -->
        <div class="ind-announcement fixed-bottom text-light fz-1">
            <ol class="d-flex">
                <li class="pr-2">最新公告最新公告最新公告最新公告最新公告最新公告最新公告最新公告最新公告</li>
                <li class="pr-2">最新公告最新公告最新公告最新公告最新公告最新公告最新公告最新公告最新公告</li>
            </ol>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .page{
        background:red ;
    }
    .badge-point {
        position: absolute;
        top: 2px;
        right: 14px;
    }

    .badge{
        color: white;
        border-radius: 50%;
    }
</style>
