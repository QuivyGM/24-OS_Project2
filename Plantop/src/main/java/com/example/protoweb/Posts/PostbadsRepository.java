package com.example.protoweb.Posts;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostbadsRepository extends JpaRepository<Postbads, Integer> {
	public boolean existsByUserIdAndPostId(int ac, int pt);

}
