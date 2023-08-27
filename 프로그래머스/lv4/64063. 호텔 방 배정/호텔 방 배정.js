// 테스트코드는 모두 맞췄지만, 효율성 테스트에서 출력 크기 초과로 실패
// function solution(k, room_number) {
//     let custumers = room_number.length
//     let answer = [];
//     let set = new Set()
//     for(let i=0;i<custumers;i++){
//         let checkIn = room_number[i]
//         if(!set.has(checkIn)){
//             set.add(checkIn)
//             answer.push(checkIn)
//             continue;
//         }
//         for(let j=checkIn;j<k;j++){
//             if(!set.has(j)){
//                 set.add(j)
//                 answer.push(j)
//                 break;
//             }
//         }
//     }

//     return answer
// }

// 다른 풀이
function solution(k, room_number) {
    let answer = [];
    let rooms = new Map(); 

    function findEmptyRoom(room) {
        if (!rooms.has(room)) { 
            rooms.set(room, room + 1); 
            return room;
        } else {
            let nextRoom = findEmptyRoom(rooms.get(room)); 
            rooms.set(room, nextRoom + 1); 
            return nextRoom;
        }
    }

    for (let i = 0; i < room_number.length; i++) {
        let requestedRoom = room_number[i];
        let assignedRoom = findEmptyRoom(requestedRoom);
        answer.push(assignedRoom);
    }

    return answer;
}