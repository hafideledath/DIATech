import { useEffect } from 'react';
import './Judges.css';

function Judges() {
    useEffect(() => {
        const cards = document.querySelectorAll(".card");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0.5) {
                    entry.target.classList.add("show");
                }
            });
        });

        cards.forEach((card) => observer.observe(card))
        return () => cards.forEach((card) => observer.unobserve(card))
    });

    return (
        <div className="card-columns">
            <div className="card-column">

                <div className="card">
                    <h4>John John</h4>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <img src="https://placehold.co/300x300" alt="placeholder" />
                </div>

                <div className="card">
                    <h4>John John</h4>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <img src="https://placehold.co/300x300" alt="placeholder" />
                </div>

            </div>

            <div className="card-column">

                <div className="card">
                    <h4>John John</h4>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <img src="https://placehold.co/300x300" alt="placeholder" />
                </div>

                <div className="card">
                    <h4>John John</h4>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <img src="https://placehold.co/300x300" alt="placeholder" />
                </div>

            </div>

            <div className="card-column">

                <div className="card">
                    <h4>John John</h4>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <img src="https://placehold.co/300x300" alt="placeholder" />
                </div>

                <div className="card">
                    <h4>John John</h4>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <img src="https://placehold.co/300x300" alt="placeholder" />
                </div>

            </div>
        </div>
    );
}

export default Judges;