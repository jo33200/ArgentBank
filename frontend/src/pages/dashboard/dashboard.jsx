import React, { useEffect } from "react";
import "./dashboard.scss"; // Assurez-vous que le chemin est correct
import Button from "../../components/Button/Button";
import Account from "../../components/Account/Account";
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/actions/auth.actions';

const User = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.auth.user);
 

  useEffect(() => {
    dispatch(getUserName());
  }, [dispatch]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userProfile && `${userProfile.firstName} ${userProfile.lastName}`}!</h1>
        <div>
          <Button className="edit-button">Edit Name</Button>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <div className="cta">
          <Button className="transaction-button">View transactions</Button>
        </div>
      </section>
      <section className="account">
        <Account 
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <div className="cta">
          <Button className="transaction-button">View transactions</Button>
        </div>
      </section>
      <section className="account">
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
        <div className="cta">
          <Button className="transaction-button">View transactions</Button>
        </div>
      </section>
    </main>
  );
}

export default User;
