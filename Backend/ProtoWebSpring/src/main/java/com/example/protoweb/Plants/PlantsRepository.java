package com.example.protoweb.Plants;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.protoweb.Posts.Posts;

public interface PlantsRepository extends JpaRepository<Plants, Integer> {
	public Plants findFirstByOrderById();
	public List<Plants> findTop4ByOrderByAvgratingDesc();
	public List<Plants> findTop15ByOrderByAvgratingDesc();
	public List<Plants> findAllByOrderByAvgratingDesc();
	public List<Plants> findAllByOrderByIdDesc();
}
