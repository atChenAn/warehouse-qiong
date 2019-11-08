package cn.nanami52.test;

import cn.nanami52.warehouse.entity.User;
import cn.nanami52.warehouse.utils.digest.AESUtils;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Map;

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

    @Test
    public void TestAES() throws Exception {
        String data = "Hello,和风七月";
        String key = "1234567891123456";

        String encryptData = AESUtils.encrypt(data, key);
        System.out.println(encryptData);

        String decryptData = AESUtils.decrypt(encryptData.toLowerCase(), key);
        System.out.println(decryptData);
    }

    @Test
    public void TestJSON() {
        User user = new User();
        user.setId("32432");
        user.setNickName("沉谙");

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String s = objectMapper.writeValueAsString(user);
            System.out.println(s);
            Map map = objectMapper.readValue(s, Map.class);
            System.out.println(map);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }


    }

}
