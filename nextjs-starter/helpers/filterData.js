export function filterApi(data) {
    return data.map(each => {
        const show = each.show;
        const regex = /(<p[^>]+?>|<p>|<\/p>|<b[^>]+?>|<b>|<\/b>)/gi
        return ({
            id: show.id || '',
            name: show.name || '',
            img: show.image.medium || '',
            firstAired: show.premiered || '',
            rating: show.rating.average || 'None found',
            sum: show.summary.replace(regex, '') || ''
        });
    });
};

export function sortByRating(data) {
    const arr = data.data;
    return arr.sort((a, b) => a.rating - b.rating)
};

export function sortByRelease(data) {
    const arr = data.data;
    return arr.sort((a, b) => Date.parse(a.firstAired) - Date.parse(b.firstAired));
};