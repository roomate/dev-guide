# 项目开发规范指南
 为什么需要项目开发规范
* 高效编码 - 避免了过多的选择造成的『决策时间』浪费；
* 风格统一 - 最大程度统一了开发团队成员代码书写风格和思路，代码阅读起来如出一辙；
* 减少错误 - 减小初级工程师的犯错几率。
* 提高技术团队的凝聚力、一致性和生产效率。


# 目录
* [公用规范](#公用规范)
    * [文档编写规范](#文档编写规范)
    * [命名规范](#命名规范)
    * [注释](#注释)
    * [环境说明](#环境说明)
    * [配置信息与环境变量](#配置信息与环境变量)
    * [版本控制工具](#版本控制工具)
        * [SVN](#SVN)
        * [GIT](#GIT)
            * [Git - 简明指南](https://rogerdudler.github.io/git-guide/index.zh.html)
            * [Git - 常用操作](https://github.com/521xueweihan/git-tips)
    * [数据库说明](#数据库说明)
        * [PD设计]()
* [前端](#前端)
    * [风格指南](https://github.com/lin-123/javascript)
    * [应用目录](#应用目录)
    * [mock数据](#mock数据)
    * [测试](#测试)
        * [e2e]()
        * [unit](https://vue-test-utils.vuejs.org/zh/)
    * [设计模式](#设计模式)
* [后台](#特性)
    * [编码规范]()
        * [PSR-1/PSR-2](https://github.com/PizzaLiu/PHP-FIG)
    * [设计理念]()
        * [基础架构]()
            * Middleware
                * 请求访问控制中间件
                * cors跨域资源共享
                * 身份验证
                * 日志中间件
            * Model
                * 关联
                * 预加载
                * 查询筛选器
                * 访问器 
                * 修改器
                * 事件
            * Service
            * Controller
        * [Restful](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)
        * [GraphQL](http://graphql.cn/)
        
    * [鉴权与用户认证](#)
        * [OAuth2](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
        * [JWT](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)
        * [Token]()
    * [单元测试]()
        * [phpunit]()
        * [MSTest]()
    * [日志系统(PSR-3)](https://github.com/PizzaLiu/PHP-FIG)
* [测试](#特性)
* [开发环境部署]()
    * [前端]()
    * [后台]()
* [协作](#)
    * [腾讯文档]()
* [工具](#)
    * Lantern(翻墙)
    * [POSTMAN](https://www.getpostman.com/apps)
    * RedisDesktopManager(Redis可视化工具)
    * Nacicat Premium(数据库管理工具)
    * PowerDesigner(数据库设计工具)
* [资源](#资源)
    * [Mock.js](http://mockjs.com/)
    * [Easy Mock](https://www.easy-mock.com/)
    * [Swagger](https://swagger.io/)
    * [GraphQL](http://graphql.cn/)
    * [Selenium](http://www.testclass.net/selenium_python/)
    * 优秀专栏
        * [阿里云云栖社区](https://www.jianshu.com/u/12532d36e4da)
        * [猿论](https://zhuanlan.zhihu.com/c_159682850)
        * [PHP / Laravel / 全栈](https://zhuanlan.zhihu.com/fsdhub)
        * [WEB前端知识总结](https://zhuanlan.zhihu.com/p/25334672)
    
---
# 公用规范
前后端公用规范
## 文档编写规范
### 说明
每一个项目都 必须 包含一个 readme.md 文件，readme 里书写这个项目的简单信息。作用主要有两个，一个是团队新成员可从此文件中快速获悉项目大致情况，另一个是部署项目时可以作为参考。
### 能愿动词
为了避免歧义，文档大量使用「能愿动词」，对应的解释如下：
* 必须（Must） - 只能这样子做，请无条件遵循，没有别的选项；
* 绝不（Must Not）- 严令禁止，在任何情况下都不能这样做；
* 应该（Should） - 强烈建议这样做，但是不强求；
* 不应该（Should Not） - 强烈建议不这样做，但是不强求；
* 可以（May） - 选择性高一点，在这个文档内，此词语使用较少；
### 1. 排版规范
文档页面排版 ***必须*** 遵循 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines) ，在此基础上：
* 中文文档请使用全角标点符号；
* ***必须*** 遵循 Markdown 语法，勿让代码显示错乱；
* 原文中的双引号（" "）请代换成中文的引号（『』符号怎么打出来见 这里）。
* 所有的「***加粗***」和「[链接]()」都需要在左右保持一个空格。

### 2. README文档
readme.md 文档 应该 包含以下内容：
* 「项目概述」- 介绍说明项目的一些情况，类似于简单的产品说明，简单的功能描述，项目相关链接等，500 字以内；
* 「运行环境」- 运行环境说明，系统要求等信息；
* 「开发环境部署/安装」- 一步一步引导说明，保证项目新成员能最快速的，没有歧义的部署好开发环境；
* 「服务器架构说明」(后端)- 最好能有服务器架构图，从用户浏览器请求开始，包括后端缓存服务使用等都描述清楚（主要体现为软件的使用），配合「运行环境」区块内容，可作为线上环境部署的依据；
* 「代码上线」(后端)- 介绍代码上线流程，需要执行哪些步骤；
* 「扩展包说明」- 表格列出所有使用的扩展包，还有在哪些业务逻辑或者用例中使用了此扩展包；
* 「自定义 Artisan 命令列表」(PHP)- 以表格形式罗列出所有自定义的命令，说明用途，指出调用场景；
* 「队列列表」(后台)- 以表格形式罗列出项目所有队列接口，说明用途，指出调用场景。


### 3.目录架构文档(前端)
*  [DEMO](https://github.com/eiixy/dev-guide/blob/master/best-practice/front-end/docs/catalog.md)

### 4.公共组件文档(前端)
*  [DEMO](https://github.com/eiixy/dev-guide/blob/master/best-practice/front-end/docs/components/commons/table.md)




## 命名规范
* 目录命名 **应该**统一小写
* 文件命名 **应该**使用下划线命名
* 类的命名 **必须**使用大驼峰命名
* 接口命名 **必须**使用大驼峰命名，并且首字母必须是I
* 属性/方法命名 **必须**使用小驼峰命名
* 常量命名 **必须**全都使用大写字母，单词之间用下划线分割，并且指出该常量完整含义

## 注释

[注释那些事儿：前端代码质量系列文章(一)](https://www.jianshu.com/p/b789e98a0ff9)

[代码整洁之道（一）最佳实践小结](https://www.jianshu.com/p/248c228c6731)

[代码整洁之道（二）优雅注释之道](https://www.jianshu.com/p/54ed2821c81a)



## 环境说明
* local - 本地开发环境
* Staging - 线上开发环境，对应git的test分支
* production - 线上生产环境，对应git的master分支

## 配置信息与环境变量
问题说明

假如我们有个『API接口地址』的变量，有以下几种方法实现：

1. 硬代码，直接写死。- ❌ 可维护性低
2. 写死在 config/index.js 文件中。 - ❌ 无法区分环境进行配置
3. 根据 .env 中的环境信息配合 config/index.js 动态读取。- ✅ 最佳实践

代码示例
.env 文件中设置：
```conf
VUE_APP_ENV = development
VUE_APP_DEV_API = http://localhost:8080
```
config/index.js 文件中设置：
```javascript
const config = {
    api_url:{
        development: process.env.VUE_APP_LOCAL_API,
        production: 'http://demo.com'
    }
}
export default {
    api_url:config.api_url[process.env.VUE_APP_ENV],
    //  ....
}
// 获取配置
config.api_url
```
在此统一规定：所有程序配置信息 必须 通过 config 来读取，所有的 .env 配置信息 必须 通过 config 来读取，绝不 在配置文件以外的范围使用 env。

这样做主要有以下几个优势：
1. 定义分明，config 是配置信息，.env 只是用来区分不同环境；
2. 代码健壮性， config 在 env 之上多出来一个抽象层，会使代码更加健壮，更加灵活。

## 版本控制工具

### SVN
* trunk 主分支 日常开发进行的地方。
* branches 分支  一些阶段性的release版本，这些版本是可以继续进行开发和维护的，则放在branches目录中。又比如为不同用户客制化的版本，也可以放在分支中进行开发。
* tags 一般是只读的，这里存储阶段性的发布版本，只是作为一个里程碑的版本进行存档。

### GIT

主分支
* master 分支
* develop 分支

辅助性分支
* 功能分支
* 发布分支
* 热修复分支

每个开发人员一个独立完成相应的功能模块，每次完成相关功能后push到develop分支

每个issue一个分支，解决后push到develop分支

## 数据库说明


# 前端

## [编码规范](https://codeguide.bootcss.com/)
## [TGuide](http://tguide.qq.com/main/base.htm)





# 资源
## [GraphQL](http://graphql.cn/)
一种用于 API 的查询语言，后台只需要定义实现数据模型及映射关系，前端可自定义编写所需的数据进行查询

1.建议项目目前一部分功能使用GraqhQL实现，如经常重复使用的资源，公共资源，配置数据等

2.前端需要什么数据后端只会返回需要用到的数据字段，因为控制数据的是前端，而不是服务器。这样前端可避免跟后台去要接口

3.GraphQL查询不仅能够获得资源的属性，还能沿着资源间引用进一步查询。还可以把多个资源通过一次请求就获取前端所需的所有数据。

## [Mock.js](http://mockjs.com/)
Mock.js是一个模拟数据生成器，可帮助前端开发和原型分离后端进度，并减少一些单调，特别是在编写自动化测试时。

1.前端不需要后台返回数据，可根据文档中约定的数据格式自行编写mock规则生成JSON数据。

2.后台接口完成后，可根据前端编写的mock规则校验接口数据是否符合规范。

3.当功能改动时可利用编写的mock规则做接口的回归测试。

4.不需要修改既有代码，就可以拦截 Ajax 请求，返回模拟的响应数据。

> [Easy Mock](https://www.easy-mock.com/) 是一个可视化，并且能快速生成 模拟数据 的持久化服务
## [Selenium](http://www.testclass.net/selenium_python/)
Selenium也是一个用于Web应用程序测试的工具。Selenium测试直接运行在浏览器中，就像真正的用户在操作一样。支持的浏览器包括IE、Mozilla Firefox、Mozilla Suite等。这个工具的主要功能包括：测试与浏览器的兼容性——测试你的应用程序看是否能够很好得工作在不同浏览器和操作系统之上。测试系统功能——创建衰退测试检验软件功能和用户需求。支持自动录制动作和自动生成。Net、Java、Perl等不同语言的测试脚本。Selenium 是ThoughtWorks专门为Web应用程序编写的一个验收测试工具。
