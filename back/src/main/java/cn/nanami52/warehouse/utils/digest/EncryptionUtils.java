package cn.nanami52.warehouse.utils.digest;

import org.springframework.beans.factory.annotation.Value;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class EncryptionUtils {

    @Value("${custom.passwordSalt}")
    private static String passwordSalt;

    private EncryptionUtils() {
    }

    public static String encodePasswordHash(String password) {
        return EncryptionUtils.md5(password + EncryptionUtils.passwordSalt);
    }

    public static String md5(String data) {
        MessageDigest md5 = null;
        try {
            md5 = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        md5.update(data.getBytes());
        return new BigInteger(1, md5.digest()).toString(16);
    }


}
