package com.bi4all.room4all.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Rooms implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private Integer max_capacity;
	
	@OneToMany(mappedBy = "room")
	private List<OpenHours> open_hours = new ArrayList<>();
	private String notes;
	
	@OneToMany(mappedBy = "room", cascade = CascadeType.REMOVE, orphanRemoval = true)
	private List<Meeting> meeting = new ArrayList<>();
	
	
	public Rooms() {
	}
	
	public Rooms(Integer id, String name, Integer max_capacity, String notes) {
		this.id = id;
		this.name = name;
		this.max_capacity = max_capacity;
		this.notes = notes;
	}
	
	public List<OpenHours> getOpen_hours() {
		return open_hours;
	}

	public void setOpen_hours(List<OpenHours> open_hours) {
		this.open_hours = open_hours;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
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
	
	public Integer getMax_capacity() {
		return max_capacity;
	}
	
	public void setMax_capacity(Integer max_capacity) {
		this.max_capacity = max_capacity;
	}
	
	public String getNotes() {
		return notes;
	}
	
	public void setNotes(String notes) {
		this.notes = notes;
	}
	
	public List<Meeting> getMeeting() {
		return meeting;
	}

	public void setMeeting(List<Meeting> meeting) {
		this.meeting = meeting;
	}

	public void addMeeting(Meeting newMeeting) {
		meeting.add(newMeeting);
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
		Rooms other = (Rooms) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
