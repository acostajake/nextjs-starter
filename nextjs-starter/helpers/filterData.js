export function filterApi(data) {
    return data.reduce((allShows, each) => {
        const { show: { id, name, image, premiered, rating, summary }} = each;
        const regex = /(<p[^>]+?>|<p>|<\/p>|<b[^>]+?>|<b>|<\/b>)/gi
        return [...allShows, {
            id: id || '',
            name: name || '',
            img: image.medium || '',
            firstAired: premiered || '',
            rating: rating.average || 'Not found',
            sum: summary.replace(regex, '') || ''
        }];
    }, []);
};

export function sortByRating(data) {
    const arr = data.data;
    return arr.sort((a, b) => a.rating - b.rating)
};

export function sortByRelease(data) {
    const arr = data.data;
    return arr.sort((a, b) => Date.parse(a.firstAired) - Date.parse(b.firstAired));
};