// YOUR-DOMAIN.com is a placeholder.
// Replace it with your real domain after Part 2.

const BASE_URL = "https://monochrome.tf";

export async function search(query) {
    const response = await fetch(
        "https://itunes.apple.com/search?term=" + encodeURIComponent(query) + "&media=music&limit=25"
    );
    const data = await response.json();
    return data.results.map(track => ({
        title:   track.trackName,
        artist:  track.artistName,
        artwork: track.artworkUrl100,
        preview: track.previewUrl
    }));
}
