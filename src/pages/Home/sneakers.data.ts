import { ISneakers } from '../../types/ISneakers';
import adi from '../../assets/images/sneakers/adidas/adi2000.jpeg';
import puma from '../../assets/images/sneakers/puma/suede.jpeg';
import cell_venom from '../../assets/images/sneakers/puma/cell_venom.jpeg';
import suede_black from '../../assets/images/sneakers/puma/suede_black.jpeg';
import response from '../../assets/images/sneakers/adidas/response.jpeg';
import kangaroos_rally_bandana from '../../assets/images/sneakers/kangaroos/kangaroos_rally_bandana.jpeg';
import karhu_aria_95 from '../../assets/images/sneakers/karhu/karhu_aria_95.jpeg';
import karhu_fusion2 from '../../assets/images/sneakers/karhu/karhu_fusion2.jpeg';
import puma_mirage_sport from '../../assets/images/sneakers/puma/puma_mirage_sport.jpeg';
import reebok_club_c from '../../assets/images/sneakers/reebok/reebok_club_c.jpeg';

export const sneakers: ISneakers[] = [
    {
        id: 1,
        brand: 'Adidas',
        photo: response,
        name: 'Originals Response',
        price: 200,
        color: 'Olive',
    },
    {
        id: 2,
        brand: 'Puma',
        photo: cell_venom,
        name: 'Cell Venom',
        price: 127,
        color: 'Blue/White',
        sale: true,
    },
    {
        id: 3,
        brand: 'Adidas',
        photo: adi,
        name: 'ADI2000',
        price: 300,
        color: 'Blue',
        sale: true,
    },
    {
        id: 4,
        brand: 'Puma',
        photo: puma,
        name: 'Suede',
        price: 120,
        color: 'Red',
    },
    {
        id: 5,
        brand: 'Puma',
        photo: suede_black,
        name: 'Suede',
        price: 140,
        color: 'Black',
    },
    {
        id: 6,
        brand: 'KangaRoos',
        photo: kangaroos_rally_bandana,
        name: 'Rally Bandana',
        price: 175,
        color: 'Green',
    },
    {
        id: 7,
        brand: 'Karhu',
        photo: karhu_aria_95,
        name: 'Aria 95',
        price: 213,
        color: 'White/Pink',
    },
    {
        id: 8,
        brand: 'Karhu',
        photo: karhu_fusion2,
        name: 'Fusion 2',
        price: 199,
        color: 'Red',
    },
    {
        id: 9,
        brand: 'Puma',
        photo: puma_mirage_sport,
        name: 'Mirage Sport',
        price: 150,
        color: 'Olive/Yellow',
    },
    {
        id: 10,
        brand: 'Reebok',
        photo: reebok_club_c,
        name: 'Club C',
        price: 110,
        color: 'White',
    },
];
