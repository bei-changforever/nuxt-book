export default defineEventHandler(async (event) => {
  // 该文件只接受post请求

  // 请求的url
//   console.log("New request: " + event.node.req.url);

  // 请求的方法
//   console.log("New request: " + event.node.req.method);

  // 处理body
//   const body = await readBody(event)

  // 处理上传的文件
//   const bodyFile = await readMultipartFormData(event)

//   console.log(body);

  // 获取请求的query
  //   const query = getQuery(event)

  // 返回指定状态码
  // setResponseStatus(event, 202)

  // 更多的服务器交互方法查看 nitro 自带模块 h3 文档 https://github.com/unjs/h3

  return { data: "请求成功" };
});
