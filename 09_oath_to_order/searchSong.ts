export default function searchSong(sheetbook: any[], song: string): string[] {
    let list_of_songs: string[] = [];

    for (const item of sheetbook) {
        let song_start: string = song.toUpperCase();
        let full_song: string = item.sheet.toUpperCase();
        if(song_start === full_song[0]) {
            list_of_songs.push(item);
        }
    }

    return list_of_songs;
}
