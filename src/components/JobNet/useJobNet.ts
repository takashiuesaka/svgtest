import { setUncaughtExceptionCaptureCallback } from "process"
import { useState } from "react"
import { atom, atomFamily, useRecoilState, useRecoilValue } from "recoil"

const useJobNet = () => {

    const svgatm = atom({
        key: 'svgattr',
        default: { width: "500", height: "100vh" }
    })

    const svgVal = useRecoilValue(svgatm)

    type rectType = {
        x: number,
        y: number,
        width: number,
        height: number,
        rx: number,
        ry: number,
        fill: string,
        stroke: string,
        strokeWidth: string
    }
    const [rects, setRects] = useState<Array<rectType>>([])

    // const rectStateFamily = atomFamily({
    //     key: 'rectFamily',
    //     default:
    //         {}
    // });

    // const newAtom = rectStateFamily('some id')
    // const [counter, setCounter] = useRecoilState(newAtom)

    const addRect: React.MouseEventHandler<HTMLButtonElement> = (_e) => {
        setRects(array => [...array, { x: 10, y: 100, width: 200, height: 100, rx: 10, ry: 10, fill: "white", stroke: "navy", strokeWidth: "3" }])
    }


    return { svgVal, addRect, rects }
}

export default useJobNet