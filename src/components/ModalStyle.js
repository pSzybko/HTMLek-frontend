export const modalStyle = {
    overlay: {
        zIndex: 9999999,
        boxSizing: 'border-box',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',

    },
    content: {
        boxSizing: 'border-box',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '7px solid white',
        backgroundColor: 'rgba(255, 255, 255, 0.00)',
        overflow: 'hidden',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '20px',
        outline: 'none',
        padding: '0px',
        height: 'clamp(500px, 50vh, 800px)',
        width: 'clamp(400px,25vw, 700px)',
    }
}