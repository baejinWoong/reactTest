package com.example.demo.controller;



import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.been.TestSessionBeen;
import com.example.demo.service.TestService;
import com.example.demo.service.UserService;

import net.sf.json.JSONObject;

@Controller
public class TestController {

	@Autowired
	TestService testService;

	@Autowired
	UserService userService;
	
	
	ArrayList<TestSessionBeen> sessionArr = new ArrayList<>();

	/*---------------JSON Test---------------------------*/
	@RequestMapping("/jsonTest")
	public @ResponseBody JSONObject testjson() throws Exception{

		return testService.getjson();
	}

	@RequestMapping("/test")
	public @ResponseBody String query(
			HttpServletRequest req, HttpSession session) throws Exception{
		HttpSession mySession = req.getSession();
		mySession.setAttribute("useId", "Test");
		return "query";
	}
	
	@RequestMapping("/query2")
	public @ResponseBody String query2(HttpServletRequest req, HttpSession session) throws Exception{
		HttpSession mySession = req.getSession();
		mySession.getAttribute("useId");
		return "query";
	}

	/*-------------------Login Test-------------------------------*/
	
	
	@RequestMapping("/loginTest")
	public @ResponseBody JSONObject loginTest(
			HttpServletRequest req,HttpServletResponse res,HttpSession session) throws Exception{
		
		HttpSession mySession = req.getSession();
		String userId = req.getParameter("userId");
		String userPass = req.getParameter("userPass");
		
		
		
		int returnCode = userService.getUserStack(userId, userPass);
		
		if(returnCode == 200) {
			

			System.out.println("---------------Login Test--------------------");
			System.out.println("getSessonAttribute : "+userId);
			mySession.setAttribute("userId", userId);
			
	
			System.out.println("session : "+mySession.getId());
			
			System.out.println("userId : "+session.getAttribute("userId"));
			

		}

		return testService.getUser(returnCode, mySession.getId());
	}
	
	
	@RequestMapping("/getCookie")
	public @ResponseBody String getCookie (
		HttpServletRequest req,HttpServletResponse res,HttpSession session) {
		System.out.println("port : "+req.getHeader("referer")+"  host : "+req.getRemoteHost());
		HttpSession mySession= req.getSession();
		
		
		System.out.println("get UserId From Cookie : "+mySession.getAttribute("userId"));
		
		return "";
	}
	
	
	@RequestMapping(value = "/getPost", method = RequestMethod.POST)
	public @ResponseBody String testPost (@RequestBody String string) {
		
		
		System.out.println(string);
		
		return "hello";
	}
	
	
	
	
	
}
