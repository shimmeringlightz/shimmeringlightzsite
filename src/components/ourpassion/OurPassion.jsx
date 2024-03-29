import React from 'react';
import '../ourpassion/OurPassion.css';
import carbonfoot from '/src/images/carbonfoot.svg';
import { motion } from 'framer-motion'
import ContactModale from '../contactmodal/ContactModale';


const OurPassion = () => {

    const openModale = () => {
        document.getElementById("modalecontainer").style.display = 'flex';
    }

    return (
        <>
            <div className='our-passion-container'>
                <div className='our-passion-content'>
                    <div className='our-passion-title'>
                        Sustainable Lighting Solutions That Harness <br /> Innovation, Efficiency, and Environmental <br /> Responsibility for a Greener World
                    </div>
                    <div className='our-passion-info'>
                        <div className='our-passion-image'>
                            <img src={carbonfoot} width='100%' height='100%' />
                        </div>
                        <div className='our-passion-description faderedball'>
                            Our passion for lighting design is matched by our commitment to creating a more sustainable future, this dedicated section delves into how we integrate eco-friendliness into every facet of our operations. Prioritize to offer sustainable and recycled materials in our fixtures. Embrace LED technology, strategic placement of windows & skylights, Introducing smart lighting. This translates to lower carbon emissions, reduces our environmental footprint and reduced energy bills for our clients – a win-win for the planet and your wallet.
                        </div>
                    </div>
                    <div className='join-us-content'>
                        <div className='join-us-text'>Join us on this journey of sustainable illumination!</div>
                        <motion.div onClick={() => openModale()} whileHover={{ scale: 1.04 }} className='join-us-btn'>Contact us now</motion.div>
                    </div>
                </div>
            </div>
            <ContactModale />
        </>
    )
}

export default OurPassion