package cn.nanami52.warehouse.global;

import cn.nanami52.warehouse.exception.NoAuthException;
import cn.nanami52.warehouse.exception.NoLoginException;
import cn.nanami52.warehouse.exception.StandardError;
import cn.nanami52.warehouse.myEnum.HttpResponseCode;
import cn.nanami52.warehouse.responseEntity.ResponseError;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletResponse;
import javax.validation.UnexpectedTypeException;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * 处理未登录异常
     *
     * @param e
     * @param response
     * @return
     */
    @ExceptionHandler(NoLoginException.class)
    @ResponseBody
    public ResponseError handleNoLoginException(NoLoginException e, HttpServletResponse response) {
        ResponseError responseError = new ResponseError();
        responseError.setCode(HttpResponseCode.ERROR_REQUEST_401);
        responseError.setMessage(e.getMessage());
        response.setStatus(HttpResponseCode.ERROR_REQUEST_401);
        return responseError;
    }

    /**
     * 处理无权限异常
     *
     * @param e
     * @param response
     * @return
     */
    @ExceptionHandler(NoAuthException.class)
    @ResponseBody
    public ResponseError handleNoAuthException(NoAuthException e, HttpServletResponse response) {
        ResponseError responseError = new ResponseError();
        responseError.setCode(HttpResponseCode.ERROR_REQUEST_403);
        responseError.setMessage(e.getMessage());
        response.setStatus(HttpResponseCode.ERROR_REQUEST_403);
        return responseError;
    }

    /**
     * 处理不带任何注解的参数绑定校验异常
     *
     * @param e
     * @return
     */
    // @ExceptionHandler(BindException.class)
    // @ResponseBody
    // public String handleBingException(BindException e) {
    //     String errorMsg = e.getBindingResult().getAllErrors()
    //             .stream()
    //             .map(objectError -> ((FieldError) objectError).getField() + ((FieldError) objectError).getDefaultMessage())
    //             .collect(Collectors.joining(","));
    //     //"errorMsg": "name不能为空,age最小不能小于18"
    //     return errorMsg;
    // }

    /**
     * 处理 @RequestBody参数校验异常
     *
     * @param e
     * @return
     */
    @ExceptionHandler({MethodArgumentNotValidException.class, BindException.class})
    @ResponseBody
    public ResponseError handleMethodArgumentNotValidException(MethodArgumentNotValidException e, HttpServletResponse response) {
        String errorMsg = e.getBindingResult().getAllErrors()
                .stream()
                .map(objectError -> ((FieldError) objectError).getField() + ((FieldError) objectError).getDefaultMessage())
                .collect(Collectors.joining(","));
        ResponseError responseError = new ResponseError();
        responseError.setCode(HttpResponseCode.ERROR_REQUEST_400);
        responseError.setMessage(errorMsg);
        response.setStatus(HttpResponseCode.ERROR_REQUEST_400);
        return responseError;
    }


    @ExceptionHandler({StandardError.class, Exception.class})
    @ResponseBody
    public ResponseError handleDefaultException(Exception e, HttpServletResponse response) {
        String errorMsg = e.getMessage();
        ResponseError responseError = new ResponseError();
        responseError.setCode(HttpResponseCode.ERROR_REQUEST_500);
        responseError.setMessage(errorMsg);
        response.setStatus(HttpResponseCode.ERROR_REQUEST_500);
        return responseError;
    }


}
