package com.bi4all.room4all.services;

import java.util.List;
import java.util.Optional;

import com.bi4all.room4all.domain.Rooms;
import com.bi4all.room4all.repositories.RoomRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomService {

	@Autowired
	private RoomRepository roomRepository;

	public List<Rooms>  find_all() 
	{
		return roomRepository.findAll();
	}

	public Rooms find_by_id(Integer id)
	{
		Optional<Rooms> obj = roomRepository.findById(id);
		return obj.orElse(null);
	}

	public Rooms insert(Rooms obj)
	{
		obj.setId(null);
		return roomRepository.save(obj);
	}
}
