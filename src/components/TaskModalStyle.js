export const taskModalStyle = {
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
        backgroundColor: 'rgba(255, 253, 250, 1.00)',
        overflow: 'hidden',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '20px',
        outline: 'none',
        padding: '30px',
        height: 'max(700px, 80vh)',
        width: 'max(1000px, 85vw)',
    }
}