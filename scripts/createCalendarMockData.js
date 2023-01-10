const fs = require('fs');
const HOUR_TO_MS = 60 * 60 * 1000;
const ID_LENGTH = 10;

function generateId() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < ID_LENGTH; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const data = [];

// This is around 2000 events
for (let year = 2010; year <= 2030; ++year) {
  for (let month = 0; month <= 11; ++month) {
    for (let day = 1; day <= 31; day += Math.random() > 0.5 ? 2 : 1) {
      for (let hour = 9; day <= 19; day += Math.random() > 0.5 ? 3 : 2) {
        const start = new Date(year, month, day, hour, 0).valueOf();
        const end = start + HOUR_TO_MS * (Math.random() > 0.5 ? 0.5 : 1);
        const id = generateId();
        data.push({id, start, end});
      }
    }
  }
}

fs.writeFileSync('demo/src/screens/incubatorScreens/IncubatorCalendarScreen/MockData.ts', `export const data = ${JSON.stringify(data)};`);