package com.example.protoweb.Comments;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentsRepository extends JpaRepository<Comments, Integer> {
	public List<Comments> findAllByOrderByLikesDesc();

}
