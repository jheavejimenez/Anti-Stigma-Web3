import { useState, } from 'react'
import { NextSeo } from 'next-seo'
import { Slider, Button } from 'antd'
import styled from 'styled-components'
import Image from 'next/image'

import Container from '../components/Container'
import { Wrapper, } from '../components/styled'

import StigmaStucked from '../public/all-anti-stigma-stucked.webp'

const MaticTotal = styled.h2`
    color: var(--purple)
`

const MintButton = styled(Button)`
    font-size:1.31rem;
    height:auto;
    color:#28A980;
    border-radius:5px;
`
const MintSlider = styled(Slider)`
    height:22px;

    .ant-slider-rail, .ant-slider-track {
        height:10px;
    }

    .ant-slider-handle {
        width:22px;
        height:22px;
        margin-top:-6px;
    }
`

const mint = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [amount, setAmount] = useState(1)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [maticAmount, setmaticAmount] = useState(4)

    const getAmount = value => {
        let totalMatic = value * 4
        setAmount(value)
        setmaticAmount(totalMatic)
    }

    return (
        <>
            <NextSeo
                title="Mint"
            />

            <Container>
                <Wrapper
                    parentClassName='justify-content-center'
                    contentClassName='col-md-3'
                >
                    <Image
                        alt='Anti Stigma Stucked'
                        src={StigmaStucked}
                        width={300}
                        height={300}
                    />
                    <div className="text-center">
                        <MaticTotal>{maticAmount} MATIC</MaticTotal>
                        <h5>Amount ( {amount} )</h5>
                    </div>
                    <MintSlider
                        defaultValue={0}
                        min={1}
                        max={10}
                        onChange={getAmount}
                    />
                    <div className="d-flex">
                        <MintButton className='mx-auto'>Mint</MintButton>
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}
export default mint