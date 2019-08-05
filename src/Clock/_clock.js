import React, {Component} from "react";
import './_clock.scss';


class Clock extends Component {
    componentDidMount() {

        const seconds = document.querySelector('.sec');
        const minutes = document.querySelector('.min');
        const hours = document.querySelector('.hour');

        const realHour = new Date();

        const myClock = function () {
            const sec = realHour.getSeconds();
            const min = realHour.getMinutes() * 60;
            const hour = realHour.getHours() * 3600;

            console.log(hour,min,sec);

            seconds.style.animationDelay = '-' + sec + 's';
            minutes.style.animationDelay = '-' + min + 's';
            hours.style.animationDelay = '-' + hour + 's';
        };
        myClock();

        const switcher = document.querySelector('#switch');

        switcher.addEventListener('click', function(){
            document.querySelector('.clock-day').classList.toggle('clock-night');
        })

    }

    render() {
        return (
            <div className="clock">
                <div className="clock-day">
                    <div className="clock-body">
                        <div className="number number1">
                            <p>1</p>
                        </div>
                        <div className="number number2">
                            <p>2</p>
                        </div>
                        <div className="number number3">
                            <p>3</p>
                        </div>
                        <div className="number number4">
                            <p>4</p>
                        </div>
                        <div className="number number5">
                            <p>5</p>
                        </div>
                        <div className="number number6">
                            <p>6</p>
                        </div>
                        <div className="number number7">
                            <p>7</p>
                        </div>
                        <div className="number number8">
                            <p>8</p>
                        </div>
                        <div className="number number9">
                            <p>9</p>
                        </div>
                        <div className="number number10">
                            <p>10</p>
                        </div>
                        <div className="number number11">
                            <p>11</p>
                        </div>
                        <div className="number number12">
                            <p>12</p>
                        </div>

                        <div className="hand sec"></div>
                        <div className="hand min"></div>
                        <div className="hand hour"></div>

                    </div>
                    <div className="switcher">
                        <input type="checkbox" id="switch" name="switch"/>
                        <p>day / night</p>
                    </div>
                    <p className='foot'>&copy; 2019 Łukasz Gawryś, Made by LucaGavri</p>
                </div>
            </div>
        )
    }
}

export default Clock;

