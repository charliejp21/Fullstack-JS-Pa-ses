import style from "./Searchbar.module.css"

export default function Searchbar(){

 return (
    
    <>
    
    <form /* onSubmit={submitHandlerSearch} */>

        <input type="text" /* value={search.name} */ name="name" /* onChange={handleChangeSearch} */ className={style.inputSearch}/>

        <button className={style.searchButton}>Buscar</button>

    </form>

    </>

 )

}