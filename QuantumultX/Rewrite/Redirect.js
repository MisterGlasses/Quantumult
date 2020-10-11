hostname = link.zhihu.com, oia.zhihu.com, www.3k8.com

# 去掉知乎跳转第三方网站时的中间确认页面
;^https://link\.zhihu\.com/\?target=(https?)?(%3A|:)?(\/\/|%2F%2F)?(.*?)(&source.*|\/?)$ url 307 https://$4
^https://link\.zhihu\.com/\?target=(https?)?(%3A|:)?(\/\/|%2F%2F)?(.*?)(&source.*)?$ url 307 https://$4

# 知乎专栏底部推荐阅读文章直接打开（屏蔽跳转应用商店）
^https://oia\.zhihu\.com url 307 https://zhuanlan.zhihu.com

# 爱Q生活网跳转到移动版
^https?:\/\/(www.)?3k8\.com\/ url 307 https://wap.3k8.com/
