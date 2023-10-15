import { useEffect } from 'react';
import './Judges.css';

import Arush from './committee/arush.webp';
import Asma from './committee/asma.webp';
import Atharv from './committee/atharv.webp';
import Divyana from './committee/divyana.webp';
import Eleanor from './committee/eleanor.webp';
import Esha from './committee/esha.webp';
import Eva from './committee/eva.webp';
import Hafid from './committee/hafid.webp';
import Judy from './committee/judy.webp';
import Levente from './committee/levente.webp';
import Maria from './committee/maria.webp';
import Mauli from './committee/mauli.webp';
import Mayankh from './committee/mayankh.webp';
import Parrthav from './committee/parrthav.webp';
import Pietra from './committee/pietra.webp';
import Rishabh from './committee/rishabh.webp';
import Sanika from './committee/sanika.webp';
import Shivraj from './committee/shivraj.webp';
import Soham from './committee/soham.webp';
import Wonbin from './committee/wonbin.webp';
import Zuhayr from './committee/zuhayr.webp';

function Judges() {
    useEffect(() => {
        const cards = document.querySelectorAll(".card");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0.2) {
                    entry.target.classList.add("show");
                }
            });
        });

        cards.forEach((card) => observer.observe(card))
        return () => cards.forEach((card) => observer.unobserve(card))
    });

    return (
        // PR + Events

        <div className="card-columns">
            <div className="card-column">

                <div className="card">
                    <h4>Judy Malkawi</h4>
                    <h5>Head of PR</h5>
                    <img src={Judy} alt="placeholder" style={{objectPosition: 'top'}} />
                </div>

                <div className="card">
                    <h4>Pietra Leao</h4>
                    <h5>Head of Events</h5>
                    <img src={Pietra} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Hafid Eledath</h4>
                    <h5>PR</h5>
                    <img src={Hafid} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Mauli Gandhi</h4>
                    <h5>PR</h5>
                    <img src={Mauli} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Eva Chacra</h4>
                    <h5>PR</h5>
                    <img src={Eva} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Esha Dighe</h4>
                    <h5>Events</h5>
                    <img src={Esha} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Shivraj Maiti</h4>
                    <h5>Admin</h5>
                    <img src={Shivraj} alt="placeholder" />
                </div>

            </div>

            {/* President + Admin */}

            <div className="card-column">

                <div className="card">
                    <h4>Atharv Bansal</h4>
                    <h5>President</h5>
                    <img src={Atharv} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Rishabh Mittal</h4>
                    <h5>Head of Admin</h5>
                    <img src={Rishabh} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Soham Sharma</h4>
                    <h5>Admin</h5>
                    <img src={Soham} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Sanika Bhatnagar</h4>
                    <h5>Admin</h5>
                    <img src={Sanika} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Levente Susztar</h4>
                    <h5>Admin</h5>
                    <img src={Levente} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Arush Nagpal</h4>
                    <h5>Admin</h5>
                    <img src={Arush} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Maria Fatima</h4>
                    <h5>Admin</h5>
                    <img src={Maria} alt="placeholder" />
                </div>

            </div>

            {/* Media + Primary Ambassadors */}

            <div className="card-column">

                <div className="card">
                    <h4>Zuhayr Ahmed</h4>
                    <h5>Head of Media</h5>
                    <img src={Zuhayr} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Eleanor Rego</h4>
                    <h5>Media</h5>
                    <img src={Eleanor} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Wonbin Park</h4>
                    <h5>Media</h5>
                    <img src={Wonbin} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Parrthav Karthikeyan</h4>
                    <h5>Primary Ambassador</h5>
                    <img src={Parrthav} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Asma Wazeer</h4>
                    <h5>Primary Ambassador</h5>
                    <img src={Asma} alt="placeholder"  style={{objectPosition: 'top'}} />
                </div>

                <div className="card">
                    <h4>Divyana Maheshwari</h4>
                    <h5>Events</h5>
                    <img src={Divyana} alt="placeholder" />
                </div>

                <div className="card">
                    <h4>Mayankh Agarwal</h4>
                    <h5>Admin</h5>
                    <img src={Mayankh} alt="placeholder" />
                </div>

            </div>
        </div>
    );
}

export default Judges;