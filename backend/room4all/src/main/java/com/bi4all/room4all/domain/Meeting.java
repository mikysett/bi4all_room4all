package com.bi4all.room4all.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Meeting implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String email;
	private Integer nb_people;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date date;
	private Integer hours_start;
	private Integer hours_end;
	private String notes;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "room_id")
	private Rooms room;
	
	public Meeting() {
	}

	public Meeting(Integer id, String name, String email, Integer nb_people, Date date, Integer hours_start, Integer hours_end, String notes,
			Rooms room) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.nb_people = nb_people;
		this.date = date;
		this.hours_start = hours_start;
		this.hours_end = hours_end;
		this.notes = notes;
		this.room = room;
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

	public Integer getNb_people() {
		return nb_people;
	}

	public void setNb_people(Integer nb_people) {
		this.nb_people = nb_people;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Integer getHours_start() {
		return hours_start;
	}

	public void setHours_start(Integer hours_start) {
		this.hours_start = hours_start;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Rooms getRoom() {
		return room;
	}

	public void setRoom(Rooms room) {
		this.room = room;
	}
	
	public Integer getHours_end() {
		return hours_end;
	}

	public void setHours_end(Integer hours_end) {
		this.hours_end = hours_end;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Meeting other = (Meeting) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	
}
