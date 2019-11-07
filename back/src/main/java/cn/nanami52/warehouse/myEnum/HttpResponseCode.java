package cn.nanami52.warehouse.myEnum;

public class HttpResponseCode {

    private HttpResponseCode() {
    }

    /**
     * 请求参数不符合规范，服务端认为客户端出现了错误,但不能明确是哪种错误
     */
    public static int ERROR_REQUEST_400 = 400;
    /**
     * 用户认证信息缺失或者不正确，导致服务器无法处理请求
     */
    public static int ERROR_REQUEST_401 = 401;
    /**
     * 服务器理解请求的含义，但没有权限执行此请求
     */
    public static int ERROR_REQUEST_403 = 403;
    /**
     * 服务器没有找到对应的资源
     */
    public static int ERROR_REQUEST_404 = 404;
    /**
     * 服务器不支持请求行中的method方法
     */
    public static int ERROR_REQUEST_405 = 405;
    /**
     * 请求的 URI 超出服务器能接受的最大长度
     */
    public static int ERROR_REQUEST_414 = 414;

    /**
     * 服务器内部错误
     */
    public static int ERROR_REQUEST_500 = 500;
    /**
     * 服务器不支持实现请求所需要的功能
     */
    public static int ERROR_REQUEST_501 = 501;
    /**
     * 服务器资源尚未准备好处理当前请求，触发了服务器限制
     */
    public static int ERROR_REQUEST_503 = 503;


}
