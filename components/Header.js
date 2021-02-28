import headerStyles from '../styles/Header.module.css'
const Header = () => {

    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.descripcion}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, possimus.
            </p>
        </div>
    )
}

export default Header
