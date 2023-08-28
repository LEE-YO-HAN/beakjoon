# Self Feed

### 테스트코드는 모두 맞췄지만, 효율성 테스트에서 출력 크기 초과로 실패한 코드

```javascript

function solution(k, room_number) {
    let custumers = room_number.length
    let answer = [];
    let set = new Set()
    for(let i=0;i<custumers;i++){
        let checkIn = room_number[i]
        if(!set.has(checkIn)){
            set.add(checkIn)
            answer.push(checkIn)
            continue;
        }
        for(let j=checkIn;j<k;j++){
            if(!set.has(j)){
                set.add(j)
                answer.push(j)
                break;
            }
        }
    }
    return answer
}

```

- 방 배정 여부를 빠르게 확인하기 위해 Set을 사용
- 정답 제출 시 문제의 테스트코드들은 모두 해결에 성공했으나, 이후 효율성 테스트에서 출력 크기 초과라는 에러를 발생시키며 실패
- 입력값이 몇 개가 되든 answer 배열은 배정된 방들을 모두 갖고 있어야 하므로, answer 배열의 문제는 아니라고 판단.

### 정답 코드

```javascript

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

```

- set 대신, 키:값을 저장하고 삽입 순서를 기억하는 map으로 변경([참조-모던자바스크립트 튜토리얼](https://ko.javascript.info/map-set))
- 가독성을 위해 2중 반복문을 재귀로 변환
- 예상과 같이 answer 배열에 들어가는 값은 이전 코드와 동일하게 정답값을 그대로 출력할 수 있음
- 효율성 테스트에서 출력 크기 초과의 문제가 발생하지 않아 정답으로 처리됨
