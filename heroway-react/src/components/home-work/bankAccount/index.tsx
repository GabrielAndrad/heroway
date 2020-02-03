import React,{useState} from 'react';
import { parse } from 'url';

interface Iprops {
    initialValue:number;
}

function BankAccount  (props:Iprops) {
    const [moneyInBanKAccount, updateMoneyInBankAccount] =
    useState(props.initialValue);

  
    return(
        <div>
            <input 
            type="text" 
            placeholder = "Depositar valor ..."
            onChange = {() => updateMoneyInBankAccount(this.target.value+props.initialValue)}
            />
        <div> {moneyInBanKAccount}</div>
        </div>

    );

}

export default BankAccount;