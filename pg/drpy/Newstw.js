var rule = {
  title: '',
  host: 'https://bad.news',
  url: '/fyclass/page-fypage',
  searchUrl: '/search/type-porn/q-**/page-fypage',
  homeUrl:'/tag/porn/sort-score/t-all',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_name:'日本AV&长视频&短视频',
  class_url:'av&tag/porn&tag/long-porn',
  play_parse: true,
  lazy: $js.toString(() => {
    // let str=fetch(input,{redirect:false}).trim().split('\n').pop()
    // console.log("jdjdhhd==="+str)
    // if(str.includes("mp4")||str.includes("m3u8")){
    
    // input="https://video.twimg.com"+str
    // }else{
    // input
    // }
  }),
  推荐: '*',
  double: true,
  一级: '.hasMedia:gt(0):lt(26);h3&&Text;.my-videos&&poster;.ct-time&&Text;.my-videos&&data-source',
  二级: '*',
  搜索: '*',
}