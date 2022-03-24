package com.bi4all.room4all.resources;

import java.net.URI;
import java.text.ParseException;
import java.util.List;

import com.bi4all.room4all.domain.Meeting;
import com.bi4all.room4all.dto.MeetingDTO;

import javax.validation.Valid;
import com.bi4all.room4all.services.MeetingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping(value = "/meeting")
public class MeetingResource {

	@Autowired
	private MeetingService service;

	@GetMapping
	public ResponseEntity<List<Meeting>> find_all()
	{
		List<Meeting> list = service.find_all();
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> find_by_id(@PathVariable Integer id)
	{
		Meeting obj = service.find_by_id(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@PostMapping
	public ResponseEntity<Void> insert(@Valid @RequestBody MeetingDTO objDTO) throws ParseException
	{
		Meeting obj = service.fromDTO(objDTO);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("./{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}
