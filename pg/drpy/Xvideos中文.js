var rule ={
            title: 'xvideos4中文',
            host: 'https://dpmnmv.xvideos4.hair/cn/home/web/',
            url: 'https://dpmnmv.xvideos4.hair/vodtype/fyclass-fypage.html',
            searchUrl: 'https://dpmnmv.xvideos4.hair/s/**/page/fypage.html',
            class_parse: 'body&&.hulian,0&&.nav-container&&.item-wrap&&ul&&li;a&&Text;a&&href;.*/(.*?)/',
// class_name:'国产&传媒&日韩&动漫&欧美&吃瓜',    
 //class_url:'guochan&chuanmei&rihan&dongman&oumei&chigua',      
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
            推荐: '.a_clist&&.aclcon1&&.tv-r&&.aj_item_commend&&li;a&&title;img&&src;img&&alt;a&&href',
            double: true,
            一级: '.select_con&&.tv-list&&.v-pic;a&&title;img&&src;img&&alt;a&&href',
            二级:'*',
            搜索: '*',
        }