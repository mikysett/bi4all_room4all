package com.bi4all.room4all;

import java.text.SimpleDateFormat;
import java.util.Arrays;

import com.bi4all.room4all.domain.Meeting;
import com.bi4all.room4all.domain.OpenHours;
import com.bi4all.room4all.domain.Rooms;
import com.bi4all.room4all.repositories.MeetingRepository;
import com.bi4all.room4all.repositories.OpenHoursRepository;
import com.bi4all.room4all.repositories.RoomRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Room4allApplication implements CommandLineRunner{

	@Autowired
	private MeetingRepository meetingRepository;
	@Autowired
	private RoomRepository roomRepository;
	@Autowired
	private OpenHoursRepository openHoursRepository;

	public static void main(String[] args) {
		SpringApplication.run(Room4allApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception 
	{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		Rooms room1 = new Rooms(null, "10", 5, "Qualuer coisa");
		Rooms room2 = new Rooms(null, "11", 5, "Qualuer coisa");

		OpenHours oHours1 = new OpenHours(null, sdf.parse("2022-04-30"), 200, 400, room1);
		OpenHours oHours2 = new OpenHours(null, sdf.parse("2022-05-01"), 200, 400, room1);
		OpenHours oHours3 = new OpenHours(null, sdf.parse("2022-04-30"), 200, 400, room2);
		OpenHours oHours4 = new OpenHours(null, sdf.parse("2022-05-01"), 200, 400, room2);

		Meeting meet1 = new Meeting(null, "Nicolas", "qualquer@qualquer.com", 2, sdf.parse("2022-04-30"), 630, 750, "qualquer coisa", room1);
		Meeting meet2 = new Meeting(null, "Daniel", "qualquer@qualquer.com", 2, sdf.parse("2022-04-30"), 750, 870, "qualquer coisa", room2);

		room1.setMeeting(Arrays.asList(meet1));
		room2.setMeeting(Arrays.asList(meet2));

		room1.setOpen_hours(Arrays.asList(oHours1, oHours2));
		room2.setOpen_hours(Arrays.asList(oHours3, oHours4));

		roomRepository.saveAll(Arrays.asList(room1, room2));
		openHoursRepository.saveAll(Arrays.asList(oHours1, oHours2, oHours3, oHours4));
		meetingRepository.saveAll(Arrays.asList(meet1, meet2));
	}
}
