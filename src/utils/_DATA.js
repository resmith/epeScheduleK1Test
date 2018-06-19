let scheduleK1s = {
  Nhieu: {
    id: "Nhieu_k1",
    name: "Nhieu_k1",
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    tweets: ['8xf0y6ziyjabvozdd253nd', 'hbsc73kzqi75rg7v1e0i6a', '2mb6re13q842wu8n106bhk', '6h5ims9iks66d4m7kqizmv', '3sklxkf9yyfowrf0o1ftbb'],
  },
}


export function _getScheduleK1s () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...scheduleK1s}), 1000)
  })
}
