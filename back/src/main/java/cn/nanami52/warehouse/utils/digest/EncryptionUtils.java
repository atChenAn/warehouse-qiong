package cn.nanami52.warehouse.utils.digest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Component
public class EncryptionUtils {

    private static String passwordSalt;

    @Value("${custom.passwordSalt}")
    public void setPasswordSalt(String passwordSalt) {
        EncryptionUtils.passwordSalt = passwordSalt;
    }

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
