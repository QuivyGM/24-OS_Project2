package com.example.protoweb.Comments;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentgoodsRepository extends JpaRepository<Commentgoods, Integer> {
	public boolean existsByUserIdAndCommentId(int ac, int pt);

}
