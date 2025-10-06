# schedulize: smarter automated study plans

a small web app that turns assignments and routine into a calendar-backed study plan. time is allocated with simple linear/log models and synced to google calendar.

add assignments (name, type, due, estimate), set your daily routine, generate, and push to calendar. no accounts yet.

## install

```bash
# backend
cd backend
npm install
# .env: MONGO_URI=...  PORT=5000
node server.js
```

# frontend

```
cd ../frontend
npm install
# .env: REACT_APP_GOOGLE_CLIENT_ID=...  REACT_APP_GOOGLE_API_KEY=...
npm start
```

## use

1. add assignments
2. set sleep/wake/meals
3. generate plan
4. authorize google calendar sync

## api (backend)

* `POST /api/assignments` → create assignment
* `GET /api/assignments` → list assignments

react + react-big-calendar, node/express, mongoose/mongodb, google calendar + identity apis
