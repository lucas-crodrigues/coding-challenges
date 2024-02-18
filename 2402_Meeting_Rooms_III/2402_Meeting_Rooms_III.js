/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  let roomTime = new Array(n).fill(0);
  let roomFreq = new Array(n).fill(0);

  for (let [start, end] of meetings) {
      let freeRoom = roomTime.findIndex(end => end <= start)

      if (freeRoom < 0) {
          freeRoom = roomTime.indexOf(Math.min(...roomTime));
      }

      roomFreq[freeRoom]++;

      let lastMeetingEnd = roomTime[freeRoom];
      let meetingEnd = (start < lastMeetingEnd) ? (lastMeetingEnd - start) + end : end;

      roomTime[freeRoom] = meetingEnd;
  }

  return roomFreq.indexOf(Math.max(...roomFreq))
};
