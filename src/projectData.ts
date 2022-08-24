

interface projects {
    id: number;
    name: string;
    imgUrl: string;
    desc: string;
    technologyUsed: {src:string;name:string}[];
    links: { live: string, github: string };
}


export const projectData:projects[] =[
    {
        id: 1,
        imgUrl: require('./images/projects/E-commerce.png'),
        name: 'Cars E-commerce website',
        desc: `An app that lets the user search and find any Country in
            the world and a dedicated page to view details about them, with light/dark theme functionality.`,
        technologyUsed: [{src:require('./images/atom.png'),name:'React'}],
        links: { live: 'https://faecommerce.netlify.com', github: 'https://github.com/Fae-new/E-commerce' }
    },
    {
        id: 2,
        imgUrl: require('./images/projects/country-search.png'),
        name: 'Country search app',
        desc: `An app that lets the user search and find any Country in
            the world and a dedicated page to view details about them, with light/dark theme functionality.`,
        technologyUsed: [{src:require('./images/atom.png'),name:'React'}],
        links: { live: 'https://faecountrysearch.netlify.com', github: 'https://github.com/Fae-new/Countries-search' }
    }, {
        id: 3,
        imgUrl: require('./images/projects/blog-page.png'),
        name: 'Blog page',
        desc:  'Sample blog posting page, with dynamic routing and delete blog functionality. Made with Ejs, Nodejs and persists data with Mongodb',
        technologyUsed: [{src:require('./images/java-script.png'),name:'Ejs'},
         {src:require('./images/nodejs.png'),name:'Nodejs'}, {src:require('./images/database.png'),name:'Mongodb'}],
        links: { live: 'https://faeblogwebsite.herokuapp.com/', github: 'https://github.com/Fae-new/blog-page'}
    }, {
        id: 4,
        imgUrl: require('./images/projects/bookmarkpage.png'),
        name: 'Bookmark landing page',
        desc: 'Landing page for a bookmark company.',
        technologyUsed: [{src:require('./images/atom.png'),name:'React'}],
        links: { live: 'https://faebookmarklanding.netlify.app', github: 'https://github.com/Fae-new/bookmark-landing-page' }
    },{
        id: 5,
        imgUrl: require('./images/projects/drag-drop-todo.png'),
        name: 'Todo list',
        desc: 'A todo list with filtering, light/dark theme and drag to re-order items functionality.',
        technologyUsed: [{src:require('./images/atom.png'),name:'React'}],
        links: { live: 'https://fae-drag-and-drop.netlify.app/', github: 'https://github.com/Fae-new/drag-and-drop-todo' }
    },{
        id: 6,
        imgUrl: require('./images/projects/header-app.png'),
        name: 'Keeper app',
        desc: 'A Web app clone of google notes for writing and saving short notes',
        technologyUsed: [{src:require('./images/atom.png'),name:'React'}],
        links: { live: 'https://faeheaderapp.netlify.app', github: 'https://github.com/Fae-new/headerapp' }
    }
]