import { Container } from '@mui/system'
import React from 'react'
import './solution.css'
import image5 from '../../assets/sec5.png'
import {ApartmentOutlined, AppstoreAddOutlined, CloudServerOutlined} from '@ant-design/icons' 


function Solution() {
  return (
    <div className="solution__bg">
    <Container>
        <div className='solution__header'>
            <h1>OUR SOLUTIONS</h1>
            <h3>RPTN Always there to find modetn soltuin on modern problems based on innovative technologies</h3>
        </div>

        <div className="solution__flex">
            <div className="solution__content">
            <div className="box">
                <div className="solution__box">
                <div className="left__box">
                    <AppstoreAddOutlined style={{ fontSize: '3rem', color: 'white' }}/> <h3>Approach</h3> 
                </div>
            </div>

            <div className="solution__box">
                <div className="right__box">
                    <ApartmentOutlined  style={{ fontSize: '3rem', color: 'white' }}/> <h3>Foundation</h3> 
                </div>
            </div>
            </div>
            <div className="box">
            <div className="solution__box">
                <div className="right__box">
                    <AppstoreAddOutlined style={{ fontSize: '3rem', color: 'white' }}/> <h3>Approach</h3> 
                </div>
            </div>

            <div className="solution__box">
                <div className="left__box">
                    <CloudServerOutlined style={{ fontSize: '3rem', color: 'white' }}/> <h3>Cloud Security</h3> 
                </div>
            </div>
            </div>
            <div className='solution__img'>
                <img src={image5} alt='sec5'/>
            </div>
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Solution