import "./dashboard.scss"
import React from "react";
import Button from "../../components/Button/Button";
import Account from "../../components/Account/Account";

const User = () => {    
    return (
        <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
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