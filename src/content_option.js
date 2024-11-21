import moradImage from './assets/images/moraad.jpg';
import groceryStore from './assets/images/grocery.jpg';
import moviesSearch from './assets/images/movies.jpg';
import invoiceSystem from './assets/images/invoice.jpg';
import countriesSearch from './assets/images/countries.jpg';
import carsSearch from './assets/images/cars.jpg';
import taskMaster from './assets/images/task-master.jpg';
const logotext = "Morad Shahwan";
const meta = {
    title: "Morad Shahwan",
    description: "I'm Morad Shahwan, FULL STACK DEVELOPER",
};

const introdata = {
    title: "I'm Morad Shahwan",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "28 years old Full Stack Developer with a passion for creating efficient, scalable, and user-friendly websites and mobile apps.",
    your_img_url: moradImage,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I'm a full stack developer with a passion for creating efficient, scalable, and user-friendly websites and mobile apps. I've studied full stack development at John Bryce College in Haifa, Israel.",
};

const skills = [{
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 85,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Node.js",
        value: 85,
    },
    {
        name: "Jquery",
        value: 85,
    },
    {
        name: "MongoDB",
        value: 85,
    },
    {
        name: "SQL",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "I specialize in creating intuitive and responsive user interfaces that enhance user experience.",
    },
    {
        title: "Mobile Apps",
        description: "I develop mobile apps using React Native, ensuring cross-platform compatibility and native performance.",
    },
    {
        title: "Wordpress Design",
        description: "I create custom WordPress websites tailored to your brand and business needs.",
    },
];

const dataprojects = [{
        img: moviesSearch,
        className: "project-img",
        description: "A website that allows you to search for movies and get information about them.",
        link: "http://movies-search-morad.netlify.app",
    },
    {
        img: groceryStore,
        className: "project-img",
        description: "A website that allows you to insert groceries to your cart and calculate the total price.",
        link: "https://grocery-store-morad.netlify.app/",
    },
    {
        img: carsSearch,
        className: "project-img",
        description: "A website that allows you to search for cars by license plate and get information about them.",
        link: "https://cars-search-morad.netlify.app/",
    },
    {
        img: invoiceSystem,
        className: "project-img",
        description: "A website that allows you to create invoices and manage your business.",
        link: "https://invoice-system-morad.netlify.app/",
    },
    {
        img: countriesSearch,
        className: "project-img",
        description: "A website that allows you to search for countries and get information about them.",
        link: "https://countries-search-morad.netlify.app/",
    },
    {
        img: taskMaster,
        className: "project-img",
        description: "A website that allows you to create tasks and manage your work.",
        link: "https://task-master-morad.netlify.app/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "moradshahwan@outlook.com",
    YOUR_FONE: "(972) 50-787-9107",
    description: "I'm always open to new opportunities and collaborations. Feel free to reach out for any inquiries or collaborations.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/MoradShahwan",
    facebook: "https://facebook.com/share/wpacoB8qts5HnMjp/?mibex=LQQJ4d",
    linkedin: "https://linkedin.com/in/morad-shahwan-15a7b1339",
};
export {
    meta,
    dataabout,
    dataprojects,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};