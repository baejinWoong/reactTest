package com.example.demo.Filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

@WebFilter(urlPatterns = "/query")
public class TestFilterAnotation implements Filter{

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

		if(servletRequest instanceof HttpServletRequest){
            String url = ((HttpServletRequest) servletRequest).getRequestURI().toString();
            String queryString  = ((HttpServletRequest) servletRequest).getQueryString();
            System.out.println("url::"+url);
            System.out.println("url::"+queryString);
        }
        System.out.println("Do filter");
        filterChain.doFilter(servletRequest,servletResponse);
	}

	@Override
	public void destroy() {
	}


}
