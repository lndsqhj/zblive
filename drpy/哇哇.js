var rule = {
    title: '哇哇',
    host: 'https://www.wvod.tv/',
    url: 'https://www.wvod.tv/vodshow/id/fyclass/page/fypage.html',
    
    searchUrl: 'https://www.wvod.tv/vodsearch.html?wd=**&submit=',
        //class_parse:'body&&.wrap&&.menu&&dd;a&&Text;a&&href;.*/(.*?).html',
    class_name: '电影&电视剧&综艺&动漫&午夜',
 class_url: '20&21&22&23&91',
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
            lazy: '',
    double: true,
   推荐: '*',
    一级: '.hl-vod-list&&li;a&&title;a&&data-original;.remarks&&Text;a&&href',
    二级: {
                "title": "h2&&Text",
                "img": ".hl-dc-pic&&.hl-item-thumb&&data-original",
                "desc": ".clearfix&&Text",
                "content": "",
                "tabs": ".hl-plays-from a",
                //"lists": ".ewave-playlist-content:eq(#id) li"
           lists: '.hl-list-wrap&&li', },
     搜索: 'body&&li;a&&title;a&&href;.remarks&&Text;;a&&data-original',
}