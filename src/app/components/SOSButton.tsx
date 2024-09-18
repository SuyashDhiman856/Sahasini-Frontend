import styles from '../styles/sos.module.css'

export default function SOSButton() {
    return (
        <>
        <div style={{margin: "50px 0"}}>
        <h1 style={{color: "#DC143C", textAlign : "center", fontSize: "xx-large", fontWeight: "bolder"}}>Women Emergency SOS</h1>
            <button type="button" id={styles["sos-button"]} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">SOS</button>
            </div>
        </>
    )
}