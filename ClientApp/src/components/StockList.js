import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as LinkBase } from '@reach/router';
import CardLong from './CardLong';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #EAEDF3;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.04);
`;

const Link = styled(LinkBase)`
  text-decoration: none;
`;

const Divider = styled.hr`
  margin: 0;
  border: 0.5px solid #EAEDF3;
`;

const StocksList = ({
  stocks,
}) => (
  <CardWrapper>
    {stocks.map((stock, i) => (
      <Fragment key={stock.id}>
        <Link to={`${stock.id}`}>
          <CardLong
            id={stock.id}
            name={stock.name}
            code={stock.code}
          />
        </Link>

        {i === stocks.length ? null : <Divider />}
      </Fragment>
    ))}
  </CardWrapper>
);

StocksList.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  projects: PropTypes.array
};

StocksList.defaultProps = {
  title: '',
  link: '',
  projects: []
};

export default StocksList;
