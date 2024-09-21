var rule ={
            title: 'AV快递',
            host: 'https://hdg.avkd6.world/cn/home/web/',
            url: 'https://hdg.avkd6.world/cn/home/web/index.php/vod/type/id/fyclass/page/fypage.html',
            searchUrl: 'https://hdg.avkd6.world/cn/home/web/index.php/vod/search/page/fypage/wd/**.html',
            class_parse: '.stui-header__menu&&ul&&li;a&&Text;a&&href;.*/(.*?)/',
 //class_name:'国产&传媒&日韩&动漫&欧美&吃瓜',    
// class_url:'guochan&chuanmei&rihan&dongman&oumei&chigua',      
            searchable: 2,
            quickSearch: 0,
            filterable: 0,
            headers: {
                'User-Agent': 'PC_UA',
            },
            play_parse: true,
                                  lazy: `js:
let kcode=jsp.pdfh(request(input).match(/<iframe(.*?)</iframe>/)[1]);
let kurl=kcode.match(/url=(.*?)\"/)[1];
if (/m3u8|mp4/.test(kurl)) {
input = { jx: 0, parse: 0, url: kurl }
} else {
input = { jx: 0, parse: 1, url: rule.parse_url+kurl }
}`, 
            limit: 6,
            推荐: '*',
            double: true,
            一级: '.stui-vodlist&&.stui-vodlist__item;a&&title;.a&&data-original;a&&Text;a&&href',
            二级:'*',
            搜索: '*',
        }