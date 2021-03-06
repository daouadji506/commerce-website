/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selecteShopCollectionsForPreview } from '../../redux/shop/shop.selectors';
import Collection_Preview from '../preview-collection/Collection_Preview';
import "./Collection_OverView.styles.scss"

 function Collection_OverView({ collection,match,history }) {
  return (
    <div className="collection_overview">
      {collection.map(({ id, items, title, routeName }) => (
        <Collection_Preview
          key={id}
          items={items}
          title={title}
          routeName={routeName}
          match={match}
          history={history}
        />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collection: selecteShopCollectionsForPreview,
});

export default connect(mapStateToProps)(Collection_OverView);