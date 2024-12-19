package com.example.protoweb.Comments;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentbadsRepository extends JpaRepository<Commentbads, Integer> {
	public boolean existsByUserIdAndCommentId(int ac, int pt);

}
