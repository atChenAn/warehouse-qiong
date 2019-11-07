package cn.nanami52.warehouse.exception;

public class NoLoginException extends Exception {

    public NoLoginException() {
        super("您尚未登陆");
    }

}
