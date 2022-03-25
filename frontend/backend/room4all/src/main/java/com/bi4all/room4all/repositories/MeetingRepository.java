package com.bi4all.room4all.repositories;

import com.bi4all.room4all.domain.Meeting;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetingRepository extends JpaRepository<Meeting, Integer> {
	
}
