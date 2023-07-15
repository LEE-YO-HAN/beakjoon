function solution(genres, plays) {
//     let sum = {}
    
//     genres.forEach((v,i)=>{
//         if(sum[v]===undefined) {
//             sum[v] = plays[i]
//         } else {
//             sum[v] += plays[i]
//         }
//     })
    
//     const sumKeys = Object.keys(sum)
//     const sumValues = Object.values(sum)
//     const sumArr = sumKeys.map((v,i)=>{
//         return [v,sumValues[i]]
//     }).sort((a,b)=>b[1]-a[1])
    
//     let albums = {}
    
//     sumArr.forEach(v=>{
//         albums[v[0]] = []
//     })
    
//     let albumArr = genres.map((v,i)=>{
//         return [v,i,plays[i]]
//     })
    
//     albumArr.sort((a,b)=>b[2]-a[2])
    
//     albumArr.forEach((v,i)=>{
//         albums[v[0]].push(v[1])
//     })
    
//     let result = ""
//     Object.values(albums).forEach(v=>{
//         v.forEach((v,i)=>{
//             if(i<2){
//                 result+=v
//             }
//         })
//     })
//     result = result.split("").map(Number)
//     return result;
    
    let sum = {};
    let songInfo = {};

    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        if (!sum[genre]) {
            sum[genre] = play;
        } else {
            sum[genre] += play;
        }

        if (!songInfo[genre]) {
            songInfo[genre] = [];
        }

        songInfo[genre].push({
            id: i,
            play: play
        });
    }

    const sortedGenres = Object.keys(sum).sort(
        (a, b) => sum[b] - sum[a]
    );

    const result = [];

    sortedGenres.forEach(v => {
        songInfo[v].sort((a, b) => {
            if (a.play === b.play) {
                return a.id - b.id;
            }
            return b.play - a.play;
        });

        const selectedSongs = songInfo[v].slice(0, 2).map(song => song.id);
        result.push(...selectedSongs);
    });

    return result;
}