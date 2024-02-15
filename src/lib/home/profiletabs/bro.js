import { createClient } from 'pexels';

const client = createClient('Qtf7NDGG6DxHD1W7AKxEyqazP8GLbttX298hIw4To4hV8lqbJMRyppgd');
const query = 'Nature';

let allimages = client.photos.search({ query, per_page: 1 }).then(photos => {...});
console.log(allimages);

