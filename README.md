# Room4All - Bi4All bootcamp

This is a small booking manager for meeting rooms.  
It has been created for a Bootcamp with Bi4All in Lisbon from 23 to 25 Mars 2022.

## How to install

### Backend
Work in progress

### Frontend
- Run `git checkout frontend`
- Install `nodejs` and `npm`
- In the `frontend` directory run `npm install vuex@next --save`
- In the `frontend` directory run `npm install axios --save`
- In the `frontend` directory run `npm run serve`

### State of the art
- Frontend is working for data visualisation with a `mock_rooms` manually imported JSON object from `src/util/helper.js`
- Backend handles some API requests but still misses debugging and queries clear definition

## API requests
Work in progress
- GET rooms/yyyy-mm-dd
- POST meetings/add body: meeting
