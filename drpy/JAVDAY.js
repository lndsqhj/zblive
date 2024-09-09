var rule = {
    title: 'JAVDAY',
    host: 'https://javday.tv/',
    url: '/category/fyclass/p/fypage.html',
    searchUrl: '/search/**.html',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'accept-language': 'zh-CN,zh;q=0.9',
        'referer': 'https://javday.tv/'
    },
   class_name: '新品上作&有碼&國產情色&无码&糖心&萝莉&hongkongdoll',
    class_url: 'new-release&censored&chinese-av&uncensored-leaked&txvlog&luolisheus&hongkongdoll',
    play_parse: true,
    lazy: $js.toString(() => {
        let html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        let link = html.url;
        input = {parse: 0, url: link, header: rule.headers};
    }),
    一级: 'body&&.videoBox;a&&Text;.videoBox-cover&&style;.number&&Text;a:eq(0)&&href',
    二级: '*',
    搜索: '.search-item .col-17;h1&&Text;img&&src;;a:eq(0)&&href',
}