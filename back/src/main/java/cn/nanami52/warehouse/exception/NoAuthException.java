package cn.nanami52.warehouse.exception;

public class NoAuthException extends Exception {

    public NoAuthException() {
        super("您不具备相应的权限");
    }

}
