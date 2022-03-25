package com.bi4all.room4all.resources;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import com.bi4all.room4all.domain.Rooms;
import com.bi4all.room4all.services.RoomService;

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
@RequestMapping(value = "/rooms")
public class RoomsResource {

	@Autowired
	private RoomService service;
	
	@GetMapping
	public ResponseEntity<List<Rooms>> find_all()
	{
		List<Rooms> list = service.find_all();
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> findById(@PathVariable Integer id)
	{
		Rooms obj = service.find_by_id(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping(value = "/add")
	public ResponseEntity<Void> insert(@Valid @RequestBody Rooms obj)
	{
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("./{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}
