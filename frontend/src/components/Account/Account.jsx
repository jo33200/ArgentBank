import './Account.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Account = (title, amount, description) => {
    return (
        <>
        <div class="account-content-wrapper">
          <h3 class="account-title">{title}</h3>
          <p class="account-amount">{amount}</p>
          <p class="account-amount-description">{description}</p>
        </div>
        <Button to="/*" >
        View transactions
        </Button>
        </>
    );
}

    Account.propTypes = {
        title: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
};

export default Account;