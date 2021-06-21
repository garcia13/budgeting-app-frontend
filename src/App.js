import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Form from "./Components/TransactionNewForm";
import "./App.css";

// must import and set to const in order to function properly
import apiURL from "./util/apiURL";
const API = apiURL();
console.log(API);

function App() {
  const [transactionsArr, setTransactionsArr] = useState([]);

  const fetchTransactions = async () => {
    try {
      let res = await axios.get(`${API}/transactions`);
      console.log(res.data);
      // debugger;
      setTransactionsArr(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const postTransaction = async (newTransaction) => {
    try {
      let res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactionsArr((prevTransactionsArr) => [
        ...prevTransactionsArr,
        res.data,
      ]);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/transactions">
            <Index transactionsArr={transactionsArr} />
          </Route>
          <Route path="/transactions/new">
            <Form postTransaction={postTransaction} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
