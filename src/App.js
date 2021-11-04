import React from 'react';
import Header from './Header';
import Categories from './Categories';
import Banner from './Banner';
import FeaturedStores from './FeaturedStores';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Categories 
        image1="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/pickup-new-updated@3x-46ad8e55887e6ac00d64bb62e6fedb7ab3e5693b9a50fc8628d0b2995443664a.png"
        image2="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/grocery-updated@3x-b6acc0a1dfd855ccdc4c861502daeea80278ff18458c84926d16e2ef09891506.png"
        image3="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/convenience-updated-306d12e26af2864e44171fa2217afe1103a69825518cc94670a56bdc41851e5b.png"
        image4="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/alcohol-updated@3x-5115d8fff03be9a60c4d7b45f65c9cb7f18de36c5f9f82a6d8b6604aba3d2c55.png"
        image5="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/in-store-prices-c8e83638c409bec545df9d5a6e20105e24313af12ff5be74fc4cf17d0afcf76a.png"
        image6="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/snap-cb9a13d44153a25db4f98f1769a593fed3e3456bc0d326a4ff115213f0bc7908.png"
        image7="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/club-updated@3x-e97a950245462418f870432bdf13acd3d11b92d758b6d45761186e55e21a66df.png"
        image8="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/general-updated@3x-407bd0686b3878c892594a302e95acaa318fb923622de59fb19b662781f0e6ce.png"
        image9="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/pharmacy-updated@3x-5f80cb004a50b775e88a98820cda135ff2f2edf7951d96a3d9061e3c576a7b5a.png"
        image10="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/pets-updated@3x-468cc1646eabd7bcfac6344689f9d8626030e55c227cbea64d1fd2689d182fc1.png"
        image11="https://d2d8wwwkmhfcva.cloudfront.net/90x/d2guulkeunn7d8.cloudfront.net/assets/home/category_filters/new-updated@3x-4efef5877e9e2010c63bf1a07446ae901bfbd829e47374911a5bce088a849ba3.png"
      />
      <Banner />
      <FeaturedStores 
        sectionTitle="Big-selection grocers in New York"
        image1="https://d2d8wwwkmhfcva.cloudfront.net/72x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
        image2="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/151/6d52742f-c20c-404e-abb7-67935cc428d3.png"
        image3="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/302/59681426-b3f0-4184-b9d8-43d12d5a6d80.png"
        image4="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1390/579cb2af-b731-4cec-826d-bc1c1ecbf335.png"
        image5="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1573/e04c8eaf-a180-4753-b651-8c4a1c81845c.png"
        image6="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1692/50450797-f135-45a0-a990-ac41e26a8f29.png"
        image7="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1723/519586f9-471d-4bee-892e-72b99945ebaa.png"
        image8="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1736/959d4bc0-687c-49d9-aa01-933af06b718b.png"
        image9="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/482/981b983c-53eb-44e7-99b9-1b9744a433d0.jpg"
        title1="ALDI" 
        title2="Food Universe"
        title3="Stew Leonard's"
        title4="7-Eleven"
        title5="Walgreens"
        title6="Duane Reade"
        title7="The Container Store"
        title8="Butcher Box"
        title9="Ctown Supermarket"
      />
      <FeaturedStores 
        sectionTitle="New on Instacart in New York"
        image1="https://d2d8wwwkmhfcva.cloudfront.net/72x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
        image2="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/151/6d52742f-c20c-404e-abb7-67935cc428d3.png"
        image3="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1339/020cfd72-f303-4af1-a818-2c62257851ba.png"
        image4="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/39/0d4e9ee3-1686-4711-8da3-b6f26da6019f.png"
        image5="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/143/33699307-9848-4589-bc5e-4ca155bc7236.png"
        image6="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png"
        image7="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/250/fdcc6635-cadb-4a8d-ab03-fddac7876ac4.png"
        image8="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/254/3663c906-4a01-4cf0-9465-7f7e2b2578fd.png"
        image9="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/482/981b983c-53eb-44e7-99b9-1b9744a433d0.jpg"
        title1="ALDI" 
        title2="Food Universe"
        title3="Fairway"
        title4="Key Food"
        title5="Westside Market"
        title6="Wegmans"
        title7="Key Food Urban Marketplace"
        title8="D'Agostino"
        title9="Ctown Supermarket"
      />
      <FeaturedStores 
        sectionTitle="Retail stores in New York"
        image1="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1723/519586f9-471d-4bee-892e-72b99945ebaa.png"
        image2="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1322/aa584acc-cb79-4cb1-bb5e-3891c0575ba6.png"
        image3="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1366/d1487beb-780a-4dff-afe6-356b03287594.png"
        image4="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1373/1da94693-c8ed-44f8-b405-cc92024f9ec5.jpg"
        image5="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1493/62072190-49d5-4286-85c1-aa2ecfa184c5.png"
        image6="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1583/fa5e4859-fb2c-44c5-8428-1d398965ab7b.png"
        image7="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1595/76b650a2-c627-4be3-9bed-cfe805d37c95.jpg"
        image8="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/254/3663c906-4a01-4cf0-9465-7f7e2b2578fd.png"
        image9="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/482/981b983c-53eb-44e7-99b9-1b9744a433d0.jpg"
        title1="The Container Store" 
        title2="Staples"
        title3="Best Buy"
        title4="The Vitamin Shop"
        title5="Sephora"
        title6="Bed Bath &amp; Beyond"
        title7="Harmon Face Value"
        title8="D'Agostino"
        title9="Ctown Supermarket"
      />
      <FeaturedStores 
        sectionTitle="Neighborhood favorites in New York"              
        image1="https://d2d8wwwkmhfcva.cloudfront.net/72x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
        image2="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/151/6d52742f-c20c-404e-abb7-67935cc428d3.png"
        image3="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1339/020cfd72-f303-4af1-a818-2c62257851ba.png"
        image4="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/39/0d4e9ee3-1686-4711-8da3-b6f26da6019f.png"
        image5="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/143/33699307-9848-4589-bc5e-4ca155bc7236.png"
        image6="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png"
        image7="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/250/fdcc6635-cadb-4a8d-ab03-fddac7876ac4.png"
        image8="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/254/3663c906-4a01-4cf0-9465-7f7e2b2578fd.png"
        image9="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/482/981b983c-53eb-44e7-99b9-1b9744a433d0.jpg"
        title1="ALDI" 
        title2="Food Universe"
        title3="Fairway"
        title4="Key Food"
        title5="Westside Market"
        title6="Wegmans"
        title7="Key Food Urban Marketplace"
        title8="D'Agostino"
        title9="Ctown Supermarket"
      />
      <FeaturedStores 
        sectionTitle="Convenience stores in New York"              
        image1="https://d2d8wwwkmhfcva.cloudfront.net/72x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
        image2="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/151/6d52742f-c20c-404e-abb7-67935cc428d3.png"
        image3="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1339/020cfd72-f303-4af1-a818-2c62257851ba.png"
        image4="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/39/0d4e9ee3-1686-4711-8da3-b6f26da6019f.png"
        image5="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/143/33699307-9848-4589-bc5e-4ca155bc7236.png"
        image6="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png"
        image7="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/250/fdcc6635-cadb-4a8d-ab03-fddac7876ac4.png"
        image8="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/254/3663c906-4a01-4cf0-9465-7f7e2b2578fd.png"
        image9="https://d2d8wwwkmhfcva.cloudfront.net/144x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/482/981b983c-53eb-44e7-99b9-1b9744a433d0.jpg"
        title1="ALDI" 
        title2="Food Universe"
        title3="Fairway"
        title4="Key Food"
        title5="Westside Market"
        title6="Wegmans"
        title7="Key Food Urban Marketplace"
        title8="D'Agostino"
        title9="Ctown Supermarket"
      />
    </div>
  );
}

export default App;
