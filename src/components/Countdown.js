import React from 'react'

export default class Countdown extends React.Component { 
    constructor(props) { 
   // parent constructor to pass the props
        super(props);
        this.state = {
            interval: this.getRemainingTime()
        }
        }
    getRemainingTime() {
        let now = new Date();
        let newYear = new Date(now.getFullYear() + 1, 0, 1);
        
        }
    render() { 
        return (
        <section className="hero is-info is-bold is-fullheight">
            <div className="hero-body">
                <div className="container">
                        <h1 className="title">New Year is coming up</h1>
                    <div className="section">
                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Days</p>
                                <p className="title">3,456</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Hours</p>
                                <p className="title">123</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Minutes</p>
                                <p className="title">456K</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Seconds</p>
                                <p className="title">789</p>
                            </div>
                        </div>
                            </nav>
                        </div>
                </div>
            </div>
            </section>
        )
    }
}

