import './Slider.css'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const Slider = (props) => {

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    return (
        <div id={props.id}>
            <motion.div className="carousel" whileTap={{cursor: "grabbing"}} ref={carousel}>
                <motion.div 
                    className="inner" 
                    drag={"x"}
                    dragConstraints={{ right: 0, left: -width}}
                >
                    {props.cards.map(card => (
                        <motion.div className="item" key={card}>
                            <img src={card}/>
                        </motion.div>
                    ))} 
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Slider