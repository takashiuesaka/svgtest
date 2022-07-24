import React, { useState } from "react"

export type CircleType = {
    x: number,
    y: number,
    r: number,
    stroke: string,
    strokeWidth: string,
    fill: string
}

const SVGCircle = (props: CircleType) => {

    const [circleStatus, setCircleStatus] = useState<CircleType>({ x: props.x, y: props.y, r: props.r, stroke: props.stroke, strokeWidth: props.strokeWidth, fill: props.fill })

    const [dragStatus, setDragStatus] = useState({ isMouseDown: false, x: 0, y: 0 })

    const onMouseDown: React.MouseEventHandler<SVGCircleElement> = (_event) => {
        setDragStatus({ isMouseDown: true, x: _event.clientX - circleStatus.x, y: _event.clientY - circleStatus.y })
        console.log(`MouseDown svgX: ${_event.clientX - circleStatus.x}, svgY: ${_event.clientY - circleStatus.y}`)
    }

    const onMouseUpOrOut: React.MouseEventHandler<SVGCircleElement> = (_event) => {
        setDragStatus({ isMouseDown: false, x: _event.clientX - circleStatus.x, y: _event.clientY - circleStatus.y })
        console.log(`MouseUp svgX: ${_event.clientX - circleStatus.x}, svgY: ${_event.clientY - circleStatus.y}`)
    }

    const onMouseMove: React.MouseEventHandler<SVGCircleElement> = (_event) => {
        if (!dragStatus.isMouseDown) return;

        setCircleStatus(prev => { return { ...prev, x: _event.clientX - dragStatus.x, y: _event.clientY - dragStatus.y } })
    }

    return (
        <circle cx={circleStatus.x} cy={circleStatus.y} r={circleStatus.r} stroke={circleStatus.stroke} strokeWidth={circleStatus.strokeWidth} fill={circleStatus.fill}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUpOrOut}
            onMouseOut={onMouseUpOrOut}
            onMouseMove={onMouseMove} />
    )
}

export default SVGCircle