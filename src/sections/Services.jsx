import { FaHtml5, FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { ServiceBlock } from "../components/ServiceBlock";


export function Services({limit, sortBy}) {

    const servicesData = [
        {
            id: 1,
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio?',
            price: 100,
            link: '/services/HTML',
            icon: <FaHtml5 />,
        },
        {
            id: 2,
            title: 'CSS',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio?',
            price: 1000,
            link: '/services/CSS',
            icon: <FaCss3 />,
        },
        {
            id: 3,
            title: 'JS',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio?',
            price: 10,
            link: '/services/Javascript',
            icon: <TbBrandJavascript />,
        },
        {
            id: 4,
            title: 'Bootstrap',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio?',
            price: 20,
            link: '/services/Javascript',
            icon: <TbBrandJavascript />,
        },
        {
            id: 5,
            title: 'GIT',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio?',
            price: 50,
            link: '/services/Javascript',
            icon: <TbBrandJavascript />,
        },
        {
            id: 6,
            title: 'React',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio?',
            price: 70,
            link: '/services/Javascript',
            icon: <TbBrandJavascript />,
        },
    ]

    const trueLimit = servicesData.length > limit ? limit : servicesData.length;

    const sortByTytleAZ = (a, b) => a.title < b.title ? -1 : a.title === b.title ? 0 : 1;
    const sortByTytleZA = (a, b) => a.title < b.title ? 1 : a.title === b.title ? 0 : -1;
    const sortByPriceAZ = (a, b) => a.price - b.price;
    const sortByPriceZA = (a, b) => b.price - a.price;

    const sortingAlgotrithm = {
        titleAZ: sortByTytleAZ,
        titleZA: sortByTytleZA,
        price09: sortByPriceAZ,
        price90: sortByPriceZA,

    }

    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Services provided</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {servicesData.sort(sortingAlgotrithm[sortBy]).slice(0, trueLimit).map(service => <ServiceBlock key={service.id} data={service} />)} 
            
            </div>
        </div>
    );
}