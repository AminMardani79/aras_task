import styles from "./exchangeInfo.module.scss";

function ExchangeInfo() {
  return (
    <div className={styles.infoWrapper}>
      <section className={styles.infoTitle}>باراز نقدی بورس در یک نگاه</section>
      <section className={styles.infoSection}>
        <div className={styles.infoItem}>
          <span>وضعیت بازار</span>
          <span>بسته</span>
        </div>
        <div className={styles.infoItem}>
          <span>شاخص کل</span>
          <span>2,150,035.3</span>
        </div>
        <div className={styles.infoItem}>
          <span>ارزش بازار</span>
          <span>2,150,035.3</span>
        </div>
        <div className={styles.infoItem}>
          <span>اطلاعات قیمت</span>
          <span>2,150,035.3</span>
        </div>
        <div className={styles.infoItem}>
          <span>ارزش معاملات</span>
          <span>2,150,035.3</span>
        </div>
        <div className={styles.infoItem}>
          <span>اطلاعات قیمت</span>
          <span>2,150,035.3</span>
        </div>
        <div className={styles.infoItem}>
          <span>ارزش معاملات</span>
          <span>2,150,035.3</span>
        </div>
        <div className={styles.infoItem}>
          <span>اطلاعات قیمت</span>
          <span>2,150,035.3</span>
        </div>
        <div className={styles.infoItem}>
          <span>ارزش معاملات</span>
          <span>2,150,035.3</span>
        </div>
      </section>
    </div>
  );
}

export default ExchangeInfo;
