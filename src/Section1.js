import React from 'react';
import styles from './Section1.module.css';
import group from './image.png';

const Section1 = () => {
    return(
        <div className={styles.total}>
            <div className={styles.next}>
                <div className={styles.feat}>
                    <p>Zuri Chat Features</p>
                    <p>The best platform for your team, your work and fun.</p>
                    <p>Connect and work with your team on zuri chat.<br/>
                       With zuri chat, you can do it all, work and fun.<br/>
                       DMs, game room, channels, all in one with easy access.
                    </p>
                    <p>
                        <button>Get Started</button>
                        <button>See all Features</button>
                    </p>
                </div>
            <div className={group}>
                    <img src={group} alt="group" />
                </div>

            
            </div>
        </div>
    )
}



export default Section1;