package com.bi4all.room4all.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;

import com.bi4all.room4all.domain.Meeting;
import com.bi4all.room4all.dto.MeetingDTO;
import com.bi4all.room4all.repositories.MeetingRepository;
import com.bi4all.room4all.services.exceptions.ObjectNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MeetingService {

	@Autowired
	private MeetingRepository meeting_repository;

	@Autowired
	private RoomService roomService;


	public List<Meeting> find_all()
	{
		return meeting_repository.findAll();
	}

	public Meeting find_by_id(Integer id)
	{
		Optional<Meeting> obj = meeting_repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Object not found!! Id: " + id + ", Tipo: " + Meeting.class.getName()));
	}

	public Meeting insert(Meeting obj)
	{
		obj.setId(null);
		return meeting_repository.save(obj);
	}

	public Meeting fromDTO(MeetingDTO objDTO) throws ParseException
	{
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		return new Meeting(null, objDTO.getName(), objDTO.getEmail(), objDTO.getNb_phone(), sdf.parse(objDTO.getDate()), objDTO.getHours_start(), objDTO.getHours_end(), objDTO.getNotes(), roomService.find_by_id(objDTO.getId()));
	}
}
