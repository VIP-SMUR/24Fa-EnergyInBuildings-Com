import styles from './RunButton.module.css';

interface RunButtonProps {
  onClick: () => void;
}

export default function RunButton({ onClick }: RunButtonProps) {
  return (
    <button onClick={onClick} className={styles.runButton}>
      Run
    </button>
  );
}
