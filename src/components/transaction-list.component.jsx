import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import TransactionComponent from "./transaction.component";

const TransactionListComponent = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<div>
			<h3>History</h3>
			<ul id="list" className="list">
				{transactions.map(transaction => (
					<TransactionComponent
						key={transaction.id}
						transaction={transaction}
					/>
				))}
			</ul>
		</div>
	);
};

export default TransactionListComponent;
