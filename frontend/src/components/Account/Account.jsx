import './Account.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Account = (props) => {

    const { title, amount, description } = props;

    return (
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
    );
}

    Account.propTypes = {
        title: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
};

export default Account;