var rule ={
            title: '熊猫AV',
            host: 'https://www.nicetv820.cyou/',
            url: 'https://www.nicetv820.cyou/index.php/vod/type/id/fyclass/page/fypage.html',
            searchUrl: 'https://www.nicetv820.cyou/index.php/vod/search/page/fypage/wd/**.html',
            class_name:'中文字幕&日本有码&日本无码&AV解说&cosplay&黑丝诱惑&SWAG&自拍偷拍&激情动漫&网红主播&探花系列&三级伦理&VR视角&国产传媒&素人搭讪&门事件',
  class_url:'1&2&3&4&5&6&7&8&9&10&11&12&13&14&15&16',
  
           // class_parse: 'body&&.gutter-20;a&&Text;a&&href;.*/(.*?).html',
            searchable: 2,
            quickSearch: 0,
            filterable: 0,
            headers: {
                'User-Agent': 'MOBILE_UA',
            },
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: '*',
            double: true,
            一级: 'body&&.video-img-box; a&& href; img&&data-src; img&&alt;;',
            二级: '*',
            搜索: '*',
        }