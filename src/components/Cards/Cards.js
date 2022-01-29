import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Card from './Card';

import classes from './Cards.module.css';

const DUMMY_Cards_1 =[
    {
        id: '1',
        title: '.COM',
        newPrice: 5.99,
        oldPrice: 10.99
    },
    {
        id: '2',
        title: '.AI',
        newPrice: 55.99,
        oldPrice: 100.99
    },
    {
        id: '3',
        title: '.NET',
        newPrice: 7.99,
        oldPrice: 10.99
    },
    {
        id: '4',
        title: '.HEALTH',
        newPrice: 7.99,
        oldPrice: 100.99
    },
    {
        id: '5',
        title: '.CO.UK',
        newPrice: 3.99,
        oldPrice: 10.99
    },
    {
        id: '6',
        title: '.ORG',
        newPrice: 15.99,
        oldPrice: 100.99
    },
    {
        id: '7',
        title: '.CO',
        newPrice: 5.99,
        oldPrice: 10.99
    },
    {
        id: '8',
        title: '.SEA',
        newPrice: 55.99,
        oldPrice: 100.99
    },
];

const DUMMY_Cards_2 =[
    {
        id: '1',
        title: '.NET',
        newPrice: 5.99,
        oldPrice: 10.99
    },
    {
        id: '2',
        title: '.TECH',
        newPrice: 55.99,
        oldPrice: 100.99
    },
    {
        id: '3',
        title: '.SEA',
        newPrice: 5.99,
        oldPrice: 10.99
    },
    {
        id: '4',
        title: '.AI',
        newPrice: 55.99,
        oldPrice: 100.99
    },
    {
        id: '5',
        title: '.COM',
        newPrice: 5.99,
        oldPrice: 10.99
    },
    {
        id: '6',
        title: '.AI',
        newPrice: 55.99,
        oldPrice: 100.99
    },
    {
        id: '7',
        title: '.COM',
        newPrice: 5.99,
        oldPrice: 10.99
    },
    {
        id: '8',
        title: '.AI',
        newPrice: 55.99,
        oldPrice: 100.99
    },
];

const card_1 = DUMMY_Cards_1.map((card) => {
    return <Card key={card.id} title={card.title} newPrice={card.newPrice} oldPrice={card.oldPrice} />;
})

const card_2 = DUMMY_Cards_2.map((card) => {
    return <Card key={card.id} title={card.title} newPrice={card.newPrice} oldPrice={card.oldPrice} />;
})

const data = (
    <Tabs>
        <TabList className={classes['react-tabs__tab-list']}>
            <Tab>Domains</Tab>
            <Tab>Web Hosting</Tab>
            <Tab disabled>Dedicated Servers</Tab>
            <Tab >Virtual Cloud Servers</Tab>
            <Tab disabled>WordPress Hosting</Tab>
            <Tab disabled>Email Hosting</Tab>
            <Tab >VPS Hosting Servers</Tab>
            <Tab disabled>Free Hosting</Tab>
            <Tab disabled>Domains</Tab>
        </TabList>
        <TabPanel className={classes['react-tabs__tab-panel']}>{card_1}</TabPanel>
        <TabPanel className={classes['react-tabs__tab-panel']}>{card_2}</TabPanel>
        <TabPanel className={classes['react-tabs__tab-panel']}>{card_2}</TabPanel>
        <TabPanel className={classes['react-tabs__tab-panel']}>{card_1}</TabPanel>
        <TabPanel className={classes['react-tabs__tab-panel']}>{card_2}</TabPanel>
        <TabPanel className={classes['react-tabs__tab-panel']}>{card_2}</TabPanel>
        <TabPanel className={classes['react-tabs__tab-panel']}>{card_1}</TabPanel>
        <TabPanel className={classes['react-tabs__tab-panel']}>{card_2}</TabPanel>
        <TabPanel className={classes['react-tabs__tab-panel']}>{card_2}</TabPanel>
    </Tabs>
);

const Cards = () => {
    return (
        <div className={classes.cards}>
            {data}
        </div>
    );
};

export default Cards;