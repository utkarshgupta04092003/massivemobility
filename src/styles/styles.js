export const sideBarClasses = {
    sideBarLogo: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
        marginTop: '15px',
        backgroundColor: '#FFFAF4',
        'P': {
            fontWeight: '700',
            marginLeft: '7px'
        }
    },
    sidebar: {
        fontSize: 40,
        backgroundColor: '#FFFAF4',
        width: '25%',
        maxWidth: '320px',
        // padding: '10px',
        height: '100vh'

    },
    listItem: {
        width: '70%',
        margin: 'auto',
        marginTop: '10px',
        borderRadius: '8px',
    },
    selectedListItem: {
        width: '70%',
        margin: 'auto',
        marginTop: '10px',
        borderRadius: '8px',
        backgroundColor: '#484644',
        color: 'white',
        '&:hover': {
            backgroundColor: '#484644',
        }
    }
}
