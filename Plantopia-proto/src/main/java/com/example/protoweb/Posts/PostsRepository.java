package com.example.protoweb.Posts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostsRepository extends JpaRepository<Posts, Integer>  {
	public List<Posts> findTopByOrderByAvgRatingDesc();

}
