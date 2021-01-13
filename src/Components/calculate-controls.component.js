import React from 'react';
import { useSelector } from 'react-redux';


  const selectDevices = state => {
    const Devices = state.devices.devices
    return Devices
  }

  

  const selectTime = state => {
      const Time = state.time.time[0]
      return Time
  }

  const selectKnowledge = state => {
      const Knowledge = state.knowledge.knowledge[0]
      return Knowledge
  }

const CalculateControls = ({Data}) => {


  const [state, setState] = React.useState({
    controls: []
    });

    const devices = useSelector(selectDevices)
    const time = useSelector(selectTime);
    const knowledge = useSelector(selectKnowledge);


    var attacks = [];
    if (devices[0].selected === true){
      attacks.push("ISL")
    };
    if (devices[0].selected === true && devices[1].selected === true){
      attacks.push("ISS")
    };
    if (devices[1].selected === true || devices[2].selected === true){
      attacks.push("CCN")
      attacks.push("CCM")
    }
    if (devices[2].selected === true){
      attacks.push("RW")
    }
    if (devices[3].selected === true){
      attacks.push("SV")
    }

      Data.map(value => {
            if (attacks.includes(value.name))
              if (knowledge.value === "Low" && time.value === "Low"){
                if (value.value[0] === 1 && value.value[1] === 1){
                  value.controls.map((control)=> {
                    if (!state.controls.includes(control)){
                      var joined = state.controls.concat(control);
                      setState({ ...state,
                                controls: joined }) 
                    }
                  })
                }}
              else if (knowledge.value === "Low" && time.value === "Medium"){
                if (value.value[0] === 1 && value.value[1] === 2){
                  value.controls.map((control)=> {
                    if (!state.controls.includes(control)){
                      var joined = state.controls.concat(control);
                      setState({ controls: joined }) 
                    }
                  })
                }
              }
              else if (knowledge.value === "Low" && time.value === "High") {
                if (value.value[0] === 1 && value.value[1] === 3){
                  value.controls.map((control)=> {
                    if (!state.controls.includes(control)){
                      var joined = state.controls.concat(control);
                      setState({ controls: joined }) 
                    }
                  })
                  }
              }
              else if (knowledge.value === "Medium" && time.value === "Low") {
                if (value.value[0] === 2 && value.value[1] === 1){
                  value.controls.map((control)=> {
                    if (!state.controls.includes(control)){
                      var joined = state.controls.concat(control);
                      setState({ controls: joined }) 
                    }
                  })
                }
              }
              else if (knowledge.value === "Medium" && time.value === "Medium") {
                if (value.value[0] === 2 && value.value[1] === 2){
                  value.controls.map((control)=> {
                    if (!state.controls.includes(control)){
                      var joined = state.controls.concat(control);
                      setState({ controls: joined }) 
                    }
                  })
                }
              }
              else if (knowledge.value === "Medium" && time.value === "High") {
                if (value.value[2] === 1 && value.value[3] === 2){
                  value.controls.map((control)=> {
                    if (!state.controls.includes(control)){
                      var joined = state.controls.concat(control);
                      setState({ controls: joined }) 
                    }
                  })
                }
              }
              else if (knowledge.value === "High" && time.value === "Low") {
                if (value.value[0] === 3 && value.value[1] === 1){
                  value.controls.map((control)=> {
                    if (!state.controls.includes(control)){
                      var joined = state.controls.concat(control);
                      setState({ controls: joined }) 
                    }
                  })
                }
              }
              else if (knowledge.value === "High" && time.value === "Medium") {
                if (value.value[0] === 3 && value.value[1] === 2){
                  value.controls.map((control)=> {
                    if (!state.controls.includes(control)){
                      var joined = state.controls.concat(control);
                      setState({ controls: joined }) 
                    }
                  })
                }
              }
              else if (knowledge.value === "High" && time.value === "High") {
                if (value.value[0] === 3 && value.value[1] === 3){
                  value.controls.map((control)=> {
                    if (!state.controls.includes(control)){
                      var joined = state.controls.concat(control);
                      setState({ controls: joined }) 
                    }
                  })
                }
              }
              
          }) 
          

          return (
              state.controls.map( (n, i) => {
                return ( 
                    <tr key={i}><td>{n}</td></tr>  
                        )                           
                }
            )
                      
          ) 

      }
  
  
  export default CalculateControls;