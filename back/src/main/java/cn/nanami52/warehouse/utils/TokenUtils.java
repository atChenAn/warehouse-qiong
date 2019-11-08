package cn.nanami52.warehouse.utils;

import cn.nanami52.warehouse.entity.User;
import cn.nanami52.warehouse.exception.StandardError;
import cn.nanami52.warehouse.utils.digest.AESUtils;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.lang.reflect.InvocationTargetException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Map;

@Component
public class TokenUtils {

    private static String tokenAESKey;


    @Value("${custom.tokenAESKey}")
    public void setTokenAESKey(String tokenAESKey) {
        TokenUtils.tokenAESKey = tokenAESKey;
    }

    private TokenUtils() {
    }

    /**
     * 创建数据签名token
     *
     * @param data           目标数据
     * @param validitySecond token有效期
     * @return
     */
    public static String createUserToken(Object data, int validitySecond) {
        long timeMillis = System.currentTimeMillis();
        long validity = timeMillis + validitySecond * 1000;

        try {
            Map<String, String> describe = BeanUtils.describe(data);
            describe.put("validity", validity + "");
            String jsonData = CommonUtils.toJson(describe);
            return AESUtils.encrypt(jsonData, tokenAESKey).toLowerCase();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (NoSuchPaddingException e) {
            e.printStackTrace();
        } catch (BadPaddingException e) {
            e.printStackTrace();
        } catch (StandardError standardError) {
            standardError.printStackTrace();
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Map<String, String> resolveToken(String token) {
        long timeMillis = System.currentTimeMillis();
        try {
            String decryptData = AESUtils.decrypt(token, tokenAESKey);
            Map<String, String> map = CommonUtils.jsonToMap(decryptData);
            if (null != map) {
                Long validity = Long.valueOf(map.get("validity"));
                if (validity >= timeMillis) {
                    return map;
                }
            }
            map.put("timeout", "timeout");
            return map;
        } catch (StandardError standardError) {
            standardError.printStackTrace();
        } catch (NoSuchPaddingException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (BadPaddingException e) {
            e.printStackTrace();
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        }
        return null;
    }

}
