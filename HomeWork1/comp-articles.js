Vue.component('comp-articles', {
    data() {

        return {
            tag: '',
            props: [ 'shortListProjects' ],
            articles: [
                {
                id: 1,
                heading1: 'Let’s Get Solution for Building Construction Work', 
                heading2: 'Design sprints are great',
                img1: 'img/article1.jpg', 
                img2: 'img/article1-2.jpg',
                tag: 'Kitchen',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                },
                {
                id: 2,
                heading1: 'Low Cost Latest Invented Interior Designing Ideas', 
                heading2: 'Design sprints are great',
                img1: 'img/photo-bed.jpg', 
                img2: 'img/main-photo.jpg',
                tag: 'Bedroom',
                date: '22 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                },
                {
                id: 3,
                heading1: 'Best For Any Office & Business Interior Solution', 
                heading2: 'Design sprints are great',
                img1: 'img/item1.jpg', 
                img2: 'img/project1.jpg',
                tag: 'K-Planning',
                date: '25 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                },
                {
                id: 4,
                heading1: 'Let’s Get Solution for Building Construction Work', 
                heading2: 'Design sprints are great',
                img1: 'img/item6.jpg', 
                img2: 'img/project4.jpg',
                tag: 'Building',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                },
                {
                id: 5,
                heading1: 'Low Cost Latest Invented Interior Designing Ideas', 
                heading2: 'Design sprints are great',
                img1: 'img/item2.jpg', 
                img2: 'img/latestpost.jpg',
                tag: 'Architecture',
                date: '22 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                },
                {
                id: 6,
                heading1: 'Best For Any Office & Business Interior Solution', 
                heading2: 'Design sprints are great',
                img1: 'img/item3.jpg', 
                img2: 'img/project2.jpg',
                tag: 'Bathroom',
                date: '25 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                },
                {
                id: 7,
                heading1: 'Let’s Get Solution for Building Construction Work', 
                heading2: 'Design sprints are great',
                img1: 'img/project3.jpg', 
                img2: 'img/project1.jpg',
                tag: 'K-Planning',
                date: '26 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                },
                {
                id: 8,
                heading1: 'Low Cost Latest Invented Interior Designing Ideas',
                heading2: 'Design sprints are great',
                img1: 'img/photo-bed2.jpg', 
                img2: 'img/photo-bed.jpg',
                tag: 'Bedroom',
                date: '22 December,2022',
                path: 'Interior / Home / Decore',
                callout: 'The details are not the details. They make the design.', 
                li: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", 
                "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."]
                }
            ]
        }  
    },
    template: `
        <div>
            <div class="article-by-tags__articles-block">
            <ul class="articles-by-tags__article-ul">
                <li class="articles-by-tags__article" v-for="{ id, heading1, heading2, img1, img2, date, path, callout, li } in filteredItems" :key="id">
                <h2 class="articles-by-tags__main-heading">{{ heading1 }}</h2>
                <img :src="img1" alt="article-img">
                <div class="articles-by-tags__dp-block">
                    <p class="articles-by-tags__date-path">{{ date }}</p>
                    <p class="articles-by-tags__date-path">{{ path }}</p>
                </div>
                <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
                <p class="articles-by-tags__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                <div class="articles-by-tags__callout-block">
                    <h1 class="articles-by-tags__callout-one">“</h1>
                    <h4 class="articles-by-tags__callout">{{ callout }}</h4>
                </div>
                <h2 class="articles-by-tags__main-heading">{{ heading2 }}</h2>
                <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                <ol class="articles-by-tags__list">
                    <li class="articles-by-tags__list-item" v-for="(el, index) in li" :key="index">{{ el }}</li>
                </ol>
                <img :src="img2" alt="article-img2">
                <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </li>
            </ul>
            </div>
            <div class="articles-by-tags__tags-block">
                    <h4 class="articles-by-tags__heading">Tags</h4>
                    <div class="articles-by-tags__buttons-block">
                    <button class="articles-by-tags__button-tags" @click="setTag('Kitchen')">Kitchen</button>
                    <button class="articles-by-tags__button-tags" @click="setTag('Bedroom')">Bedroom</button>
                    <button class="articles-by-tags__button-tags" @click="setTag('Building')">Building</button>
                    <button class="articles-by-tags__button-tags" @click="setTag('Architecture')">Architecture</button>
                    <button class="articles-by-tags__button-tags" @click="setTag('K-Planning')">Kitchen Planning</button>
                    <button class="articles-by-tags__button-tags" @click="setTag('Bathroom')">Bathroom</button>
                    </div> 
            </div>
        </div>`,
    methods: {
        setTag(tag) {
            this.tag = tag;
        }
    },
    computed: {
        shortListProjects() {
            return this.projects.slice(0, 3);
        },
        filteredItems() {
            return this.tag ? this.articles.filter((article) => article.tag.includes(this.tag)) : this.articles;
        }
    }
})