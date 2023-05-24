/* eslint-disable react/jsx-key */
import * as React from 'react';
import Card from '../card/Card';
import Option from '../option/Option';
import {PageData} from './page-model';
import './page.css';
import Nav from '../nav/NavBar';

type PageParams = {
  pageData: PageData
}

const Page: React.FC<PageParams> = ({pageData}) => (
  <div>
    <Nav />
    <div className="page-container">
      <div className="page">
        { pageData.cards.map((cardData) =>
          <Card cardData={cardData} key={cardData.id}/>)}
        { pageData.options.map((optionData) =>
          <Option optionData={optionData} key={optionData.id} />) }
      </div>
    </div>
  </div>

);

export default Page;
