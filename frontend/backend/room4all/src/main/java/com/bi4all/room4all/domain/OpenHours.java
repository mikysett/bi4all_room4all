package com.bi4all.room4all.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class OpenHours implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private Date date;
	private Integer open_hours;
	private Integer close_hours;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "room_id")
	private Rooms room;


	public OpenHours() {
	}

	public OpenHours(Integer id, Date date, Integer open_hours, Integer close_hours, Rooms room) {
		this.id = id;
		this.date = date;
		this.open_hours = open_hours;
		this.close_hours = close_hours;
		this.room = room;
	}

	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	public Integer getOpen_hours() {
		return open_hours;
	}
	
	public void setOpen_hours(Integer open_hours) {
		this.open_hours = open_hours;
	}
	
	public Integer getClose_hours() {
		return close_hours;
	}
	
	public void setClose_hours(Integer close_hours) {
		this.close_hours = close_hours;
	}
	
	public Rooms getRoom() {
		return room;
	}
	
	public void setRoom(Rooms room) {
		this.room = room;
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
		OpenHours other = (OpenHours) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
