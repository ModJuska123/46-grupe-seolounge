import { FaHtml5, FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { ServiceBlock } from "../components/ServiceBlock";

export function Services() {
    const paslauguDuomenys = [
        {
            id: 1,
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio?',
            link: '/services/HTML',
            icon: <FaHtml5 />,
        },
        {
            id: 2,
            title: 'CSS',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio?',
            link: '/services/CSS',
            icon: <FaCss3 />,
        },
        {
            id: 3,
            title: 'JS',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio?',
            link: '/services/Javascript',
            icon: <TbBrandJavascript />,
        },
    ]
    

    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Services provided</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {paslauguDuomenys.map(service => <ServiceBlock key={service.id} data={service} />)}
            </div>
        </div>
    );
}