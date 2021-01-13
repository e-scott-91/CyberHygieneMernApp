import React from 'react';
import { useSelector } from 'react-redux';

const selectDevices = state => {
    const Devices = state.devices.devices
    return Devices
  }


const CompileAttacks = () => {

    
        const devices = useSelector(selectDevices)


        var attacks = [];
        if (devices[0].selected === true){
          attacks.push("Intrusion into your home via an attack to your home Wi-Fi network that allows control of your smart lock")
        };
        if (devices[0].selected === true && devices[1].selected === true){
          attacks.push("Intusion into your home via an attack to your smart speaker which allows control of your smart lock")
        };
        if (devices[1].selected === true || devices[2].selected === true){
          attacks.push("Credit card detail theft via an attack to your home Wi-Fi network")
          attacks.push("Credit card detail theft through a malicious chatbot or smart speaker application")
        }
        if (devices[2].selected === true){
          attacks.push("A ransomware attack on the data on your device or an organisation network that you access from home, potentially costing you or your employer alot of money")
        }
        if (devices[3].selected === true){
          attacks.push("An video or eavesdropping attack on your smart vacuum")
        }

        
              
    
        return (
            attacks.map( (attack, i) => {
              return ( 
                  <tr key={i}><td>{attack}</td></tr>  
                      )                           
              }
          )
                    
        )
    
  
        }
    
    
    export default CompileAttacks;