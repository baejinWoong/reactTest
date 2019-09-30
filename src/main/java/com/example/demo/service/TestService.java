package com.example.demo.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.UserBeen;
import com.example.demo.mapper.UserMapper;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;


@Service
public class TestService {

	@Autowired
	UserMapper userMapper;

	public List<UserBeen> getAll() throws Exception{

		return userMapper.getAll();
	}

	public JSONObject getjson() throws Exception {

		JSONArray jsonArr = JSONArray.fromObject(userMapper.getAll());
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userOj", jsonArr);

		JSONObject jsonObject = JSONObject.fromObject(map);

		System.out.println("map-"+map);
		System.out.println("json-"+jsonObject);

		return jsonObject;
	}

	public JSONObject getUser(int getCode , String session) throws Exception {

		JSONObject jsonObject = new JSONObject();
		jsonObject.put("returnCode", getCode);
		jsonObject.put("session", session);

		System.out.println("json-"+jsonObject);

		return jsonObject;
	}
}