import React from "react"
// import styles from "./CardMiddle.module.css";
// import SuitLogo from "./SuitLogo";
import { AceCard, TwoCard, ThreeCard, FourCard, FiveCard, SixCard, SevenCard, EightCard, NineCard, TenCard, KingCard, QueenCard, JackCard, JokerCard, FlipCard } from './CardMiddleSuitSupplier';

const CardMiddle = ({ suit , type}) => {
  if (type === 'X')
    return <FlipCard suit={suit} type={type}/>
  else if (type === 'J')
    return <JackCard suit={suit} type={type}/>
  else if (type === '9')
    return <NineCard suit={suit} type={type}/>
  else if (type === 'A')
    return <AceCard suit={suit} type={type}/>
  else if (type === '10') 
  return <TenCard suit={suit} type={type}/>
  else if (type === 'K')
    return <KingCard suit={suit} type={type}/>
  else if (type === 'Q')
    return <QueenCard suit={suit} type={type}/>
  else if (type === '8')
    return <EightCard suit={suit} type={type}/>
  else if (type === '7')
    return <SevenCard suit={suit} type={type}/>
  else if (type === '6')
    return <SixCard suit={suit} type={type}/>
  else if (type === '5')
    return <FiveCard suit={suit} type={type}/>
  else if (type === '4')
    return <FourCard suit={suit} type={type}/>
  else if (type === '3')
    return <ThreeCard suit={suit} type={type}/>
  else if (type === '2')
    return <TwoCard suit={suit} type={type}/>
  else if (type === 'J')
    return <JokerCard suit={suit} type={type}/>
};


export default CardMiddle;