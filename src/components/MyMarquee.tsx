import Marquee from "react-fast-marquee";

export default function MyMarquee ({children}: {children: any}) {
  return (
    <Marquee autoFill={true} speed={50} style={{height: '32px', overflow: 'hidden'}}>
      {children}
    </Marquee>
  )
}
