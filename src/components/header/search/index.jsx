import useOnChange from '../../../hooks/useOnChange';
import styles from './styles.module.scss'

const Search = () => {
  const { value, onChange } = useOnChange()
  
  return <div className={styles.container}>
    <input value={value} className={styles.input} onChange={onChange} />
    <button className={styles.button}>Search</button>
  </div>
};
export default Search
