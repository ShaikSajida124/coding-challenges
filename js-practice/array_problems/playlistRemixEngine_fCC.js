const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(array) {
  const tracksArray = structuredClone(array);
  const flattenedArray = [];
  if (!Array.isArray(tracksArray)) {
    return flattenedArray;
  }
  for (let i = 0; i < tracksArray.length; i++) {
    for (let j = 0; j < tracksArray[i].length; j++) {
      const currentObject = tracksArray[i][j];
      currentObject['source'] = [i, j];
      flattenedArray.push(currentObject);
    }
  }
  return flattenedArray;
}


function scoreTracks(tracks) {
  const tracksArray = [];
  for (let i = 0; i < tracks.length; i++) {
    const current = tracks[i];
    const score = current['votes'] * 10 - Math.abs(current['bpm'] -120);
    current['score'] = score;
    tracksArray.push(current);
  }
  return tracksArray;
}


function dedupeTracks(tracks) {
  const uniqueTracks = [];
  const uniqueIds = new Set();
  for (let i = 0; i < tracks.length; i++) {
    if (!uniqueIds.has(tracks[i].trackId)) {
      uniqueIds.add(tracks[i].trackId);
      uniqueTracks.push(tracks[i]);
    }
  }
  return uniqueTracks;
}

function enforceArtistQuota(tracks, maxOccurrence) {
  const artistOccurrences = {};
  const tracksArray = [];
  for (let i = 0; i < tracks.length; i++) {
    if (!(tracks[i].artist in artistOccurrences)) {
      artistOccurrences[tracks[i].artist] = 0;
    }
    if (artistOccurrences[tracks[i].artist] < maxOccurrence) {
      tracksArray.push(tracks[i]);
      artistOccurrences[tracks[i].artist] += 1;
    }
  }
  return tracksArray;
}


function buildSchedule(tracks) {
  const tracksArray = [];
  for (let i = 0; i < tracks.length; i++) {
    const current = {slot:i+1, trackId:tracks[i].trackId};
    tracksArray.push(current);
  }
  return tracksArray;
}


function remixPlaylist(tracks, maxOccurrence) {
  const func1 = flattenPlaylists(tracks);
  const func2 = scoreTracks(func1);
  const func3 = dedupeTracks(func2);
  const func4 = enforceArtistQuota(func3, maxOccurrence);
  return buildSchedule(func4);
}
const funcoutput = remixPlaylist(playlists, 1);
console.log(funcoutput);
