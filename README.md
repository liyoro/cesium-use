# vue2-vite-admin

[vue-cesium-v2](https://github.com/zouyaoji/vue-cesium-v2) 版本的使用，作者不再维护 `vue 2` 版本，所以不用 `npm` 的方式引用，直接把代码放 `src` - `components` - `vue-cesium` 里面了。

本项目使用的 `Cesium` 版本 `1.105`

项目基于 `pnpm` + `vite` + `vue2` + `Cesium`

## Project setup

```
pnpm install
```

### Compiles and hot-reloads for development

```
pnpm run serve
```

### Compiles and minifies for production

```
pnpm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 环境

```
nvm use v16.19.1
```

### Variable '' is already declared in the upper scope.

```
'vue/no-template-shadow':'off',
```

## iconfont

### 引入

下载的文件，放`assets`-`iconfont`目录下面

### 配置

在`main.js`里面配置

```
import "@/assets/iconfont/iconfont.css"
```

### 使用

xxx 是图标名称

```
<i class='iconfont xxx' />
```

## 代码总览

```
|-- public
	|-- data	// mock接口数据
|-- src
	|-- api	// 接口
	|-- assets	// 图片、字体、iconfont
    |-- components 	// 组件
    |-- config		// 全局配置文件
    |-- directive		// 指令
    |-- filters		// vue全局过滤器
    |-- layout		// 项目总体布局文件
    |-- plugins	// 主要是element配置
    |-- router		// 项目路由配置
    |-- store		// 项目vuex配置
    |-- styles 	// css配置
    |-- utils 		// 工具类、请求
    |-- views		//
        |-- bigscreen   // 大屏页面，响应式
|-- main.js    // 全局配置
```

```
// eslint-disable-next-line no-unused-vars
```

## 关于 eslint

不喜欢严格的代码规范，可以关闭

文件 `vite.config.js`

注释

```
import eslintPlugin from 'vite-plugin-eslint'
```

```
eslintPlugin({
    include: ['src/**/*.js', 'src/**/*.vue'],
    exclude: ['node_modules/**'],
    cache: false // 禁用 eslint 缓存
})
```
