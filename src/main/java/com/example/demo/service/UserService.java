package com.example.demo.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.UserBeen;
import com.example.demo.mapper.UserMapper;

import net.sf.json.JSONArray;

@Service
public class UserService {

	@Autowired
	UserMapper userMapper;

	/*------------------Login Test----------------------------*/

	public int getUserStack(String userId, String userPass) throws Exception {

		List<UserBeen> testList = userMapper.getUser(userId, userPass);

		System.out.println(testList);

		JSONArray jsonArr = JSONArray.fromObject(userMapper.getUser(userId, userPass));
		
		
		if(jsonArr.size() != 0) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("userOj", jsonArr);
			

			System.out.println("---------------User map Test--------------------");
			System.out.println("mapSize =>"+map.size());

			System.out.println("map-"+map);
			
			
			return 200;

		} else {
			System.out.println("hello");
			return 403;
		}
	}

}
