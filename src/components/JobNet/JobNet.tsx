import React from 'react'
import { RecoilRoot } from 'recoil'
import SVGRect from './SVGRect'
import useJobNet from './useJobNet'

const JobNet = () => {

    return (
        <RecoilRoot>
            <CustomSVG />
        </RecoilRoot>
    )
}

const CustomSVG = () => {

    const { svgVal, addRect, rects } = useJobNet()

    return (
        <>
            <div><button onClick={addRect}>+</button></div>
            <svg width={svgVal.width} height={svgVal.height} style={{ backgroundColor: "lightblue" }}>
                {rects.map((val, index) => {
                    return (
                        <SVGRect key={index} x={val.x} y={val.y} width={val.width} height={val.height} rx={val.rx} ry={val.ry} fill={val.fill} stroke={val.stroke} strokeWidth={val.strokeWidth} />
                    )
                })}
                <SVGRect x={100} y={400} width={200} height={100} rx={10} ry={10} fill="white" stroke="navy" strokeWidth="3" />
            </svg>
        </>
    )
}

export default JobNet