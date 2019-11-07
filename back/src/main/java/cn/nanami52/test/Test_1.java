package cn.nanami52.test;

import org.junit.Test;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Test_1 {

    @Test
    public void TestMD5() {
        String test = "000000";
        MessageDigest md5 = null;
        try {
            md5 = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        md5.update(test.getBytes());

        System.out.println(new BigInteger(1, md5.digest()).toString(16));

    }

}
