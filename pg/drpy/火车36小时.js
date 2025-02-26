var rule = {
    title: '火车36小时',
    host: 'https://www.36huo246che.xyz/topic/',
    url: 'https://www.36huo246che.xyz/vodtype/fyclass-fypage.html',
    searchUrl: 'https://www.36huo246che.xyz/vodsearch/**----------fypage---.html',
       // class_parse:'.nav&&;a&&title;a&&href;.*/(.*?).html',
    class_name: '国产视频&中文字幕&国产传媒&日本有码&日本无码&欧美&强奸乱轮&制服诱惑&直播主播&糖心&动漫&抖音&女优明星&网爆门&伦理三级&AV解说&SM调教&萝莉少女&极品&女同',
   class_url: '6&7&8&9&10&11&12&20&21&22&23&63&24&25&26&30&31&37&32&33',
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
    lazy: $js.toString(() => {
        let html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        let link = html.url;
        input = {parse: 0, url: link, header: rule.headers};
    }),
    double: true,
   //推荐: '*',
    一级: '.vods&&.vod&&;.vod-txt&&Text;img&&data-original;;a&&href',
    //二级: '*',
    二级: {
        title: 'h3&&Text',
        tabs: '',
        lists: '.stui-content__detail&&a:eq(0)',
  },
    搜索: '.s-tab-main&&li;.js-tongjic&&title;img&&src;.hint&&Text;a&&href;.pay&&Text',
}