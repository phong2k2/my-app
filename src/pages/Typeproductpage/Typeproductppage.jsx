import React from 'react'
import Navbarcomponent from '../../components/Navbarcomponent/Navbarcomponent'
import Cardcomponent from '../../components/Cardcomponent/Cardcomponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const Typeproductppage = () => {
    const onChange = () => { }
    return (
        <div style={{ width: '100%', background: '#efefef' }}>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <Row style={{ flexWrap: 'nowrap', paddingTop: ' 10px' }}>
                    <WrapperNavbar span={4}>
                        <Navbarcomponent />
                    </WrapperNavbar>
                    <Col span={20}>
                        <WrapperProducts >
                            <Cardcomponent />
                            <Cardcomponent />
                            <Cardcomponent />
                            <Cardcomponent />
                            <Cardcomponent />
                            <Cardcomponent />
                            <Cardcomponent />
                        </WrapperProducts>
                        <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ justifyContent: 'center', marginTop: '10px' }} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Typeproductppage