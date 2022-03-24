package com.bi4all.room4all.dto;

import java.io.Serializable;

public class MeetingDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private Integer id;
	private String name;
	private String email;
	private String nb_phone;
	private String date;
	private Integer hours_start;
	private Integer hours_end;
	private String notes;
	private Integer room_id;

	public MeetingDTO() {
	}
	
	public MeetingDTO(Integer id, String name, String email, String nb_phone, String date, Integer hours_start,
			Integer hours_end, String notes, Integer room_id) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.nb_phone = nb_phone;
		this.date = date;
		this.hours_start = hours_start;
		this.hours_end = hours_end;
		this.notes = notes;
		this.room_id = room_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNb_phone() {
		return nb_phone;
	}

	public void setNb_phone(String nb_phone) {
		this.nb_phone = nb_phone;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Integer getHours_start() {
		return hours_start;
	}

	public void setHours_start(Integer hours_start) {
		this.hours_start = hours_start;
	}

	public Integer getHours_end() {
		return hours_end;
	}

	public void setHours_end(Integer hours_end) {
		this.hours_end = hours_end;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Integer getRoom_id() {
		return room_id;
	}

	public void setRoom_id(Integer room_id) {
		this.room_id = room_id;
	}
}
