export default  {
    'Game':{
        1: {title:'體彩',i_class:'fab fa-dribbble', route:'game/sports'},
        2: {title:'Super 彩球',i_class:'far fa-dot-circle', route:''},
        3: {title:'皇家視訊',i_class:'fas fa-dice', route:''},
        4: {title:'BingoBingo',i_class:'fas fa-dharmachakra', route:''},
    },
    'Watch':{
        1: {title:'體育直播',i_class:'fab fa-youtube', a_class: 'liveLink', route:'javascript:;'},
        2: {title:'影視娛樂',i_class:'fas fa-film', route:'###'},
    },
    'Member':{
        1: {title:'會員資料',i_class:'fas fa-user', route:'/member/profile'},
        2: {title:'密碼修改',i_class:'fas fa-lock', route:'/member/resetPwd'},
        3: {title:'明細',i_class:'far fa-list-alt', route:'/history', badge: 10},
        4: {title:'公告',i_class:'fas fa-film', route:'/member/notification', badge: 10},
        5: {title:'繁體中文',i_class:'fas fa-globe', route:'###'},
    },
    'Other':{
        1: {title:'比賽結果',i_class:'fas fa-flag-checkered', route:'/other/result'},
        2: {title:'條款與規則',i_class:'fas fa-feather-alt', route:'/other/rule'},
        3: {title:'盤口對照表',i_class:'fas fa-dna', route:'/other/oddsComp'},
        4: {title:'過關計算器',i_class:'fas fa-calculator', route:'/other/clearanceCalc'},
        5: {title:'賠率格式',i_class:'fas fa-dollar-sign', route:'/other/oddsFormat'},
        6: {title:'切換電腦版',i_class:'fas fa-desktop', route:'###'},
        7: {title:'登出',i_class:'fas fa-sign-out-alt', route:'logout'},
    }
};
