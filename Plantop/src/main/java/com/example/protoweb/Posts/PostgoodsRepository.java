package com.example.protoweb.Posts;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostgoodsRepository extends JpaRepository<Postgoods, Integer> {
	public boolean existsByUserIdAndPostId(int ac, int pt);
}
