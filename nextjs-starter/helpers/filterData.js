import { showsToSearch } from '../lib/shows';

export function filterApi(data) {
    if(!data.length) return [{
        id: '0000',
        name: 'No results found',
        img: 'https://media.giphy.com/media/SUzPI5wAkp6UXMEkok/giphy.gif',
        firstAired: 'n/a',
        rating: 'n/a',
        sum: 'No results found :('
    }]
    return data.reduce((allShows, each) => {
        const { show: { id, name, image, premiered, rating, summary }} = each;
        const regex = /(<p[^>]+?>|<p>|<\/p>|<b[^>]+?>|<b>|<\/b>|<i[^>]+?>|<i>|<\/i>)/gi
        return [...allShows, {
            id: id || '',
            name: name || '',
            img: image && image.medium || '',
            firstAired: premiered || '',
            rating: rating.average || 'Not found',
            sum: summary && summary.replace(regex, '') || ''
        }];
    }, []);
};

export const getAvatar = showName => {
    const showTitle = showsToSearch.find(each => each.name === showName);
    return showTitle.avatar;
};

export const getNewShowData = async showName => {
    const formattedShowName = showName.toLowerCase().replace(' ', '-')
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${formattedShowName}`);
    const myJson = await response.json();
    return filterApi(myJson);
};

export function sortByRating(data) {
    const arr = data.data;
    return arr.sort((a, b) => b.rating - a.rating)
};

export function sortByRelease(data) {
    const arr = data.data;
    return arr.sort((a, b) => Date.parse(a.firstAired) - Date.parse(b.firstAired));
};