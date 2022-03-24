package com.bi4all.room4all.repositories;

import com.bi4all.room4all.domain.Rooms;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Rooms, Integer>{
	
}
