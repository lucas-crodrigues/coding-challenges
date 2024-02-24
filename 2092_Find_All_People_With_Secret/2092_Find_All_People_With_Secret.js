/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
  let people = [0, firstPerson];
  meetings.sort((a, b) => a[2] - b[2]);
  console.log(meetings)

  for (let [p1, p2, t] of meetings) {
      console.log(people)
      if (people.indexOf(p1) !== -1) people.indexOf(p2) === -1 ? people.push(p2) : true;
      else if (people.indexOf(p2) !== -1) people.indexOf(p1) === -1 ? people.push(p1) : true;
  }

  return people.sort((a, b) => a - b);
};
