const travelData = [
    {
        name: 'Maroon Bells',
        desc: 'The Maroon Bells from over Maroon Lake has got to be one of the most photographed views in Colorado. The Mountains themselves are classic in shape and tower over the valley. They have slanted rock ledges that can collect snow, creating a striped appearance. The valley is filled with aspen that turn into a magnificent bed of yellow in the autumn. The combined effect is truly breathtaking.',
        image:'../images/snowmass.jpg',
        location: 'Snowmass Village, CO'
    },
    {
        name: 'Four Pass Loop',
        desc: 'Explore this 25.7-mile loop trail near Aspen, Colorado. Generally considered a challenging route. This is a very popular area for backpacking, camping, and hiking, so you will likely encounter other people while exploring. The best times to visit this trail are June through October. Dogs are welcome, but must be on a leash.',
        image:'../images/four loops.jpg',
        location: 'Snowmass Village, CO'
    },
    {
        name: 'Franconia Ridge',
        desc: 'The Franconia Ridge Loop — the nine-mile, seven-hour Franconia Ridge hike that traverses Mount Lafayette, Mount Lincoln, and Little Haystack, along the second-highest range of peaks in the White Mountains — is arguably one of the most popular and best hikes New England has to offer, with breathtaking views in the White Mountains. This Franconia Ridge hike sees up to 700 hikers a day, according to the Appalachian Mountain Club [AMC]. From my experiences on this hike, seeing people of all ages and a full parking lot in any weather, I would have to say I not only agree with this being a hotspot for hikers, but also one of the most beautiful hikes in the White Mountains.',
        image:'../images/franc.jpg',
        location: 'Franconia, NH'
    },
    {
        name: 'Mt. Tammany Summit',
        desc: 'This is a classic hike in Delaware Water Gap - and for good reason! As you climb to the summit of Mt. Tammany, it is easy to see why this is such a popular loop, as you are greeted with stunning views of the Delaware River, Mt. Minsi, and the surrounding wooded hillsides. While this is one of the more challenging hikes in the park, the views are well worth the effort.',
        image:'../images/mt.jpg',
        location: 'Northern New Jersey, NJ'
    },
    {
        name: 'Observation Point',
        desc: 'Observation Point is a 6,507-foot (1,983 m) elevation Navajo Sandstone feature located in Zion National Park, in Washington County of southwest Utah, United States.[2] Observation Point is situated at the north end of Zion Canyon, towering 2,100 feet (640 meters) above the canyon floor and the North Fork of the Virgin River which drains precipitation runoff from this viewpoint. A popular 8-mile round-trip trail climbs from the Weeping Rock trailhead along Zion Canyon Road to reach the top.[3] Neighbors visible from the point include The Great White Throne, Cathedral Mountain, Angels Landing, and Cable Mountain. This geographical features name was officially adopted in 1934 by the U.S. Board on Geographic Names',
        image:'../images/utah.jpg',
        location: 'Zion National Park, UT'
    },
    {
        name: 'North Manitou Island',
        desc: `North Manitou Island is shaped like an upside-down teardrop, with the now-forested body of the 'drop' surrounding Lake Manitou, and the tail of the drop narrowing into sandy, exposed Dimmick's Point on the island's southeastern extremity. The ferry dock and ranger station are on the island's central eastern shore, directly east of Lake Manitou.`,
        image:'../images/manitou.jpg',
        location: 'North Manitou Island, MI'
    },
    {
        name: 'Yosemite Valley',
        desc: `Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more. Yosemite National Park includes nearly 1,200 square miles of mountainous scenery, including high cliffs, deep valleys, tall waterfalls, ancient giant sequoias, and a large wilderness. Millions of people visit Yosemite each year to experience its beauty and its many opportunities for enjoyment.`,
        image:'../images/yosem.jpg',
        location: 'Yosemite National Park, CA'
    },
    {
        name: 'St. Mary',
        desc: `St. Mary Lake is located on the east side of Glacier National Park along the Going-to-the-Sun Road. The 10-mile long lake offers a variety of wildlife viewing opportunities include elk, mule deer and both grizzly and black bears. In the warmer seasons, wildflowers such as Indian paintbrush and lupine grace the hillsides; in the fall, the hillsides burst with oranges and yellows of the aspens, while winter provides cross-country and snowshoeing opportunities.`,
        image:'../images/mary.jpg',
        location: 'Glacier National Park, MT'
    },
    {
        name: 'Endless Wall Trail',
        desc: `The Endless Wall Trail is a moderate route that passes through rich forest, crosses Fern Creek, then zig-zags along the cliff edge. Many beautiful vistas can be seen along the trail. The overlook at Diamond Point provides a good turnaround spot, creating a popular two-mile out-and-back hike from the Fern Creek parking area. If you continue to the end of the trail, you will need to walk for 0.5 miles back along the road to get to the starting point, or you can retrace your steps along the trail.Great views of the New River, almost 1000 feet below, are abundant. You can often hear the voices of whitewater rafters as they experience the wild rapids of the Lower New. This area also offers significant historical resources, being the site of the Nuttallburg Mine — the largest mine in the New River Coalfields in the late 1800s. You might also get a glimpse of some of the thousands of rock climbers who visit the park to challenge themselves on the vertical sandstone walls that rim the gorge. Climbers come from all over the United States, and around the world, to select from the over 1600 climbing routes in the park. Please use caution when near cliff edges!`,
        image:'../images/fayet.jpg',
        location: 'New River Gorge National Park, WV'
    },
    {
        name: 'Mount Van Hoevenberg Recreation Area',
        desc: `Mt Van Hoevenberg combines outdoor recreation with Lake Placid’s Olympic Legacy. Home to a state-of-the-art combined skeleton & bobsled track and 55 km or Cross Contry ski trails. Notably, we are proud to host world class Nordic, Biathalon and Nordic Combined events on 5km of World Championship rate trails, the World Cup Trails joining our existing 50 km of cross country skiing trails. Additionally, the Mountain Pass Lodge is the Hub of Mt Van Hoevenberg. Come for the entire Olympic experience with all the activities Mt Van Hoevenberg has to offer.
        Cross County Season Passes are now on sale Mt Van Hoevenberg. Ski the rest of this season on next season's pass. Come to Mt Van Hoevenberg for some of the best days on snow as the temps pick up and the days are longer. March is an ideal time to enjoy spring skiing in Lake Placid with snowmaking on 5 km of our over 55 km of trails.`,
        image:'../images/adir.jpg',
        location: 'Adirondack Region, NY'
    },
    {
        name: 'South Rim Historic District',
        desc: `The Historic District is the center of development on the South Rim. Although it can be hectic during peak tourist season, with some effort it is possible to squeeze some fascinating history out of this area. Railroad buffs will enjoy a visit to the Santa Fe Railroad Train Depot and can take a walking tour. The El Tovar Hodge is worth walking through to see what passed for luxury in 1900. The Hopi House and the Lookout Studio are wonderful architectural gems with exhibits explaining the flora/fauna, history of tourism, and the area's Native American past. The Kolb Studio clings precariously to the cliff side and houses interesting photography exhibits chronicling the early days of Grand Canyon exploration and daily life.`,
        image:'../images/srim.jpg',
        location: 'Grand Canyon National Park, AZ'
    },
    {
        name: 'Glen Canyon National Recreation Area',
        desc: `A social media darling, Horseshoe Bend has become one of the most recognized and visited places in Glen Canyon National Recreation Area. The parking lot and trailhead is located off US Highway 89, approximately 5 miles (8 km) south of the Carl Hayden Visitor Center.
        Changes are underway in this busy and beautiful place, including expanded parking and trail maintenance. Please respect construction closures. Much of the rim remains exposed, so watch your footing and keep track of children.`,
        image:'../images/canyon.jpg',
        location: 'Glen Canyon National Recreation Area, AZ'
    },
    {
        name: 'Cuyahoga Valley National Park',
        desc: `Located only a short drive away from the cities of Cleveland and Akron, Cuyahoga Valley National Park is a scenic escape. Visitors can enjoy the many trails that wind along the Cuyahoga River or traverse the rolling hills, deep forests, or open farmlands of the park. A refuge for a host of native wildlife and plants, the park provides many means of exploration. Whether strolling along the Towpath Trail which follows the historic route of the Ohio and Erie Canal or venturing out on one of the park's many trails, visitors are sure to be enchanted by the solitude and scenery that the park has to offer.`,
        image:'../images/cuyahoga.jpg',
        location: 'Cuyahoga Valley National Park, OH'
    },
    {
        name: 'Acadia National Park',
        desc: `People have been drawn to the mountainous coast of Maine for many years. Awed by its stunning and diverse landscape, early 20th-century visionaries donated the land that eventually became Acadia National Park. Home to many different plants and animals, the park is comprised of rocky mountains and lush forests that display amazing colors in the fall. From atop this mountainous terrain, visitors will enjoy incredible views of the sea. Today, visitors come to Acadia to hike rocky peaks, bike historic carriage roads, or decompress and enjoy the beautiful landscape.`,
        image:'../images/acadia.jpg',
        location: 'Acadia National Park, ME'
    },
    {
        name: 'Old Faithful',
        desc: `Watching Old Faithful Geyser erupt is a Yellowstone National Park tradition. People from all over the world have journeyed here to watch this famous geyser. The park’s wildlife and scenery might be as well-known today, but it was the unique thermal features like Old Faithful Geyser that inspired the establishment of Yellowstone as the world’s first national park in 1872.

        Old Faithful is one of nearly 500 geysers in Yellowstone and one of six that park rangers currently predict. It is uncommon to be able to predict geyser eruptions with regularity and Old Faithful has lived up to its name, only lengthening the time between eruptions by about 30 minutes in the last 30 years.
        
        Thermal features change constantly and it is possible Old Faithful may stop erupting someday. Geysers and other thermal features are evidence of ongoing volcanic activity beneath the surface and change is part of this natural system. Yellowstone preserves the natural geologic processes so that visitors may continue to enjoy this natural system.
        
        Watch eruptions from the Old Faithful viewing area or along the boardwalks that weave around the geyser and through the Upper Geyser Basin..`,
        image:'../images/acadia.jpg',
        location: 'Yellowstone National Park, WY'
    }
]

module.exports = travelData