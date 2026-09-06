#Have to update 
playlists = [
  [
        {
      'trackId': "trk101",
      'artist': "Velvet Comet",
      'title': "Crimson Afterglow",
      'votes': 5,
      'bpm': 122
    },
    {
      'trackId': "trk101",
      'artist': "Velvet Comet",
      'title': "Crimson Afterglow",
      'votes': 5,
      'bpm': 122
    },
    {
      'trackId': "trk102",
      'artist': "Neon Harbor",
      'title': "Static Horizon",
      'votes': 2,
      'bpm': 108
    },
    {
      'trackId': "trk103",
      'artist': "Lunar Arcade",
      'title': "Midnight Frequency",
      'votes': 4,
      'bpm': 128
    }
  ],
  [
    {
      'trackId': "trk201",
      'artist': "Solar Echo",
      'title': "Glass Skyline",
      'votes': 3,
      'bpm': 115
    },
    {
      'trackId': "trk202",
      'artist': "Velvet Comet",
      'title': "Satellite Hearts",
      'votes': 6,
      'bpm': 124
    }
  ]
]
def flattenPlaylists(playlists):
  copy_playlists = copy.deepcopy(playlists)
  if not isinstance(playlists, list):
    return []
  flattened_playlists = []
  for i in range(len(copy_playlists)):
    for j in range(len(copy_playlists[i])):
      current_track = copy_playlists[i][j]
      current_track['source'] = [i, j]
      flattened_playlists.append(current_track)
  return flattened_playlists

def scoreTracks(tracks):
  copy_tracks = copy.deepcopy(tracks)
  updated_tracks = []
  for i in range(len(copy_tracks)):
    current_track = copy_tracks[i]
    score = current_track['votes'] * 10 - abs(current_track['bpm'] - 120)
    current_track['score'] = score
    updated_tracks.append(current_track)
  return updated_tracks

def dedupeTracks(tracks):
  unique_tracks = []
  unique_ids = set()
  for track in tracks:
    if not track['trackId'] in unique_ids:
      unique_ids.add(track['trackId'])
      unique_tracks.append(track)
  return unique_tracks

def enforceArtistQuota(tracks, quota):
  artistQuota = {}
  finalTracks = []
  for track in tracks:
    if not (track['artist'] in artistQuota):
      artistQuota[track['artist']] = 0
    if artistQuota[track['artist']] < quota:
      finalTracks.append(track)
      artistQuota[track['artist']] += 1
  return finalTracks

def buildSchedule(tracks):
  scheduleTracks = []
  for i in range(len(tracks)):
    curr = {'slot':i+1, 'trackId':tracks[i]['trackId']}
    scheduleTracks.append(curr)
  return scheduleTracks

def remixPlaylist(tracks, maxQuota):
  flattendPlaylists = flattenPlaylists(tracks)
  scoredTracks = scoreTracks(flattendPlaylists)
  dedupedTracks = dedupeTracks(scoredTracks)
  enforcedArtistQuota = enforceArtistQuota(dedupedTracks, maxQuota)
  return buildSchedule(enforcedArtistQuota)

rp = remixPlaylist(playlists, 1)
print(rp)
  

                    
