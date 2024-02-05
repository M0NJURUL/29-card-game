import React from "react";
import styles from "./CardMiddleSuitSupplier.module.css";
import SuitLogo from "./SuitLogo";

export function FlipCard () {
  return (
    <div className={styles.flipped}>aa</div>
  );
}

export function JackCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      {/* <div className="face">
        <SuitLogo suit={suit}></SuitLogo>
      </div> */}
    </div>
  );
}

export function NineCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      <div className={styles.place1}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place2}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place3}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place4}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place6}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place7}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place8}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place9}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place15}>
        <SuitLogo suit={suit} />
      </div>
    </div>
  );
}

export function AceCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      {/* <div className="face">
          <SuitLogo suit={suit}></SuitLogo>
        </div> */}
    </div>
  );
}

export function TenCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      <div className={styles.place1}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place2}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place3}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place4}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place6}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place7}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place8}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place9}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place12}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place13}>
        <SuitLogo suit={suit} />
      </div>
    </div>
  );
}

export function KingCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      <div className="face">
        <SuitLogo suit={suit}></SuitLogo>
      </div>
    </div>
  );
}

export function QueenCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      {/* <div className="face">
          <SuitLogo suit={suit}></SuitLogo>
        </div> */}
    </div>
  );
}

export function EightCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      <div className={styles.place1}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place2}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place3}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place4}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place6}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place7}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place8}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place9}>
        <SuitLogo suit={suit} />
      </div>
    </div>
  );
}

export function SevenCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      <div className={styles.place1}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place4}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place5}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place6}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place9}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place10}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place12}>
        <SuitLogo suit={suit} />
      </div>
    </div>
  );
}

export function SixCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      <div className={styles.place1}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place4}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place5}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place6}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place9}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place10}>
        <SuitLogo suit={suit} />
      </div>
    </div>
  );
}

export function FiveCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      <div className={styles.place1}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place4}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place6}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place9}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place15}>
        <SuitLogo suit={suit} />
      </div>
    </div>
  );
}

export function FourCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      <div className={styles.place1}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place4}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place6}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place9}>
        <SuitLogo suit={suit} />
      </div>
    </div>
  );
}

export function ThreeCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      <div className={styles.place11}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place14}>
        <SuitLogo suit={suit} />
      </div>

      <div className={styles.place15}>
        <SuitLogo suit={suit} />
      </div>
    </div>
  );
}

export function TwoCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      <div className={styles.place11}>
        <SuitLogo suit={suit} />
      </div>
      <div className={styles.place14}>
        <SuitLogo suit={suit} />
      </div>
    </div>
  );
}

export function JokerCard({ suit }) {
  return (
    <div className={styles.logosGridContainer}>
      {/* <div className="face">
            <SuitLogo suit={suit}></SuitLogo>
          </div> */}
    </div>
  );
}

// export default CardMiddleSuitSupplier;
