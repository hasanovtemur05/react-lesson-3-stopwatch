import { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
export default class StopInterval extends Component {
    state = {
        hours:0,
        minutes:0,
        secound:0,
        intervals: [],
        disabled: false,
        interval: ""
    }
    startInterval=()=>{
        let a = setInterval(() => {
            const { secound, minutes, hours } = this.state;
            if (secound === 59) {
                if (minutes === 59) {
                    this.setState({
                        hours: hours + 1,
                        minutes: 0,
                        secound: 0
                    });
                } else {
                    this.setState({
                        minutes: minutes + 1,
                        secound: 0
                    });
                }
            } else {
                this.setState({
                    secound: secound + 1
                });
            }
            
        }, 20);
        this.setState({
            disabled: true,
            interval: a
        })
    }
    
    stopInterval=()=>{
        clearInterval(this.state.interval)
        this.setState({
            disabled:false,  
        })
    }

    clearInterval=()=>{
        const {hours, minutes, secound, disabled} = this.state
        clearInterval(this.state.interval)
        this.setState({
            disabled:false,  
            hours:0,
            minutes:0,
            secound:0
        })
    }

    saveInterval=()=>{
        const {hours, minutes, secound, intervals} = this.state
        intervals.push(`${hours} : ${minutes} : ${secound}`)
        this.setState({
            intervals: intervals
        })
       
    }
    


    deleteInterval=(index)=>{
        const {intervals} = this.state
        intervals.splice(index, 1)
        this.setState({
            intervals: intervals
        })
    }
    
  render() {
    const {disabled, secound, minutes, hours, intervals} = this.state
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="card col-md-6 offset-3">
                        <div className="card-header">
                            <h2 className='text-center'>StopWtch</h2>
                        </div>
                        <div className="card-body">
                                <h1 className='text-center'>{hours} : {minutes} : {secound}</h1>
                               {
                                intervals.map((item, index)=>{
                                    return <div className='d-flex justify-content-between' >
                                        <h2>{item}</h2>
                                        <button className='btn btn-danger my-2' onClick={()=>this.deleteInterval(index)}>delete</button>
                                    </div>
                                })
                               }
                        </div>
                
                               
                        
                        
                        <div className="card-footer d-flex justify-content-center gap-5">
                            <button className='btn btn-success' onClick={this.startInterval} disabled={disabled} >Start</button>
                            <button className='btn btn-danger' onClick={this.stopInterval}>Stop</button>
                            <button className='btn btn-warning' onClick={this.clearInterval}>Clear</button>
                            <button className='btn btn-info' onClick={this.saveInterval}>Interval</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
  }
}
