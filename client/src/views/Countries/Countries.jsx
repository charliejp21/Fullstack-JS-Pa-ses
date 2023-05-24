import style from './Countries.module.css'

const countriesCotainer = () =>  {

    return (

        <>
            <h1 className={style.bienvenido}>Bienvenido</h1> 

            <h2 className={style.subtitle}>Busca, selecciona o crea una nueva actividad</h2>

            {/* <div className={style.recipesSection}>

                <div className={style.overlay}></div>

                <div className={style.headerContainer}>

                    <div className={style.selectsContainer}>

                        <div>
                            
                            <p>Ordenar por:</p>

                            <div className={style.sortContainer}>

                                <select name="" id="" onChange={(e) => { handlerOrden(e.target.value); }}>

                                    <option value="default" selected={stateSort === "default"}>

                                        Default

                                    </option>

                                    <option value="a-z" selected={stateSort === "a-z"}>

                                        A-z

                                    </option>

                                    <option value="z-a" selected={stateSort === "z-a"}>

                                        Z-a

                                    </option>

                                    <option value="menor-mayor" selected={stateSort === "menor-mayor"} >
                                        
                                        HealthScore de Menor a Mayor

                                    </option>

                                    <option value="mayor-menor" selected={stateSort === "mayor-menor"} >

                                        HealthScore de Mayor a Menor

                                    </option>

                                </select>

                            </div>

                        </div>

                        <div>
                        
                            <p>Filtrar por dieta:</p>

                            <div className={style.selectContainer}>
                                
                                <select name="" id="" onChange={(e) => { handlerFilter(e.target.value);}}>

                                    <option selected={currentFilter === "default"} value={"default"} >
                                        
                                        Todas
                                    
                                    </option>

                                    {diets.map((diet) => ( 
                                        
                                        <option selected={currentFilter === diet.name} value={diet.name} key={diet.id} >

                                            {diet.name}

                                        </option>
                                    
                                    ))}

                                </select>

                            </div>

                        </div>

                    </div>

                    <div className={style.pageBtnContainer}>

                        {pagination.max.map((page) => (
                        
                            <button key={page} onClick={() => {changeHandlerPage(page); }} 
                            
                                className={page === pagination.currentPage 

                                            ? `${style.btn} ${style.btnPage}` //Si es página actual no hacer hover
                                
                                            : `${style.btn}`
                                
                                }>
                                    
                                {page}
                            
                            </button>

                        ))}

                    </div>

                </div>

                <div className={style.recipesContainer}>
                    
                    {pageView.length ? 
                    
                        (pageView.map((recipe) => (
                            
                            <Recipe

                                key={recipe.title}
                                id = {recipe.id}
                                title = {recipe.title}
                                summary = {recipe.summary}
                                healthScore = {recipe.healthScore}
                                image = {recipe.image}
                                diets = {recipe.diets}
                            
                            />
                        
                        ))

                    ) : (

                        <h2 className={style.subtitle}>Loading...</h2>
                    
                    )}

                </div>

            </div> */}
        
        
        </>

    )

}

export default countriesCotainer;