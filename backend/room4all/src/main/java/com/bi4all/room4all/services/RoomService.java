package com.bi4all.room4all.services;

import java.util.List;
import java.util.Optional;

import com.bi4all.room4all.domain.Meeting;
import com.bi4all.room4all.domain.Rooms;
import com.bi4all.room4all.repositories.RoomRepository;
import com.bi4all.room4all.services.exceptions.DataExceptionIntegrity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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

	public void delete(Integer id)
	{
		try {
			roomRepository.deleteById(id);
		} catch(DataIntegrityViolationException e) {
			throw new DataExceptionIntegrity("Connot delete");
		}
	}
	
	public Rooms updateMeeting(Rooms obj, Meeting newMeeting)
	{
		obj.addMeeting(newMeeting);
		return roomRepository.save(obj);
	}
}
