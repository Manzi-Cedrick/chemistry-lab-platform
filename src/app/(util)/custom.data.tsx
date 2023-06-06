import { CustomIcon, CylinderIcon, EnhancementIcon, GuardIcon, LeafIcon, LinkedIcon, RecoveryIcon, SupportIconAudio, UserIcon, UserIconService, WhatsapIcon, YoutubeIcon } from "../(icons)";

export interface ILink {
    id: string;
    link_title: string;
    link_url: string;
}
export const links: ILink[] = [
    { id: '#2', link_title: 'Products', link_url: '/' },
    { id: '#3', link_title: 'About us', link_url: '/about' },
    { id: '#4', link_title: 'Contact us', link_url: '/contact' },
    { id: '#5', link_title: 'Blog', link_url: '/blog' },
];
export interface IManage {
    id: number;
    title: string;
    description: string;
    color: string;
}
export const ManagerArr: IManage[] = [{
    id: 1,
    title: 'Overproduction',
    description: 'A manufacturing company may produce more chemicals than it needs for a particular production run, resulting in surplus chemicals.',
    color: '#FF1E46'
}, {

    id: 2,
    title: 'Change in production',
    description: 'A company may change its production process and no longer require certain chemicals, resulting in surplus chemicals.',
    color: '#F47600'
},
{

    id: 3,
    title: 'Product discontinuation',
    description: 'If a product is discontinued, any chemicals associated with its production may become surplus.',
    color: '#F300AF'
},
{

    id: 4,
    title: 'Expiration.',
    description: 'Some chemicals have a limited shelf life and may become surplus if they are not used before their expiration date.',
    color: '#7A00F3'
},
{

    id: 5,
    title: 'Quality control.',
    description: 'If a batch of chemicals does not meet quality control standards, it may become surplus.',
    color: '#0061F3'
}, {

    id: 6,
    title: 'Regulatory changes.',
    description: 'Regulatory changes may require a company to discontinue the use of certain chemicals, resulting in surplus chemicals.',
    color: '#00E08F'
}, {

    id: 7,
    title: 'Mergers and acquisitions.',
    description: 'If a company is acquired by another company or merges with another company, surplus chemicals may result as a result of the consolidation of operations.',
    color: '#7D2E2E'
}];
export interface IPreferedAssets {
    id: number;
    title: string;
    description: string;
    icon: any;
}
export const AssetsArr: IPreferedAssets[] = [
    {
        id: 1,
        title: 'Sustainable management of surplus chemicals.',
        description: 'We specialize in the sustainable management of surplus chemicals, helping businesses reduce their environmental footprint while recovering assets.',
        icon: <CylinderIcon />
    },
    {
        id: 2,
        title: 'Safe and ethical disposal of surplus chemicals',
        description: 'We ensure that surplus chemicals are disposed of safely and ethically, meeting all regulatory and legal requirements.',
        icon: <GuardIcon />
    },
    {
        id: 3,
        title: 'Asset recovery.',
        description: 'By partnering with us, businesses can turn their surplus chemicals into a source of revenue and reduce the costs of disposal.',
        icon: <RecoveryIcon />
    },
    {
        id: 4,
        title: 'Buying and selling platform',
        description: 'Our online platform facilitates the buying and selling of surplus chemicals, providing visibility, and connecting businesses with potential buyers.',
        icon: <GuardIcon />
    },
    {
        id: 5,
        title: 'Reputation enhancement',
        description: 'Partnering with us can enhance your reputation as a responsible corporate citizen, demonstrating your commitment to sustainability and ethical business practices.',
        icon: <EnhancementIcon />
    },
    {
        id: 6,
        title: 'Customized solutions.',
        description: 'We provide customized solutions tailored to your unique needs, ensuring that our services align with your sustainability goals while maximizing asset recovery.',
        icon: <CustomIcon />
    },
    {
        id: 7,
        title: 'Wide selection of surplus chemicals.',
        description: 'Our platform features a wide selection of surplus chemicals available for purchase, allowing businesses to find the chemicals they need while reducing waste.',
        icon: <EnhancementIcon />
    },
    {
        id: 8,
        title: 'Expert team.',
        description: 'Our team of experts works closely with businesses to develop a plan that meets their specific needs and goals.',
        icon: <UserIcon />
    }
]
export interface IPartner {
    id: number;
    name: string;
    logo: any;
}
export const PartnersArr: IPartner[] = [
    {
        id: 1,
        name: '13 Cabs',
        logo: `/(assets)/13cabs.png`
    },
    {
        id: 2,
        name: 'Animal Planet',
        logo: `/(assets)/animalplanet.png`
    },
    {
        id: 3,
        name: 'Apple',
        logo: `/(assets)/apple.png`
    },
    {
        id: 4,
        name: 'Netflix',
        logo: `/(assets)/netflix.png`
    }
];
export interface ISocialMedia {
    title: string;
    icon: any;
    id: number;
    url: string;
}
export const SocialMediaArr: ISocialMedia[] = [
    {
        id: 1,
        icon: <YoutubeIcon />,
        title: 'Youtube',
        url: '/'
    },
    {
        id: 2,
        icon: <WhatsapIcon />,
        title: 'Whatsap',
        url: '/'
    },
    {
        id: 3,
        icon: <LinkedIcon />,
        title: 'LinkedIn',
        url: '/'
    }
]
export const AboutServiceLinks = [
    {
        id: 1,
        title: 'careers',
        url: '/'
    },
    {
        id: 2,
        title: 'Company profile',
        url: '/profile'
    },
    {
        id: 3,
        title: 'Contact us',
        url: '/contact'
    },
    {
        id: 4,
        title: 'In the news',
        url: '/news'
    },
    {
        id: 5,
        title: 'Privacy Policy',
        url: '/privacy/policy'
    },
    {
        id: 6,
        title: 'Disclaimer',
        url: '/disclaimer'
    },
    {
        id: 7,
        title: 'Refund policy',
        url: '/refund/policy'
    }
]
export const SupportLinks = [
    {
        id: 1,
        title: 'Become a seller',
        url: '/seller'
    },
    {
        id: 2,
        title: 'Buyer FAQ',
        url: '/buyer/faq'
    },
    {
        id: 3,
        title: 'How to buy',
        url: '/how-to-buy'
    },
    {
        id: 4,
        title: 'Shipping in options',
        url: '/shipping/options'
    },
    {
        id: 5,
        title: 'Become a partner',
        url: '/partner'
    }
]
export const ServicesOfferArr = [
    {
        id: 1,
        title: 'Environmental Solutions',
        icon: <LeafIcon />,
        description: 'Including the safe and ethical disposal of surplus chemicals, asset recovery, and facilitating the buying and selling of surplus chemicals through our online platform. With our services, you can turn your surplus chemicals into a source of revenue while reducing disposal costs.',
        color: '#8001FF'
    },
    {
        id: 2,
        title: 'Personalized Support',
        icon: <SupportIconAudio />,
        description: 'Our team of experts works closely with you to develop a plan that aligns with your sustainability goals while also maximizing asset recovery. Our solutions help reduce your carbon footprint, improve your environmental impact, and enhance your reputation as a responsible corporate citizen.',
        color: '#0047FF'
    },
    {
        id: 3,
        title: 'Customer Satisfaction',
        icon: <UserIconService />,
        description: 'Our state-of-the-art facilities and experienced team ensure that your surplus chemicals are managed safely and efficiently, and we guarantee compliance with all relevant environmental regulations.',
        color: '#FF0099'
    }
]