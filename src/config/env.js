// 配置编译环境和线上环境之间的切换

let baseUrl = 'cgs-exam';
let codeUrl = `${baseUrl}/code`
const env = process.env
if (env.NODE_ENV == 'development') {
    baseUrl = baseUrl + ``; // 开发环境地址
} else if (env.NODE_ENV == 'production') {
    baseUrl = baseUrl + ``; //生产环境地址
} else if (env.NODE_ENV == 'test') {
    baseUrl = baseUrl + ``; //测试环境地址
}

//上传单个文件的路径
let uploadOneUrl = baseUrl+"/file/uploadFile"


export {
    baseUrl,
    codeUrl,
    env,
    uploadOneUrl
}
