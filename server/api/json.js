// 这时候我们就写了一个 /api/json的中间件
// 中间件支持动态路由,给文件名[] 例子 /api/[val].js
// 文件支持以 get post 作为后缀名, 表示此api中间件只接受get / post 请求
// server/api/test.post.ts

export default defineEventHandler(async (event) => {
    // 请求的url
    // console.log('New request: ' + event.node.req.url)
    
    // 请求的方法
    //  console.log('New request: ' + event.node.req.method)

    // 让 nuxt 服务器请求别的服务器的数据
    const res = await $fetch("http://localhost:8018/api/json")

    // console.log('res', res);

    return res
})