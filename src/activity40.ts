export const Activity40 = () => {
  function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    let album: Record<string, any> = {
      "artist": artist,
      "title": title
    };

    if (tracks) {
      album["tracks"] = tracks;
    }

    return album;
  }

  console.log(make_album("Dhinchak Pooja", "Selfie mainy le li hai"));
  console.log(make_album("Chahat Fateh Ali Khan", "Lota Lota Bum Bum", 1));
  console.log(make_album("Gauntlet", "Mahesh", 2));
}