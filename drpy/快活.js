var rule = {
    title: '快活',
    host: 'https://www.444ssd.com/',
    url: 'https://www.444ssd.com/fyclass/list_fypage.html',
    
    searchUrl: 'https://www.444ssd.com/search.html?q=**',
        //class_parse:'body&&.wrap&&.menu&&dd;a&&Text;a&&href;.*/(.*?).html',
    class_name: '亚洲av&自拍偷拍&欧美&3D动画&熟女人妻&丝袜制服&主播直播& SM另类&亚洲性爱&偷拍自拍&成人卡通&欧美性爱&经典三级&乱伦熟女&另类变态',
 class_url: 'yazhouav&zipaitoupai&oumeiav&3ddonghua&shunvrenqi&siwazhifu&zhubozhibo&smlinglei&yazhouxingai&toupaizipai&chengrenkatong&oumeixingai&jingdiansanji&luanlunrenqi&lingleibiantai',
    searchUrl: '',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    //class_parse: '#uk-nav-header li;a&&Text;a&&href;/(.*?)\.html',
    cate_exclude: '',
    play_parse: true,
    //lazy: muban.mx.lazy,
    lazy: $js.toString(() => {
            let link = request(input).match(/playUrl=\"(http.*?m3u8)\"/)[1];
            input = {parse: 0, url: link, header: rule.headers}
    }),
    double: true,
   推荐: '*',
    一级: 'body&&.col5&&dt;a&&title;img&&data-original;;a&&href',
    二级: '*',
     搜索: '.s-tab-main&&li;.js-tongjic&&title;img&&src;.hint&&Text;a&&href;.pay&&Text',
}