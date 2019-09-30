package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.example.demo.dto.UserBeen;

public interface UserMapper {
	
	public List<UserBeen> getAll() throws Exception;
	
	public int getUserCount(String userId) throws Exception;
	
	public String getUserPass(String userId) throws Exception;
	
	public List<UserBeen> getUser(
			@Param("userId")String userId,@Param("userPass") String userPass)
					throws Exception;

}
