var rule ={
            title: 'JAVMM',
            host: 'https://www.javmm.cc/',
            url: 'https://www.javmm.cc/index.php/vod/type/id/fyclass/page/fypage.html',
            searchUrl: 'https://www.javmm.cc/index.php/vod/search/class/**/page/fypage.html',
            class_parse: '.navbar-expand-md&&.container&&ul&&li;a&&Text;a&&href;.*/(.*?)/',
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
            一级: '.video-loop&&.row&&.col-6;.infos&&Text;img&&data-src;.duration&&Text;a&&href',
            二级:'*',
            搜索: '*',
        }