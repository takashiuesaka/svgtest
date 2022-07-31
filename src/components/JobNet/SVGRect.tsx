import React, { useState } from 'react'

export type RectType = {
    x: number,
    y: number,
    width: number,
    height: number,
    stroke: string,
    strokeWidth: string,
    fill: string,
    rx: number,
    ry: number,
    isSelected?: boolean
}

const SVGRect = (props: RectType) => {

    const [rectStatus, setRectStatus] = useState<RectType>({ ...props, isSelected: false })
    const [dragStatus, setDragStatus] = useState({ isMouseDown: false, x: 0, y: 0 })

    const onMouseDown: React.MouseEventHandler<SVGRectElement> = (_event) => {
        setDragStatus({ isMouseDown: true, x: _event.clientX - rectStatus.x, y: _event.clientY - rectStatus.y })
        //        console.log(`MouseDown svgX: ${_event.clientX - rectStatus.x}, svgY: ${_event.clientY - rectStatus.y}`)
    }

    const onMouseUpOrOut: React.MouseEventHandler<SVGRectElement> = (_event) => {
        setDragStatus({ isMouseDown: false, x: _event.clientX - rectStatus.x, y: _event.clientY - rectStatus.y })
        //        console.log(`Mouse type: ${_event.type} svgX: ${_event.clientX - rectStatus.x}, svgY: ${_event.clientY - rectStatus.y}`)
    }

    const onMouseMove: React.MouseEventHandler<SVGRectElement> = (_event) => {
        if (!dragStatus.isMouseDown) return;

        setRectStatus(prev => { return { ...prev, x: _event.clientX - dragStatus.x, y: _event.clientY - dragStatus.y } })
    }

    const onClick: React.MouseEventHandler<SVGRectElement> = (_event) => {
        _event.stopPropagation()
        setRectStatus(prev => {
            return { ...prev, isSelected: !prev.isSelected }
        })
    }

    return (
        <>
            <rect x={rectStatus.x} y={rectStatus.y} width={rectStatus.width} height={rectStatus.height} rx={rectStatus.rx} ry={rectStatus.ry} fill={rectStatus.fill} stroke={rectStatus.stroke} strokeWidth={rectStatus.strokeWidth}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUpOrOut}
                onMouseOut={onMouseUpOrOut}
                onMouseMove={onMouseMove}
                onClick={onClick}
            />
            <rect style={{ display: rectStatus.isSelected ? "" : "none" }}
                x={rectStatus.x} y={rectStatus.y} width={rectStatus.width} height={rectStatus.height} fill="none" stroke='#606060' strokeWidth="1" />
            <circle style={{ display: rectStatus.isSelected ? "" : "none" }} cx={rectStatus.x} cy={rectStatus.y} r={5} stroke="#606060" strokeWidth="2" fill="white" />
            <circle style={{ display: rectStatus.isSelected ? "" : "none" }} cx={rectStatus.x + (rectStatus.width / 2)} cy={rectStatus.y} r={5} stroke="#606060" strokeWidth="2" fill="white" />
            <circle style={{ display: rectStatus.isSelected ? "" : "none" }} cx={rectStatus.x + rectStatus.width} cy={rectStatus.y} r={5} stroke="#606060" strokeWidth="2" fill="white" />
            <circle style={{ display: rectStatus.isSelected ? "" : "none" }} cx={rectStatus.x} cy={rectStatus.y + (rectStatus.height / 2)} r={5} stroke="#606060" strokeWidth="2" fill="white" />
            <circle style={{ display: rectStatus.isSelected ? "" : "none" }} cx={rectStatus.x + rectStatus.width} cy={rectStatus.y + (rectStatus.height / 2)} r={5} stroke="#606060" strokeWidth="2" fill="white" />
            <circle style={{ display: rectStatus.isSelected ? "" : "none" }} cx={rectStatus.x} cy={rectStatus.y + rectStatus.height} r={5} stroke="#606060" strokeWidth="2" fill="white" />
            <circle style={{ display: rectStatus.isSelected ? "" : "none" }} cx={rectStatus.x + (rectStatus.width / 2)} cy={rectStatus.y + rectStatus.height} r={5} stroke="#606060" strokeWidth="2" fill="white" />
            <circle style={{ display: rectStatus.isSelected ? "" : "none" }} cx={rectStatus.x + rectStatus.width} cy={rectStatus.y + rectStatus.height} r={5} stroke="#606060" strokeWidth="2" fill="white" />
        </>
    )
}

export default SVGRect