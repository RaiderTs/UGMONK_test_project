import Image from '../../../../assets/Rectangle (3).jpg';
import styles from './CardComponent.module.css';

const CardComponent = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__page}>
        <div className={styles.card__container}>
          <img
            className={styles.card__img}
            src={Image}
            alt="img"
            width="275"
            height="341"
          />
          <div className={styles.card__titleContainer}>
            <h3 className={styles.card__title}>
              Modus Operandi - Artist Collab &nbsp;
            </h3>
            <p className={styles.card__titleClarification}>(3 Pack)</p>
          </div>
          <div className={styles.card__priceContainer}>
            <div className={styles.card__price}>$126.00 &nbsp;</div>
            <div className={styles.card__pricePromotional}>$120.00</div>
          </div>
        </div>
        <div className={styles.card__container}>
          <img
            className={styles.card__img}
            src={Image}
            alt="img"
            width="275"
            height="341"
          />
          <div className={styles.card__titleContainer}>
            <h3 className={styles.card__title}>
              Modus Operandi - Artist Collab &nbsp;
            </h3>
            <p className={styles.card__titleClarification}>(3 Pack)</p>
          </div>
          <div className={styles.card__priceContainer}>
            <div className={styles.card__price}>$126.00 &nbsp;</div>
            <div className={styles.card__pricePromotional}>$120.00</div>
          </div>
        </div>
        <div className={styles.card__container}>
          <img
            className={styles.card__img}
            src={Image}
            alt="img"
            width="275"
            height="341"
          />
          <div className={styles.card__titleContainer}>
            <h3 className={styles.card__title}>
              Modus Operandi - Artist Collab &nbsp;
            </h3>
            <p className={styles.card__titleClarification}>(3 Pack)</p>
          </div>
          <div className={styles.card__priceContainer}>
            <div className={styles.card__price}>$126.00 &nbsp;</div>
            <div className={styles.card__pricePromotional}>$120.00</div>
          </div>
        </div>
        <div className={styles.card__container}>
          <img
            className={styles.card__img}
            src={Image}
            alt="img"
            width="275"
            height="341"
          />
          <div className={styles.card__titleContainer}>
            <h3 className={styles.card__title}>
              Modus Operandi - Artist Collab &nbsp;
            </h3>
            <p className={styles.card__titleClarification}>(3 Pack)</p>
          </div>
          <div className={styles.card__priceContainer}>
            <div className={styles.card__price}>$126.00 &nbsp;</div>
            <div className={styles.card__pricePromotional}>$120.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
