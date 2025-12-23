import styles from './styles.module.css';
export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={styles['loading']}></div>
    </div>
  );
}
