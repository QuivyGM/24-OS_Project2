package com.example.protoweb.Plants;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantsRepository extends JpaRepository<Plants, Integer> {
	public Plants findFirstByOrderById();
	public List<Plants> findTop4ByOrderByAvgRatingDesc();
	public List<Plants> findTop15ByOrderByAvgRatingDesc();
}
